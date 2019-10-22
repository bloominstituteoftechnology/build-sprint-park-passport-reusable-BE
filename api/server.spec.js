const request = require('supertest');
const server = require('./server');

describe('GET /', () => {
    it('Should return 200', () => {
        return request(server).get('/').then(res => {
            expect(res.status).toBe(200);
        });
    });

    it('Should return JSON', async () => {
        const response = await request(server).get('/');
        expect(response.type).toMatch(/json/i);
    });

    it('Should return Frankenstein quote', () => {
        return request(server).get('/').then(res => {
            expect(res.body).toEqual({ message: "It's aliveeeee!" });
        });
    });
})