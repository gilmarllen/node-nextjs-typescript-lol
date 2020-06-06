import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'

import database from '../backend/database'
import ChampionsList from '../components/champions-list'
import { IChampionData } from '../interfaces/champions'

const APP_NAME = 'Champions LoL Dashboard'

export const getStaticProps = async () => {
  const champions: IChampionData[] = database.getAll()
  
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
