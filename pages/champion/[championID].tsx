import Head from 'next/head'

import styles from '../../styles/pages/champion/index.module.scss'
import database from '../../backend/database'
import { IChampionData } from '../../interfaces/champions'
import ChampionStats from '../../components/champion-stats'
import BackButton from '../../components/back-button'

type Props = {
  champion: IChampionData
}

const imageURL = (id: string) => `/champions-icon/${id}.png`

const Champion = ({ champion }: Props) => {
  return (
    <>
      <Head>
        <title>{champion.name}</title>
        <meta property="og:image" content={imageURL(champion.id)} />
        <meta property="og:description" content={champion.blurb} />
      </Head>
      <div className={styles['champion-container']}>
        <div className={styles['champion-header']}>
          <img src={imageURL(champion.id)} className={styles['champion-icon']} />
          <div className={styles['champion-title']}>
            <h1>
              {champion.name}
            </h1>
            <h3>
              {champion.title}
            </h3>
          </div>
        </div>
        <p>
          {champion.blurb}
        </p>
        <div className={styles['champion-stats']}>
          <ChampionStats data={champion.info} />
        </div>
        <BackButton/>
      </div>
    </>
  )
}

export default Champion

type Params = {
  params: {
    championID: string
  }
}

export async function getStaticProps({ params }: Params) {
  return {
    props: {
      champion: database.getByID(params.championID)
    }
  }
}

export async function getStaticPaths() {
  const champions: IChampionData[] = database.getAll()

  return {
    paths: champions.map((champion) => ({
      params: {
        championID: champion.id
      }
    })),
    fallback: false,
  }
}