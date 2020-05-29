export type TChampionsJSON = IChampionsJSON | undefined

export interface IChampionsJSON {
  type: string;
  format: string;
  version: string;
  data: IChampionsJSONData;
}

export interface IChampionsJSONData {
  [championName: string]: IChampionData
}

export interface IChampionData {
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

export interface IInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface IImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface IStats {
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

export interface IStaticFolderDB {
  folder: string,
  route: string
}
