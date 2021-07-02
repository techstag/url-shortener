import express, { Request, Response} from 'express'
import Redirect from '../models/redirect'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
    const redirectLink = req.body.redirectLink

    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/gmi

    if (!regex.test(redirectLink)) {
        return res.status(400).send()
    }

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    let redirectName: string = ""

    for (let i: number = 0; i < 7; i++) {
        const num = Math.floor(Math.random() * characters.length)
        redirectName += characters[num]
    }

    const redirect = new Redirect({
        redirectName,
        redirectLink
    })

    try {
        await redirect.save()
        res.status(201).send({
            redirectName
        })
    } catch (e) {
        res.status(400).send()
    }
})

export { router as newRedirectRouter }
