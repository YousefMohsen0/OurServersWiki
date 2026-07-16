# OSW - Our Server Wiki

[![GitHub stars](https://img.shields.io/github/stars/YousefMohsen0/OurServersWiki?style=for-the-badge&logo=github)](https://github.com/YousefMohsen0/OurServersWiki/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/YousefMohsen0/OurServersWiki?style=for-the-badge&logo=github)](https://github.com/YousefMohsen0/OurServersWiki/network/members)
[![Cloudflare](https://img.shields.io/badge/hosted%20on-Cloudflare-F38020?style=for-the-badge&logo=cloudflare)](https://pages.cloudflare.com/)
[![Arabic README](https://img.shields.io/badge/README-Arabic-111827?style=for-the-badge)](README.md)

OSW is a fork/copy of FMHY built as our server's wiki, focused on curated resources, easy browsing, and community contributions.

## What this project includes

- The main wiki site built with VitePress
- A small API/Worker for feedback and related services
- Deployment setup for Cloudflare Pages and Cloudflare Workers
- Docker support for local self-hosting

## Project layout

- `docs/`: the wiki content
- `api/`: the Worker/API side of the project
- `functions/`: extra runtime functions
- `scripts/`: build, cleanup, and generated-page scripts
- `Dockerfile` and `docker-compose.yaml`: containerized local hosting

## Local development

### Requirements

- Node.js 22 or newer
- pnpm
- Git

### Install and run

```bash
pnpm install
pnpm docs:dev
```

If you also want the API locally:

```bash
pnpm api:dev
```

The docs site usually runs on port `5173` and the API on `3000`.

## Docker

To run the docs site in Docker:

```bash
docker compose up --build
```

Then open:

- `http://localhost:4173`

### Docker note

The Docker setup in this repo builds and serves the docs site through Nginx. If you need the API, deploy it separately as a Worker or run it locally with `pnpm api:dev`.

## Production build

Build the site:

```bash
pnpm docs:build
```

Build the API:

```bash
pnpm api:build
```

## Deployment

### Cloudflare Pages

Use this for the static docs site.

- Build command: `pnpm docs:build`
- Pages env vars: do not set `PNPM_CONFIG_AUTO_INSTALL_PEERS=false`; leave pnpm's default `autoInstallPeers=true` in place.
- Output directory: `docs/.vitepress/dist`
- Root path: `/`

### Cloudflare Worker

Deploy the API separately as a Worker.

```bash
pnpm exec wrangler secret put WEBHOOK_URL
pnpm api:build
pnpm api:deploy
```

## How to contribute

Recommended flow:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make and test your edits locally.
4. Open a pull request with a clear explanation.

### Before opening a PR

- Make sure the site builds and works locally
- Keep formatting and content consistent
- Avoid adding untested or out-of-scope links
- Discuss larger structural changes first

## Adding content

If you want to add resources or pages:

- Check whether the item already exists
- Follow the style used in the files under `docs/`
- Keep entries concise and consistent
- Include only well-checked, relevant content

## Feedback and issues

If you found:

- a broken link
- a site issue
- a bad classification
- a suggestion for new content
- a feedback item about a page

the usual options are:

- open a GitHub issue
- send feedback through the project’s feedback system
- use Discord if the change needs discussion

## Making your own version

If you want your own fork or branded version:

1. Fork the repo.
2. Change the project name, branding, and public links.
3. Replace or adapt references to FMHY so they match OSW.
4. Update your GitHub and Cloudflare deployment settings.
5. Remove any secrets or settings that are specific to this repo.

## Badge / "stared stocks" style block

If you meant the small badges at the top of the README, those are usually Shields.io badges. Example:

```md
[![Stars](https://img.shields.io/github/stars/YOUR-OWNER/YOUR-REPO?style=for-the-badge)](https://github.com/YOUR-OWNER/YOUR-REPO/stargazers)
[![Forks](https://img.shields.io/github/forks/YOUR-OWNER/YOUR-REPO?style=for-the-badge)](https://github.com/YOUR-OWNER/YOUR-REPO/network/members)
[![Issues](https://img.shields.io/github/issues/YOUR-OWNER/YOUR-REPO?style=for-the-badge)](https://github.com/YOUR-OWNER/YOUR-REPO/issues)
```

Replace `YOUR-OWNER/YOUR-REPO` with your actual GitHub repository path.

## Useful links

- Arabic README: [README.md](README.md)
- Contribution guide: [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md)
- Deployment notes: [DEPLOYMENT.md](DEPLOYMENT.md)

## Name note

OSW stands for Our Server Wiki. It is a fork/copy of FMHY adapted for our own use and content.