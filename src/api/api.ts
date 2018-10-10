import { InversifyExpressServer } from 'inversify-express-utils'
import { container } from './ioc/inversify.config'
import * as bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import errorHandler from 'errorhandler'
import socketIo from 'socket.io'
import { initSocketServer } from './util/socket'
import RateLimiter from 'express-rate-limit'

export class Api {
  constructor () {
    this.init()
  }

  public static start () {
    return new Api()
  }

  private init () {
    this.startServer()
  }

  private startServer () {
    const server = new InversifyExpressServer(container)

    const limiter = new RateLimiter({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 150,
      delayMs: 0
    })

    server.setConfig(app => {
      app.use(limiter)
      app.use(bodyParser.urlencoded({ extended: true }))
      app.use(bodyParser.json())
      app.use(helmet())
      app.use(cors())
      app.use(compression())

      app.use(errorHandler())
    })

    const app = server.build()
    const port = process.env.PORT || 4000
    const instance = app.listen(port)

    const io = socketIo.listen(instance)
    initSocketServer(io)

    console.info(`Api listening on port ${port}`)
  }
}
