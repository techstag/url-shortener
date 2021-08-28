import express from 'express'
import path from 'path'
import morgan  from 'morgan'
import mongo from './src/database/db'

import { indexRouter } from './src/routes/index'
import { redirectRouter } from './src/routes/redirect'
import { newRedirectRouter } from './src/routes/newredirect'

const app = express()

const db = mongo()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/r', redirectRouter)
app.use('/new', newRedirectRouter)

export { app as default }