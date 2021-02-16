import Head from 'next/head'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config'

function Home({apiUrl}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App with environment variables</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js running with api url: `{apiUrl}`!
        </h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div >
  )
}

Home.getInitialProps = async (ctx) => {
  const { publicRuntimeConfig } = getConfig()
  return { apiUrl: publicRuntimeConfig.apiUrl }
}

export default Home