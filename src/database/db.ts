import mongoose from 'mongoose'

export default async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URL ?? '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
    } catch (e) {
        throw e
    }
}