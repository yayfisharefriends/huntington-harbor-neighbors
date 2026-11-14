# Huntington Beach Wildlife Catalog — Starter Project

This starter sets up the species content model and Pages CMS editing configuration.
It is intentionally a foundation, not a finished published wildlife website.

## What is included

- `.pages.yml`: Pages CMS admin/editor configuration.
- `src/content/species/`: one Markdown file per species.
- `src/content.config.ts`: Astro validation schema for species records.
- `public/media/species/`: location for uploaded species photos.
- `src/pages/index.astro`: simple public landing page shell.
- One Pacific Harbor Seal example profile, saved as **Draft** with local occurrence marked **Needs verification**.

## Important: no coding required for routine editing

Once the repository is connected to Pages CMS:
1. Open https://app.pagescms.org and sign in with GitHub.
2. Install/authorize the Pages CMS GitHub App for the repository.
3. Open this repository and select the `main` branch.
4. The Species profiles collection will appear.
5. Use the form to create or edit a profile and upload images.
6. Keep the profile at Draft or Needs review until the science, local occurrence, photo rights, and citations have been checked.
7. Set status to Published only when ready.

Pages CMS saves edits to the GitHub repository. A Cloudflare Pages deployment connection will be configured separately so updates rebuild the public site.

## Initial hosting settings

For a static Astro site on Cloudflare Pages:
- Framework preset: Astro (or None if the preset is unavailable)
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

The repository must first be created on GitHub and this project uploaded. Then connect that repository in Cloudflare Pages.

## Image and copyright rules

Only upload images you own, have permission to use, or that have a license permitting the intended public use. Record photographer, required credit, license, and source URL in each gallery item. Do not assume an image is reusable just because it appears in a search result.

## Scientific quality rules

- Local occurrence is not confirmed merely because a species occurs somewhere in Southern California.
- Record the precise geographic evidence and date for local records.
- Keep IUCN, California state, and U.S. federal conservation designations separate.
- Add a source URL and review date for conservation status.
- Keep uncertain profiles unpublished.

## Technical note

Pages CMS is a Git-based content editor, not a conventional SQL database. It stores species profiles as structured Markdown files in GitHub. That is a good fit for a small-to-medium public field guide and makes the content portable. A database-backed system can be added later if advanced user submissions, accounts, or live sightings become necessary.