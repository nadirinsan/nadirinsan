# CRM setup: Google Sheet + automatic emails

Free, about 15 minutes. Every trial sign-up lands in a Google Sheet, purchases are matched to the
same person, and follow-up emails go out from your Gmail automatically.

## What you get

- **Contacts** sheet: one row per person with name, email, sign-up method, newsletter choice,
  and a status that moves forward: `signed_up` → `trial_started` → `trial_ended` →
  `checkout_clicked` → `offer_requested` → `customer` (or `refunded`).
- **Events** sheet: every step with a timestamp. Use it for your funnel numbers.
- **Emails**, sent once each:
  - *Welcome* right after sign-up, with quick-start steps.
  - *Trial ended* with the buy link, prefilled with their name and email.
  - *Offer* when someone clicks "Email me this offer" on the paywall.
  - *Thank you* after purchase, with how to unlock and where to find the file.

## Steps

1. Create a new Google Sheet, for example "Big Countdown CRM".
2. In the sheet: **Extensions → Apps Script**. Delete the sample code, paste all of
   `google-apps-script.gs`, and fill in `SETTINGS` at the top (checkout link, site address,
   reply-to email, and a long random text for `lemonSqueezyToken`).
3. Choose the function **setup** and click **Run**. Approve the permissions (Sheets and Gmail).
4. **Deploy → New deployment → Web app**. Execute as: **Me**. Who has access: **Anyone**.
   Copy the web app URL.
5. Paste the URL into `landing/config.js` as `leadEndpoint` (keep `leadMode: 'no-cors'`).
6. Purchases: in Lemon Squeezy go to **Settings → Webhooks → +**. URL:
   `YOUR_WEB_APP_URL?source=lemonsqueezy&token=YOUR_TOKEN`. Events: `order_created` and
   `order_refunded`. Any signing secret is fine; the token in the URL is what this script checks.
7. Test: sign up on your live trial page with your own email. A row should appear in
   **Contacts** and a welcome email in your inbox within a minute.

## Limits and upgrades

- Gmail sends up to about 100 emails a day on a free account (1,500 on Google Workspace).
- When you outgrow the sheet, point `leadEndpoint` at Brevo, HubSpot, Make or Zapier instead.
  The trial sends the same JSON to any URL. Set `leadMode: 'json'` if that service allows
  browser requests (CORS).

## Event format

Every event is a JSON object like this:

```json
{
  "event": "signup",
  "at": "2026-10-06T10:00:00.000Z",
  "product": "Big Countdown",
  "email": "ana@example.com",
  "firstName": "Ana",
  "lastName": "Lee",
  "method": "form",
  "newsletter": true,
  "trialUsedSeconds": 0,
  "page": "https://yourdomain.com/app/"
}
```

Events: `signup`, `trial_started`, `trial_ended`, `checkout_clicked`, `offer_requested`,
`license_activated`, `license_failed`.
