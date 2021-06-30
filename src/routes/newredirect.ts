import express, { Request, Response} from 'express'
import { CallbackError } from 'mongoose'
import Link, { ILink } from '../models/link'

const router = express.Router()

router.post('/', (req: Request, res: Response) => {
    
})

export { router as newRedirectRouter }
