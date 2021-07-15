import request from 'supertest'
import mongoose from 'mongoose'

import app from '../app'
import Redirect from '../src/models/redirect'

const redirect = {
    redirectName: "test",
    redirectLink: "https://example.com"
}

beforeEach(async () => {
    await Redirect.deleteMany()
    await new Redirect(redirect).save()
})

test('Should create new redirect to example.com', async () => {
    await request(app).post('/new').send({
        redirectLink: "https://example.com"
    }).expect(201)
})

test('Should throw error due to invalid redirect link', async () => {
    await request(app).post('/new').send({
        redirectLink: "example.com"
    }).expect(400)
})

afterAll(done => {
    mongoose.connection.close()
    done()
})