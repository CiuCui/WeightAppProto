import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weight App Prototype</title>
        <meta name="A prototype for a weight app." content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hi</h1>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
