# UTDesign EPICS Kids-U Donor Volunteer Database

<!-- markdownlint-disable-next-line MD033 -->
<details open><summary><h2>Table of Contents</h2></summary>

- [Overview](#overview)
- [Functional Requirements](docs/functionalRequirements.md)
- [Setting Up Project](docs/setUPProjectV2.md)
- [Techstack](docs/techstack.md)
- [Third Party Integrations](#third-party-integration)
- [Migration Scripts](#migration-scripts)
- [Figma](#figma)
- [Github Commands](docs/github-git-cheat-sheet.pdf)

</details>

## Overview

This project is focused on developing a database alongside a web application that will help Kids-U manage donors, both individual and organizations, and volunteers along with related funding (via donations and grants) and events. There will be three types of users: Super Admin, administrators and volunteers.

## Demo (GitHub Pages)

This repository includes a frontend-only demo branch that can be deployed to GitHub Pages. The demo uses static sample data, no backend, and no real authentication.

Build the static demo:

```bash
npm run build:demo
```

This produces a `dist/` folder containing the static site.

GitHub Pages settings:

1. Branch: `demo`
2. Folder: `/dist`

If your repository is not served from the root domain (e.g. `https://username.github.io/repo-name/`), set the GitHub Pages base path in `next.config.js` before building.

**Super Admin**
- Ability to manage users (role management, edit information, view all user info)
- All Admin Abilities

**Admin**
- Ability to manage and utilize data
- Ability to view all modules
- Ability to edit any module

**Volunteers**
- Can view registration, check in check out, and join activities within Volunteer module
- Can fill out the registration form

## Third Party Integration

Currently, we do not have any third party integrations.

## Migration Scripts

Currently, we do not have any migration scripts.

## Figma

We have the figma files of all current dashboard & login flow designs.
We do not have the design of any specific database pages and refining for both the admin/volunteer side.
