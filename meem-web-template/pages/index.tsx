import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MeemAPI, MeemData } from '@meemproject/api'
import React from 'react'

const Home: NextPage = () => {

	const [isLoading, setIsLoading] = React.useState(true)
  const [meemsData, setMeemsData] = React.useState<MeemData[]>([])

  return (
    <div className={styles.container}>
      <Head>
        <title>Meem Template</title>
        <meta name="description" content="A simple Meem template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello Meem
        </h1>

        <p>{`Using API: ${MeemAPI.v1.GetMeems.path({'meemTypes': MeemAPI.MeemType.Original}).toString()}`}</p>

      </main>

    </div>
  )
}

export default Home
