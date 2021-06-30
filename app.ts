import express from 'express'
import path from 'path'
import morgan  from 'morgan'
import mongo from './src/database/db'

import { indexRouter } from './src/routes/index'
import { redirectRouter } from './src/routes/redirect'
import { newRedirectRouter } from './src/routes/newredirect'

const app = express()

const db = mongo()

const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'src/public')))

app.use('/', indexRouter)
app.use('/r', redirectRouter)
app.use('/new', newRedirectRouter)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})