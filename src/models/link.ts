import mongoose, { Document } from "mongoose"

interface ILink extends Document {
    redirectName: string,
    originalLink: string
}

const linkSchema = new mongoose.Schema({
    redirectName: {
        type: String,
        unique: true,
        required: true
    },
    originalLink: {
        type: String,
        required: true
    }
})

const Link = mongoose.model<ILink>('Link', linkSchema)

export { Link as default, ILink }