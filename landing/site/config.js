// Site settings for the landing page and the free trial. Edit this file, then upload the site again.
// Everything left empty is switched off safely (buttons explain that the link is not set yet).
window.SITE_CONFIG = {
  product: 'Big Countdown',
  price: '$49',
  trialMinutes: 5,

  // Payment: your Lemon Squeezy checkout link, e.g. https://yourstore.lemonsqueezy.com/buy/abc123
  checkoutUrl: '',
  // Lemon Squeezy product ID, so only keys for this product unlock the timer (Products > your product > ID)
  licenseProductId: '',

  // CRM: the URL that receives sign-ups and events (see crm/README.md). Google Apps Script works out of the box.
  leadEndpoint: '',
  // 'no-cors' for Google Apps Script, Make and Zapier webhooks; 'json' for endpoints that allow CORS
  leadMode: 'no-cors',

  // Google sign-in: OAuth web client ID from Google Cloud Console
  googleClientId: '',

  // Analytics (optional): your domain as registered in Plausible, e.g. bigcountdown.com
  plausibleDomain: '',

  supportEmail: 'hello@example.com',
  appUrl: 'app/index.html',
  termsUrl: '../terms.html',
  privacyUrl: '../privacy.html',
  myOrdersUrl: 'https://app.lemonsqueezy.com/my-orders'
};
