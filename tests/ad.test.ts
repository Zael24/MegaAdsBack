import { AdRecord } from "../records/ad.record";
import { AdEntity } from "../types";
import { pool } from "../utils/db";

const defaultObj = {
    name: 'Test Name',
    description: 'blah',
    url: 'https://megak.pl',
    price: 0,
    lat: 9,
    lon: 9,
};

afterAll(async () => {
    await pool.end();
});

test('AdRecord.insert returns new UUID', async () => {
    const ad = new AdRecord(defaultObj);

    await ad.insert();

    expect(ad.id).toBeDefined();
    expect(typeof ad.id).toBe('string');
});

test('AdRecord.insert inserts data to database.', async () => {
    const ad = new AdRecord(defaultObj);

    await ad.insert();
    
    const foundAd = await AdRecord.getOne(ad.id);
    
    expect(foundAd).toBeDefined();
    expect(foundAd).not.toBeNull();
    expect(foundAd.id).toBe(ad.id);
});