import mongoose from 'mongoose'

export default async (): Promise<void> => {
    console.log(typeof process.env.MONGODB_URL)
    try {
        await mongoose.connect(process.env.MONGODB_URL ?? '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
        console.log('DB connected')
    } catch (e) {
        throw e
    }
}