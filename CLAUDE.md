# SkillsHiveX website – house rules for Claude

## What this is
The public website for SkillsHiveX (SHX), a UK community that helps people find the right collaborators, shape the right work and move towards their next measurable success together.
Live: https://skillshivex.co.uk · Staging (password-protected): https://staging.skillshivex.co.uk

## How the repo is laid out
- `site/` – everything that goes on the web. Only this folder is uploaded to the hosting.
- `site/index.php` – the home page. Each other page is a folder with its own `index.php`: `project/`, `join/`, `how-it-works/`, `case-studies/`, `our-story/` (addresses like `/project/`).
- `site/includes/header.php` and `site/includes/footer.php` – the shared header and footer, pulled into every page with PHP. Each page sets `$page` and `$title` first.
- `site/css/site.css`, `site/js/site.js`, `site/img/` – shared styles, script and images. Use root-relative paths (`/img/…`).
- `.github/workflows/deploy-staging.yml` – the automatic upload of `site/` to ICUK staging. There is no live-site deploy yet. Staging uses plain FTP (ICUK doesn't support FTPS); the upload method is waiting on an ICUK ticket. Don't change workflows without Mike's OK.
- `CLAUDE.md`, `README.md`, `.gitignore`, `.gitattributes` – repo files, never uploaded.

## Branches and publishing (most important)
- Always work on the `staging` branch. Never commit to or push `main`.
- Pushing to `staging` updates staging.skillshivex.co.uk automatically.
- After pushing, tell Mike what changed and give him the staging link to check.
- To publish, open a pull request from `staging` to `main`, then STOP. A person reviews and merges it. Never merge it yourself.
- Keep changes small and focused, one fix or feature per commit, with a clear commit message.

## Never
- Never write passwords, FTP details, API keys or other secrets into any file. These live only in GitHub Secrets.
- Never create or change `.htaccess` or `.htpasswd` files. Staging password protection is managed by hand on the server.
- Never delete or restructure `site/` without asking first.
- Never link to claude.ai, localhost, file:// or C:\ paths.

## Writing for the site: SHX brand voice
SHX sounds like a practical, generous collaborator: human, useful, curious and quietly confident.
- Human before corporate: clear, direct language, like a thoughtful project lead, not a platform brochure.
- Confident, not inflated: be specific (goal, risk, next action, who's involved). Don't overclaim.
- Generous, not transactional: value comes from introductions, advice, shared learning and project work.
- Structured but flexible: Agile discipline in service of collaboration, not bureaucracy.
- Phrases to use: "next measurable success", "how can we help you get there?", "pop-up teams", "share in success", "what might get in the way?", "right people, right work, right time", "trusted collaborators", "community members".
- Never use: "cheap freelancers", "talent pool", "bid for work", "resource allocation", "plug-and-play labour", "disrupting work", "hustle", "scale at all costs".
- UK English spelling.

## Known issues to fix before go-live
1. The forms don't send anything. Agreed for V1: submissions go through Google Workspace into a Google Sheet, with email alerts.
2. The booking calendar is a mock. Agreed for V1: replace it with a Google Calendar appointment schedule.
3. The review notes are visible to visitors. Remove them from the public page.
4. The case studies are fictitious placeholders. Agreed for V1: replace them with the standardised case studies.

## Working style
- If a request is unclear, ask one short question before changing things.
- Before a bigger change, say what you plan to do and wait for OK.
- When reporting back, keep it short: what changed, the staging link, anything Mike needs to decide.
