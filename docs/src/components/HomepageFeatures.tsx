import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

type FeatureItem = {
  title: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: <>Use code blocks as usual and get better rendering</>,
  },
  {
    title: 'Dynamic code rendering capability',
    description: (
      <>Ability to dynamically modify code and render in real time</>
    ),
  },
  {
    title: 'Configurable style',
    description: (
      <>
        Support a variety of style configurations to meet different usage
        scenarios
      </>
    ),
  },
]

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
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
  )
}
