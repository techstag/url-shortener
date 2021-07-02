import mongoose, { Document } from "mongoose"

interface IRedirect extends Document {
    redirectName: string,
    redirectLink: string
}

const redirectSchema = new mongoose.Schema({
    redirectName: {
        type: String,
        unique: true,
        required: true
    },
    redirectLink: {
        type: String,
        required: true
    }
})

const Redirect = mongoose.model<IRedirect>('Redirect', redirectSchema)

export { Redirect as default, IRedirect }