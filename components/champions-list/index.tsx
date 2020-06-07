import Link from 'next/link'

import styles from './index.module.scss'
import { IChampionData } from '../../interfaces/champions'

type Props = {
  list: IChampionData[]
}

export default function ChampionsList({ list }: Props) {
  return (
    <div className={styles['l-container']}>
      {list.map(champion => (
        <Link as={`/champion/${champion.id}`} href="/champion/[championID]" key={champion.id}>
          <div className={styles['b-game-card']}>
            <div className={styles['b-game-card__cover']} style={{backgroundImage: `url(/champions-loading/${champion.id}_0.jpg)`}}>
              <span className={styles['b-game-card__label']}>{champion.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}