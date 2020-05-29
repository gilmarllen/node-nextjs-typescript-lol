import { Router } from 'express'
import ChampionController from './controllers/ChampionController'

const routes = Router()

routes.get('/champions', ChampionController.index)
routes.get('/champions/:id', ChampionController.get)

// TODO static routes
//   /images/icons

export default routes
