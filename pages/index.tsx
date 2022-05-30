import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from './home/index'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>enricodpj</title>
        <meta name="description" content="enricos website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomePage />
      </main>

     
    </div>
  )
}

export default Home
