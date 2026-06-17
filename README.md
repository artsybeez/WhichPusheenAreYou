<img src = "https://pusheen.com/wp-content/uploads/2020/04/How-well-do-you-know-Pusheen-and-co-12.jpg">

# Which Pusheen Are You? ~

A cute, cozy personality quiz website. Answer 12 fun questions and find out which
Pusheen character matches your vibe!

## What it does

- Asks you 12 questions, each with 6 answer choices.
- Adds up your answers and reveals your matching character
- Results are saved locally with cookies.
- **Skin Shop** — buy cute alternate skins for each character with Stripe, then
  equip them so they show up across the quiz.

## Skin Shop (Stripe)

The shop uses **Stripe Checkout** with two Vercel serverless functions in `/api`:

- `POST /api/create-checkout-session` — creates a Checkout session for a skin and
  returns the hosted Stripe URL. Prices live server-side in `api/_catalog.js`, so
  the browser can never tamper with the amount charged.
- `GET /api/verify-session` — after the buyer returns, confirms the payment with
  Stripe and tells the page which skin to unlock.

Owned/equipped skins are stored in the browser's `localStorage`.

### Configuration

The secret key is read from the `STRIPE_SECRET_KEY` environment variable — it is
**never** hardcoded or committed.

- **Local:** copy `.env.example` to `.env` and paste your Stripe **test** secret
  key (`sk_test_…`). `.env` is gitignored.
- **Production (Vercel):** add `STRIPE_SECRET_KEY` under
  Project → Settings → Environment Variables.

### Run locally (plain Node — no Vercel needed)

```bash
npm install
npm start           # -> http://localhost:3000
```

`server.js` is a tiny zero-dependency dev server that serves the static site and
runs the same `/api` functions, reading `STRIPE_SECRET_KEY` from your local
`.env`. (Opening `index.html` directly as a file won't work — the shop needs the
`/api` routes, which is exactly what `npm start` provides.)

On Vercel you don't run this server at all — Vercel serves the static files and
runs the `/api` functions automatically.

### Test a purchase

In Stripe **test mode**, on the Checkout page use card **4242 4242 4242 4242**,
any future expiry date, any CVC, and any ZIP. After a successful payment you're
redirected back and the skin is unlocked & auto-equipped.

Made with 💕 by Bleta
