import express from 'express'
import cors from 'cors'

import routes from './routes'
import database from './database'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
    this.database()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    database.start()
    this.express.use(database.iconsStaticFolder.route, express.static(database.iconsStaticFolder.folder))
  }

  private routes ():void {
    this.express.use(routes)
  }
}

export default new App().express
