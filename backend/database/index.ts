import path from 'path'

import { IStaticFolderDB, IChampionData } from '../../interfaces/champions'
import dbData from './champions-db.json'

class Database {
  public iconsStaticFolder: IStaticFolderDB = {
    folder: path.join(__dirname, './champions-icon'),
    route: '/images/icons'
  }

  public getAll (): IChampionData[] {
    return Object.values(dbData.data || {})
  }

  public getByID (id: string) {
    return this.getAll().filter(champion => champion.id === id)[0]
  }
}

export default new Database()
