import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Designed for the Mainstream',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        JaKtA integrates with mainstream programming paradigms for a smoother developer experience for non-agent experts.
      </>
    ),
  },
  {
    title: 'BDI Agents',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        JaKtA follows the Belief-Desire-Intention (BDI) model, a popular agent programming paradigm for intelligent agents.
      </>
    ),
  },
  {
    title: 'Powered by Kotlin',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        JaKtA is entirely built on Kotlin, a modern and expressive programming language,
        using a DSL to define agent behaviours.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
