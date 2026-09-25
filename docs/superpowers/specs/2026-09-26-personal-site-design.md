# Personal website — Vlad Baesu, Freelance DevOps Engineer

**Date:** 2026-09-26 · **Status:** design approved in chat

## Goal

A one-page personal site that (a) wins freelance DevOps clients and (b) doubles as an online CV.
Success = a visitor understands in ~10 seconds what Vlad does, sees credible experience, and has an
obvious way to get in touch.

## Constraints

- Plain static site: `index.html`, `style.css`, `main.js`, `assets/`. No build step, no framework, no backend.
- English only. No blog, no contact form (mailto link instead).
- Deployable to GitHub Pages via a GitHub Actions workflow (`.github/workflows/deploy.yml`).
- Content sourced from LinkedIn (profile read 2026-09-26). LinkedIn has no role descriptions, so copy
  stays generic to titles/skills — no invented clients, numbers or achievements.

## Content (source of truth)

- **Name / title:** Vlad Baesu — Freelance DevOps Engineer. Cluj-Napoca, Romania · Remote.
- **Contact:** contact@vladbaesu.com · LinkedIn https://www.linkedin.com/in/vlad-baesu-4813822a/ · GitHub https://github.com/vladgb
- **Photo:** `assets/photo.jpg` (LinkedIn profile photo, 413×413).
- **Experience:**
  - DevOps Engineer — Freelance, Aug 2021–Present, remote. AWS, Terraform, Python, Azure DevOps, GCP, CI/CD, IaC.
  - Yonder (May 2012–Aug 2023):
    - Senior DevOps Engineer, Aug 2018–Aug 2023, Cluj. Kubernetes, CI, Terraform, Grafana, Jenkins, Microservices.
    - DevOps Engineer, Apr 2014–Jul 2018, Iași. Microservices.
    - Web Developer, Feb 2013–Mar 2014, Iași.
    - Junior Developer, May 2012–Feb 2013, Iași.
  - Security Engineer — Betfair Romania Development, Jul–Sep 2019, Cluj.
  - Web Developer — Centrul de Comunicații, Jun 2008–Jun 2011.
- **Certification:** Red Hat Certified System Administrator (RHCSA), 2016.
- **Education:** Alexandru Ioan Cuza University, Faculty of Computer Science (2011–2014);
  Colegiul Național de Informatică Piatra Neamț (2003–2011).

## Page sections (in order)

1. **Nav** — name/logo, anchor links (Services, Experience, Stack, Contact), "Hire me" button.
2. **Hero** — photo, typed terminal line `$ whoami`, headline, one-line pitch, CTAs "Get in touch" (mailto) and "View experience", location/availability badge.
3. **Stats strip** — 13+ yrs in software · 10+ yrs DevOps · 5 yrs freelance · AWS · GCP · Azure.
4. **Services** — six cards: Cloud infrastructure; Infrastructure as Code; CI/CD pipelines; Kubernetes & containers; Observability; Automation & Linux.
5. **Experience** — vertical timeline, Yonder roles grouped under one employer.
6. **Tech stack** — grouped badges: Cloud, IaC & config, CI/CD, Containers, Observability, Languages & OS.
7. **Certifications & education** — two small cards.
8. **Contact** — short CTA block with email button + LinkedIn/GitHub links.
9. **Footer** — © year, "Built as a static site, deployed with GitHub Actions".

## Visual design

- Dark theme default (near-black navy background, light text), single teal/green accent; monospace used for terminal accents and labels, clean sans-serif (Inter via Google Fonts) for body.
- Responsive: single column below ~720px; nav collapses to a menu button. No horizontal scroll at 360px.
- Light touches of motion (fade-in on scroll, typing effect in hero) that respect `prefers-reduced-motion`.
- SEO/meta: title, description, Open Graph tags with photo, favicon (inline SVG).

## JS (`main.js`) — small, optional

- Typing effect for hero terminal line.
- Mobile nav toggle.
- IntersectionObserver reveal animations.
- Footer year.
Site must be fully readable with JS disabled.

## Verification

- Open locally in the browser pane at desktop and mobile (375px) widths; screenshot both.
- Check: no console errors, all anchor links scroll to their sections, mailto/LinkedIn/GitHub links correct, photo loads, no horizontal overflow.
