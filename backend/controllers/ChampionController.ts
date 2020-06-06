import { NextApiRequest, NextApiResponse } from 'next'

import database from '../database'

class ChampionController {
  public index (req: NextApiRequest, res: NextApiResponse) {
    const championsList = database.getAll()
    res.json(championsList)
  }

  public get (req: NextApiRequest, res: NextApiResponse) {
    const id = 'a'
    const champion = database.getByID(id)
    return res.json(champion)
  }
}

export default new ChampionController()
