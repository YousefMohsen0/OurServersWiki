# Deploy & Secrets for Feedback webhook

This project reads `WEBHOOK_URL` from the environment. Do NOT commit your real webhook URL.

Local development

- Create a local `.env` from `.env.example` and set your webhook:

  ```bash
  cp .env.example .env
  # edit .env and replace the value
  ```

- Start the docs (front-end) and API dev servers:

  ```bash
  pnpm docs:dev    # site at http://localhost:5173
  pnpm api:dev     # nitro dev server at http://localhost:3000
  ```

- Alternatively run `wrangler pages dev` and load env from a file:

  ```bash
  pnpm exec wrangler pages dev --env-file .env
  ```

GitHub / CI

- Add `WEBHOOK_URL` as a GitHub Repository Secret (Settings → Secrets → Actions).
- The existing `/.github/workflows/deploy-api.yml` already expects `WEBHOOK_URL` in `secrets`.

Cloudflare Pages

- In the Pages project settings, add an environment variable named `WEBHOOK_URL` for the production and preview environments.
- If the Pages build ignores the repo `.npmrc`, set `PNPM_CONFIG_AUTO_INSTALL_PEERS=false` in the project environment or use `pnpm install --frozen-lockfile --config.autoInstallPeers=false` as the build install step.

Wrangler / Workers

- To add a secret for a Worker / Wrangler deploy run:

  ```bash
  npx wrangler secret put WEBHOOK_URL
  ```

Security notes

- Keep the webhook secret private. Rotate it if it is ever leaked.
- Local `.env` is ignored by `.gitignore` (the repo includes `.env` in `.gitignore`).