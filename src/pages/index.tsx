import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.scss';

type DestinationEntry = {
  heading: string;
  body: string;
  href: string;
  cta: string;
  icon: 'document' | 'api' | 'code';
};

const destinations: DestinationEntry[] = [
  {
    heading: 'Documentation',
    body: 'Product documentation for using Ameide inside a customer organization. Strategy, Architecture, Delivery, Change, Support.',
    href: '/docs/documentation/overview',
    cta: 'Learn the platform',
    icon: 'document',
  },
  {
    heading: 'Training & Certifications',
    body: 'Learning paths, courses, certifications, and playbooks for everyone working on Ameide.',
    href: '/docs/training/overview',
    cta: 'Build your skills',
    icon: 'code',
  },
  {
    heading: 'Partners',
    body: 'The functional footprint of the Partners module. Consulting Partners and Technology Partners.',
    href: '/docs/partners/overview',
    cta: 'Run your practice',
    icon: 'api',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Learn Ameide"
      description="Learn the platform, build your skills, run your practice.">
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroActions}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Start here
            </Link>
            <Link
              className="button button--outline button--primary button--lg"
              to="/docs/getting-started/what-is-ameide">
              Getting started
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="home-primary-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="home-primary-heading" className={styles.sectionHeading}>
              Three destinations
            </h2>
            <p className={styles.sectionBody}>
              Pick the one that matches what you're trying to do today.
            </p>
          </div>
          <ul className={styles.grid}>
            {destinations.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={styles.card}>
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
        aria-labelledby="home-elsewhere-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="home-elsewhere-heading" className={styles.sectionHeading}>
              Looking for something else?
            </h2>
            <p className={styles.sectionBody}>
              Learn covers product documentation, skills, and the Partners
              module. Other Ameide surfaces live elsewhere.
            </p>
          </div>
          <ul className={styles.familyGrid}>
            <li className={styles.familyCard}>
              <p className={styles.familyName}>API & SDK</p>
              <p className={styles.familyDescription}>
                <a href="https://developers.ameide.io">developers.ameide.io</a>
              </p>
            </li>
            <li className={styles.familyCard}>
              <p className={styles.familyName}>Platform ops</p>
              <p className={styles.familyDescription}>
                <a href="https://docs.ameide.io">docs.ameide.io</a>
              </p>
            </li>
            <li className={styles.familyCard}>
              <p className={styles.familyName}>Sign in</p>
              <p className={styles.familyDescription}>
                <a href="https://portal.ameide.io">portal.ameide.io</a>
              </p>
            </li>
            <li className={styles.familyCard}>
              <p className={styles.familyName}>Marketing site</p>
              <p className={styles.familyDescription}>
                <a href="https://ameide.io">ameide.io</a>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
