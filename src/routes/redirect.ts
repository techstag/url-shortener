import express, { Request, Response} from 'express'
import { CallbackError } from 'mongoose'
import Redirect, { IRedirect } from '../models/redirect'

const router = express.Router()

router.get('/:redirectName', (req: Request, res: Response) => {
  const redirectName = req.params.redirectName

  Redirect.findOne({ redirectName }, (err: CallbackError, doc: IRedirect | null) => {
    if (err) res.redirect('/')

    if (doc !== null) {
      res.redirect(doc.redirectLink)
    } else {
      res.redirect('/')
    }
  })
})

export { router as redirectRouter }
