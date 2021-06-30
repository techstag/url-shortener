import express, { Request, Response} from 'express'
import { CallbackError } from 'mongoose'
import Link, { ILink } from '../models/link'

const router = express.Router()

router.get('/:redirectName', (req: Request, res: Response) => {
  const redirectName = req.params.redirectName

  Link.findOne({ redirectName }, (err: CallbackError, doc: ILink | null) => {
    if (err) res.redirect('/')

    if (doc !== null) {
      console.log(doc)

      res.redirect(doc.originalLink)
    } else {
      res.redirect('/')
    }
  })
})

export { router as redirectRouter }
