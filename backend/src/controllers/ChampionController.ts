import { Request, Response } from 'express'

import database from '../database'

class ChampionController {
  public index (req: Request, res: Response): Response {
    const championsList = database.getAll()
      .map(champion => ({
        id: champion.id,
        name: champion.name,
        tags: champion.tags
      }))
    return res.json(championsList)
  }

  public get (req: Request, res: Response): Response {
    const id = req.params.id
    const champion = database.getByID(id)
    return res.json(champion)
  }
}

export default new ChampionController()
