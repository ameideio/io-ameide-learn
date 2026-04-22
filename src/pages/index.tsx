import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.scss';

type PrimaryEntry = {
  heading: string;
  body: string;
  href: string;
  cta: string;
  icon: 'document' | 'api' | 'code';
  external?: boolean;
};

const primaryEntries: PrimaryEntry[] = [
  {
    heading: 'Getting started',
    body: 'What Ameide is, how to invite your team, and the workspace concepts every user should know.',
    href: '/docs/getting-started/what-is-ameide',
    cta: 'Start here',
    icon: 'document',
  },
  {
    heading: 'Products',
    body: 'Walk through Identity, Support, Sales, Marketing, and Threads — one product at a time.',
    href: '/docs/products/identity',
    cta: 'Browse products',
    icon: 'api',
  },
  {
    heading: 'Tutorials',
    body: 'End-to-end walkthroughs: close a deal, resolve a ticket, launch a campaign, ship a tenant.',
    href: '/docs/tutorials',
    cta: 'See tutorials',
    icon: 'code',
  },
];

const productFamilies = [
  {name: 'identity', description: 'Tenants, users, and SSO.'},
  {name: 'support', description: 'Tickets and case history.'},
  {name: 'sales', description: 'Pipelines, deals, quoting.'},
  {name: 'marketing', description: 'Campaigns and attribution.'},
  {name: 'threads', description: 'Conversations and activity.'},
  {name: 'admin', description: 'Billing, roles, audit log.'},
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Learn Ameide"
      description="Walkthroughs, playbooks, and product guides for every Ameide user.">
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroActions}>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started/what-is-ameide">
              Start learning
            </Link>
            <Link
              className="button button--outline button--primary button--lg"
              to="/docs/tutorials">
              See tutorials
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="home-primary-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="home-primary-heading" className={styles.sectionHeading}>
              Three ways in
            </h2>
            <p className={styles.sectionBody}>
              Pick the path that matches where you are today — a new tenant
              admin, a user exploring a specific product, or someone looking
              for a step-by-step playbook.
            </p>
          </div>
          <ul className={styles.grid}>
            {primaryEntries.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={styles.card}
                  {...(item.external ? {target: '_blank', rel: 'noreferrer'} : {})}>
                  <span
                    className={clsx(styles.cardIcon, styles[`icon_${item.icon}`])}
                    aria-hidden="true"
                  />
                  <h3 className={styles.cardHeading}>{item.heading}</h3>
                  <p className={styles.cardBody}>{item.body}</p>
                  <span className={styles.cardLink}>{item.cta}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={clsx(styles.section, styles.sectionAlt)}
        aria-labelledby="home-products-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="home-products-heading" className={styles.sectionHeading}>
              Products
            </h2>
            <p className={styles.sectionBody}>
              Ameide groups end-user features into products. Each one has its
              own walkthroughs, admin notes, and step-by-step guides.
            </p>
          </div>
          <ul className={styles.familyGrid}>
            {productFamilies.map((family) => (
              <li key={family.name} className={styles.familyCard}>
                <p className={styles.familyName}>{family.name}</p>
                <p className={styles.familyDescription}>{family.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
