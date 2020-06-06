import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'

import ChampionsList from '../components/champions-list'
import { IChampionData } from '../interfaces/champions'

const APP_NAME = 'Champions LoL Dashboard'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/champions')
  const champions: IChampionData[] = await res.json()
  
  return {
    props: {
      champions
    }
  }
}

export const Home = ({ champions }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => (
  <>
    <Head>
      <title>{APP_NAME}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ChampionsList list={champions} />
  </>
)

export default Home
