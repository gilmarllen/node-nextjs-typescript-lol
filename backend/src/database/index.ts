import jsonfile from 'jsonfile'
import path from 'path'

import { TChampionsJSON, IStaticFolderDB, IChampionsJSON, IChampionData } from '../interfaces/champions'

const JSON_PATH = './src/database/champions-db.json'

class Database {
  private championsJSON: TChampionsJSON = undefined
  public iconsStaticFolder: IStaticFolderDB = {
    folder: path.join(__dirname, './champions-icon'),
    route: '/images/icons'
  }

  public start () {
    jsonfile.readFile(JSON_PATH)
      .then((jsonOBJ: IChampionsJSON) => { this.championsJSON = jsonOBJ })
      .catch(error => console.error(error))
  }

  public getAll (): IChampionData[] {
    return Object.values(this.championsJSON?.data || {})
  }

  public getByID (id: string) {
    return this.getAll().filter(champion => champion.id === id)[0]
  }
}

export default new Database()
