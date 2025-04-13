import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import swaggerUi from 'swagger-ui-express'
import { specs } from './docs/swagger.js'

import config from './config/config.js'
import helloRouter from './routes/hello.routes.js'

const app = express()

// middlewares
app.use(cookieParser())
app.use(urlencoded({ extended: true }))

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// routes
app.use(helloRouter)

app.listen(config.PORT, () => {
    console.log(`Server on port ${config.PORT}`)
})