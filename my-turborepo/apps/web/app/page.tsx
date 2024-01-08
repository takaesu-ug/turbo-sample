import { Button } from '@repo/ui/button'
import { Code } from '@repo/ui/code'

import Image from 'next/image'
import styles from './page.module.css'

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean
  conic?: boolean
  className?: string
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  )
}

const LINKS = [
  {
    title: 'Docs',
    href: 'https://turbo.build/repo/docs',
    description: 'Find in-depth information about Turborepo features and API.',
  },
  {
    title: 'Learn',
    href: 'https://turbo.build/repo/docs/handbook',
    description: 'Learn more about monorepos with our handbook.',
  },
  {
    title: 'Templates',
    href: 'https://turbo.build/repo/docs/getting-started/from-example',
    description: 'Choose from over 15 examples and deploy with a single click.',
  },
  {
    title: 'Deploy',
    href: 'https://vercel.com/new',
    description: ' Instantly deploy your Turborepo to a shareable URL with Vercel.',
  },
]

export default function Page(): JSX.Element {
  return (
    // <main className={styles.main}>
    <main>
      <div>
        <div>
          examples/basic&nbsp;
          <Code>web!!!!!</Code>
        </div>
        <div>
          <a
            href="https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            By{' '}
            <Image
              alt="Vercel Logo"
              className={styles.vercelLogo}
              height={24}
              priority
              src="/vercel.svg"
              width={100}
            />
          </a>
        </div>
      </div>

      <Button appName="web" className={styles.button}>
        Click me!
      </Button>

      {/* <Alert>
        <AlertTitle>アラート title</AlertTitle>
        <AlertDescription>
          <Button appName="web" className={styles.button}>
            アラートボタン
          </Button>
        </AlertDescription>
      </Alert> */}
    </main>
  )
}
