import { Code } from '@repo/ui/src/code'
import { Alert, AlertDescription, AlertTitle } from '@repo/ui/src/components/ui/alert'
import styles from './page.module.css'

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      {/* <h1 className="text-3xl font-extrabold underline">Hello world!</h1> */}
      <div>
        <div>
          examples/basic&nbsp;
          <Code>web!!!</Code>
        </div>
      </div>

      <p className="text-lg font-bold pb-10 pt-8 border-4">This is a web app</p>

      {/* <Button appName="web" className={styles.button}>
        <span className="font-extrabold underline">Click me!</span>
      </Button> */}

      <Alert>
        <AlertTitle>テスト by web</AlertTitle>
        <AlertDescription>
          <p>ほげほげ</p>
        </AlertDescription>
      </Alert>
    </main>
  )
}
