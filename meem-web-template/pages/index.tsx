import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MeemAPI, MeemData, meemDataFromApiMeem } from '@meemproject/api'
import { makeFetcher } from '@meemproject/react'
import React, { useEffect } from 'react'
import useSWR from 'swr'

const Home: NextPage = () => {

  const page = 0;
	const [isLoading, setIsLoading] = React.useState(true)
  const [meemsData, setMeemsData] = React.useState<MeemData[]>([])

  const fetcher = makeFetcher<
		MeemAPI.v1.GetMeems.IQueryParams,
		MeemAPI.v1.GetMeems.IRequestBody,
		MeemAPI.v1.GetMeems.IResponseBody
	>({ method: MeemAPI.v1.GetMeems.method })

	const { data: meemResponse } = useSWR<MeemAPI.v1.GetMeems.IResponseBody>(
		[MeemAPI.v1.GetMeems.path(), `allMeems-${page}`],
		url => {
			return fetcher(url, {
				page,
				meemTypes: [MeemAPI.MeemType.Original, MeemAPI.MeemType.Remix]
			})
		},
		{ shouldRetryOnError: false }
	)

  useEffect(() => {
		if (meemResponse?.meems) {
			
			const tempMeems: MeemData[] = meemsData
			meemResponse?.meems.forEach((rawMeem: any) => {
				const meemDataModel = meemDataFromApiMeem(rawMeem)

				// Don't add duplicates
				let isMeemInvalid = false
				tempMeems.forEach(meem => {
					if (
						meem.tokenId === meemDataModel.tokenId ||
						meemDataModel.imageUrl === null ||
						meemDataModel.imageUrl === undefined
					) {
						isMeemInvalid = true
					}
				})
				if (!isMeemInvalid) {
					tempMeems.push(meemDataModel)
				}
			})
			setMeemsData(tempMeems)
			console.log(`Got Meems! ${tempMeems.length} total`)

			setIsLoading(false)
		} else {
      console.log(`Got no Meems. :(`)
    }
	}, [meemResponse, meemsData, page])


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

        {isLoading && (<><p>Loading, please wait...</p></>)} 
        {!isLoading && <>
        {meemsData.map(meem => (
									// eslint-disable-next-line @next/next/no-img-element
									<img key={meem.tokenId} src={meem.imageUrl} alt={'meem'}></img>
							))}</>}

        <p>{`Using API: ${MeemAPI.v1.GetMeems.path({'meemTypes': MeemAPI.MeemType.Original}).toString()}`}</p>

      </main>

    </div>
  )
}

export default Home
