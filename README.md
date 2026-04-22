# io-ameide-learn

End-user docs for Ameide — walkthroughs, playbooks, and product guides.

This site is a sibling of [io-ameide-developers](https://github.com/ameideio/io-ameide-developers):
same Docusaurus + Carbon-aligned chrome, different audience. The developer
portal covers API reference, protobuf schemas, and integration; this site
covers using Ameide day to day.

## Local development

```bash
npm ci
npm run start
```

## Build

```bash
npm run build
```

## Runtime contract

- The production site is built for `https://learn.ameide.io/`.
- The container image is published to GHCR and is the artifact consumed by
  GitOps.
- GitHub Pages remains available as a secondary publish target and must build
  with the project-path base URL.
