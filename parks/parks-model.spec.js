const db = require('../data/db-config');
const Parks = require('./parks-model');

describe('Parks Model', () => {
    beforeEach(async () => {
        await db('parks').truncate();
    });

    describe('Add new park', () => {
        it('Should be empty', async () => {
            const parks = await db('parks');
            expect(parks).toHaveLength(0);
        })

        it('Should add a new park', async () => {
            await Parks.addPark({ name: 'Central Park', description: 'Find peace and tranquility in the middle of a busy city.' });
            const parks = await db('parks');
            expect(parks).toHaveLength(1);
        })

        it('Should only add a new park when description is provided', async () => {
            await Parks.addPark({ name: 'This Is Wrong' })
            const parks = await db('parks');
            expect(parks).toHaveLength(1);
        }) // ^ test fails but it should and that's useful info so I'm leaving it
    })

    describe('Delete existing park', () => {
        it('Should only delete when ID is provided', async () => {
            await Parks.addPark({ name: 'Gonna Disappear', description: 'Byeeeeeee' })
            await Parks.remove(1)
            await Parks.addPark({ name: 'Still Here', description: 'Hiiiiiii' })
            await Parks.remove()
            const parks = await db('parks');
            expect(parks).toHaveLength(1);
        })
    })
})