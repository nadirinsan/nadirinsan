/**
 * Big Countdown CRM in a Google Sheet.
 *
 * Receives sign-ups and events from the free trial, and purchases from Lemon Squeezy.
 * Keeps one row per person in "Contacts", logs everything in "Events", and sends the
 * follow-up emails (welcome, trial ended, offer, thank you) from your Gmail account.
 *
 * Setup: see crm/README.md.
 */

// ---- Settings ----
const SETTINGS = {
  product: 'Big Countdown',
  price: '$49',
  checkoutUrl: 'https://YOURSTORE.lemonsqueezy.com/buy/XXXX', // same link as in config.js
  siteUrl: 'https://YOURDOMAIN.com',
  fromName: 'Big Countdown',
  replyTo: 'hello@example.com',
  sendEmails: true,                 // set to false to only record data
  lemonSqueezyToken: 'CHANGE-ME-TO-A-LONG-RANDOM-TEXT' // must match ?token= in the Lemon Squeezy webhook URL
};
// -------------------

const CONTACT_COLUMNS = ['email', 'firstName', 'lastName', 'method', 'newsletter', 'status', 'signedUpAt',
  'trialStartedAt', 'trialEndedAt', 'checkoutClickedAt', 'offerRequestedAt', 'purchasedAt', 'orderId', 'total', 'lastEventAt'];
const EVENT_COLUMNS = ['at', 'event', 'email', 'firstName', 'lastName', 'method', 'newsletter', 'trialUsedSeconds', 'page', 'details'];
// Status only moves forward, so a late event never downgrades a customer.
const STATUS_ORDER = ['signed_up', 'trial_started', 'trial_ended', 'checkout_clicked', 'offer_requested', 'customer'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const body = JSON.parse((e.postData && e.postData.contents) || '{}');
    if (e.parameter && e.parameter.source === 'lemonsqueezy') return handleLemonSqueezy(e, body);
    handleTrialEvent(body);
    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function handleTrialEvent(ev) {
  const email = String(ev.email || '').trim().toLowerCase();
  logEvent(ev, email);
  if (!email) return;
  const statusFor = { signup: 'signed_up', trial_started: 'trial_started', trial_ended: 'trial_ended',
    checkout_clicked: 'checkout_clicked', offer_requested: 'offer_requested', license_activated: 'customer' };
  const dateField = { signup: 'signedUpAt', trial_started: 'trialStartedAt', trial_ended: 'trialEndedAt',
    checkout_clicked: 'checkoutClickedAt', offer_requested: 'offerRequestedAt' };
  const { row, isNew } = upsertContact(email, {
    firstName: ev.firstName, lastName: ev.lastName, method: ev.method,
    newsletter: ev.newsletter ? 'yes' : 'no',
    [dateField[ev.event] || 'lastEventAt']: ev.at || new Date().toISOString()
  }, statusFor[ev.event]);

  if (!SETTINGS.sendEmails) return;
  if (ev.event === 'signup' && isNew) sendTemplate(email, row, 'welcome');
  if (ev.event === 'trial_ended' && row.status !== 'customer') sendTemplate(email, row, 'trialEnded');
  if (ev.event === 'offer_requested' && row.status !== 'customer') sendTemplate(email, row, 'offer');
}

function handleLemonSqueezy(e, body) {
  if (e.parameter.token !== SETTINGS.lemonSqueezyToken) return json({ ok: false, error: 'bad token' });
  const name = body.meta && body.meta.event_name;
  const a = (body.data && body.data.attributes) || {};
  const email = String(a.user_email || '').trim().toLowerCase();
  logEvent({ event: 'ls_' + name, at: new Date().toISOString(), firstName: a.user_name, details: JSON.stringify({ id: body.data && body.data.id, total: a.total_formatted, status: a.status }) }, email);
  if (name === 'order_created' && email) {
    const parts = String(a.user_name || '').split(' ');
    const { row } = upsertContact(email, {
      firstName: parts[0] || '', lastName: parts.slice(1).join(' '),
      purchasedAt: a.created_at || new Date().toISOString(), orderId: String(body.data.id), total: a.total_formatted || ''
    }, 'customer');
    if (SETTINGS.sendEmails) sendTemplate(email, row, 'thanks');
  }
  if (name === 'order_refunded' && email) upsertContact(email, { status: 'refunded' }, null, true);
  return json({ ok: true });
}

// ---- Sheets helpers ----
function sheet(name, columns) {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); sh.appendRow(columns); sh.setFrozenRows(1); }
  return sh;
}
function logEvent(ev, email) {
  const sh = sheet('Events', EVENT_COLUMNS);
  const known = ['at', 'event', 'email', 'firstName', 'lastName', 'method', 'newsletter', 'trialUsedSeconds', 'page'];
  const details = ev.details || JSON.stringify(Object.fromEntries(Object.entries(ev).filter(([k]) => !known.includes(k) && k !== 'product')));
  sh.appendRow([ev.at || new Date().toISOString(), ev.event || '', email, ev.firstName || '', ev.lastName || '',
    ev.method || '', ev.newsletter ? 'yes' : '', ev.trialUsedSeconds || '', ev.page || '', details]);
}
function upsertContact(email, fields, status, forceStatus) {
  const sh = sheet('Contacts', CONTACT_COLUMNS);
  const data = sh.getDataRange().getValues();
  const head = data[0];
  let idx = data.findIndex((r, i) => i > 0 && String(r[0]).toLowerCase() === email);
  const isNew = idx < 0;
  const row = isNew ? Object.fromEntries(head.map(h => [h, ''])) : Object.fromEntries(head.map((h, i) => [h, data[idx][i]]));
  row.email = email;
  Object.entries(fields).forEach(([k, v]) => { if (v !== undefined && v !== '' && (k in row)) row[k] = v; });
  if (forceStatus && fields.status) row.status = fields.status;
  else if (status && STATUS_ORDER.indexOf(status) > STATUS_ORDER.indexOf(row.status)) row.status = status;
  row.lastEventAt = new Date().toISOString();
  const values = [head.map(h => row[h])];
  if (isNew) sh.appendRow(values[0]); else sh.getRange(idx + 1, 1, 1, head.length).setValues(values);
  return { row, isNew };
}
function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// ---- Emails ----
function sendTemplate(email, row, key) {
  const name = row.firstName || 'there';
  const buy = SETTINGS.checkoutUrl + (SETTINGS.checkoutUrl.indexOf('?') < 0 ? '?' : '&') +
    'checkout[email]=' + encodeURIComponent(email) + '&checkout[name]=' + encodeURIComponent((row.firstName + ' ' + row.lastName).trim());
  const T = {
    welcome: {
      subject: `Your ${SETTINGS.product} trial is ready`,
      body: `Hi ${name},\n\nThanks for trying ${SETTINGS.product}. You have 5 minutes of countdown to test it on your own stage screen.\n\nQuick start:\n1. Connect your laptop to the stage screen and open the trial: ${SETTINGS.siteUrl}/app/\n2. Add your event logo and pick a background.\n3. Type the session length and press Space. Press F for full screen.\n\nReply to this email if you have any questions.\n\n${SETTINGS.fromName}`
    },
    trialEnded: {
      subject: `Your ${SETTINGS.product} trial has ended`,
      body: `Hi ${name},\n\nYour free 5 minutes are up. If the timer worked for your team, you can keep it for life for ${SETTINGS.price}, one time:\n${buy}\n\nYou get a license key for the web version and an offline file for venues without Wi-Fi. Use it at every event you run.\n\nAny questions before you buy? Just reply.\n\n${SETTINGS.fromName}`
    },
    offer: {
      subject: `Your ${SETTINGS.product} offer: lifetime access for ${SETTINGS.price}`,
      body: `Hi ${name},\n\nHere is the link you asked for. Buy once, use it at every event, no subscription:\n${buy}\n\nAfter payment you get a license key and the timer file by email.\n\n${SETTINGS.fromName}`
    },
    thanks: {
      subject: `Thank you for buying ${SETTINGS.product}`,
      body: `Hi ${name},\n\nThank you! Your license key and download link are in the receipt email from Lemon Squeezy.\n\n- Web version: open ${SETTINGS.siteUrl}/app/#unlock and paste your key.\n- Offline: open the downloaded file on any computer.\n\nLost something later? Find your order at https://app.lemonsqueezy.com/my-orders, or reply to this email.\n\n${SETTINGS.fromName}`
    }
  };
  const t = T[key];
  if (!t) return;
  MailApp.sendEmail({ to: email, subject: t.subject, body: t.body, name: SETTINGS.fromName, replyTo: SETTINGS.replyTo });
  logEvent({ event: 'email_' + key, at: new Date().toISOString() }, email);
}

/** Run once from the editor to create the sheets and approve permissions. */
function setup() {
  sheet('Contacts', CONTACT_COLUMNS);
  sheet('Events', EVENT_COLUMNS);
}
