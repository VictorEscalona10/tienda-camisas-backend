import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser'

import config from './config/config.js'
import helloRouter from './routes/hello.routes.js'

const app = express()

// middlewares
app.use(cookieParser())
app.use(urlencoded({ extended: true }))

// routes
app.use(helloRouter)

app.listen(config.PORT, () => {
    console.log(`Server on port ${config.PORT}`)
})