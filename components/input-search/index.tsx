import styles from './index.module.scss'

type Props = {
  setTerm: (term: string) => void
}

export default function InputSearch({ setTerm }: Props) {
  return (
    <div className={styles['search__container']}>
      <input className={styles['search__input']} type="text" placeholder="Search" onChange={e => setTerm(e.target.value)} />
    </div>
  )
}