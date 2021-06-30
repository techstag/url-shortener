import mongoose from 'mongoose'

export default async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb://localhost:27017/url-shortener', {
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