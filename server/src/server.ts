import path from 'path'
import express from 'express'
import { useExpressServer } from 'routing-controllers'
import { Config } from './config'

const bootstrap = () => {
  const app = express()
  app.use(express.json())

  useExpressServer(app, {
    cors: true,
    controllers: [path.join(__dirname, './controllers/**/*.ts')],
  })

  app.listen(Config.apiPort, () =>
    console.log(`Listening on port ${Config.apiPort}`),
  )
}

bootstrap()