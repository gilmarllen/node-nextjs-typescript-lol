import jsonfile from 'jsonfile'
import path from 'path'

const JSON_PATH = './src/database/champions-db.json'

type TChampionsJSON = IChampionsJSON | undefined

interface IChampionsJSON {
  type: string;
  format: string;
  version: string;
  data: IChampionsJSONData;
}

interface IChampionsJSONData {
  [championName: string]: IChampionData
}

interface IChampionData {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: IInfo;
  image: IImage;
  tags?: (string)[] | null;
  partype: string;
  stats: IStats;
}

interface IInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

interface IImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface IStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

interface IStaticFolderDB {
  folder: string,
  route: string
}

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
