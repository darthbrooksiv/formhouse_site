import { useState, useEffect } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header.js'
import NavContent from '../components/NavContent.js'
import ImageGrid from '../components/ImageGrid.js'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.onbeforeunload = () => window.scrollTo(0,0)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Formhouse</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <Header isLoading={isLoading} />
        <ImageGrid isLoading={isLoading} />
        <NavContent isLoading={isLoading} setIsLoading={setIsLoading} />
      </main>
    </div>
  )
}
