# Lexi — Senior Product Designer portfolio

A static, single-page portfolio for a Toronto-based Senior Product Designer specializing in FinTech, digital banking, enterprise UX, design systems, and complex workflows.

## Technology

- Semantic HTML5, responsive CSS3, and vanilla JavaScript (ES6+)
- No frameworks, build tools, dependencies, analytics, or cookies
- Local image asset; no external fonts or scripts

## Preview locally

Open `index.html` in your browser, or run a simple local server from this folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Deploy to GitHub Pages

1. Add the files to the root of the `main` branch of `https://github.com/orchestrators/PORTFOLIO`.
2. In repository **Settings → Pages**, choose **Deploy from a branch**, **main**, **/(root)**.
3. Visit `https://orchestrators.github.io/PORTFOLIO/` after the deployment completes.

All stylesheet, script, and image references are relative, so the site works under the `/PORTFOLIO/` project path.

## Content notes and editorial guardrails

- The profile narrative, employer names, roles, education, and dates are derived from user-provided LinkedIn text dated November 2026.
- The illustrated work tiles are **conceptual diagrams**, not actual client screenshots or claims of specific measured outcomes.
- The site intentionally does not invent project metrics, case studies, professional email addresses, client imagery, or employment availability.
- The header uses the first name **Lexi** rather than assuming a full legal or professional name. Confirm the preferred public display name before final publication.
- Before adding private work examples, obtain any employer/client permission needed and remove confidential customer or business data.
- For stronger hiring-manager evidence, later add 2–3 approved case studies with: problem, role, constraints, process, key decisions, validation, and outcomes (only verified metrics).

## Quality notes

The project includes visible keyboard focus, a skip link, native anchor navigation, mobile menu ARIA state, motion preferences, semantic landmarks, and responsive CSS. These measures support accessibility but **do not by themselves establish WCAG 2.2 AA conformance**; full manual and automated audits are still necessary.

## Customize

- Copy and section headings: `index.html`
- Colors and type sizes: CSS custom properties in `styles.css`
- Photograph: `assets/lexi-portrait.jpeg` (update the `img`, preload and Open Graph URL if renamed)
- Navigation behavior and dynamic copyright year: `script.js`
