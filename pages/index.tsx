import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import Fuse from 'fuse.js'

import database from '../backend/database'
import ChampionsList from '../components/champions-list'
import InputSearch from '../components/input-search'
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

export const Home = ({ champions }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTerm = (term: string) => setSearchTerm(term)

  const fuse = new Fuse(champions, {
    keys: ['name']
  })
  const filteredChampions = fuse.search(searchTerm).map(fuseResult => fuseResult.item)

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InputSearch setTerm={handleSearchTerm} />
      {searchTerm !== '' && filteredChampions.length > 0 && <ChampionsList list={filteredChampions} />}
      {searchTerm === '' && <ChampionsList list={champions} />}
      {searchTerm !== '' && filteredChampions.length === 0 && <NoResults/>}
    </>
  )
}

const NoResults = () => (
  <div>
    No results
    <style jsx>{`
      margin: auto;
      width: 50vw;
      text-align: center;
      font-family: fantasy;
      color: #ff2929;
    `}</style>
  </div>  
)

export default Home
