import { AdRecord } from "../records/ad.record";
import { pool } from "../utils/db";

afterAll(async () => {
    await pool.end();
});

test('AdRecord.getOne returns null from database for unexisting entry.', async () => {

    const ad = await AdRecord.getOne('eeeee');

    expect(ad).toBeNull();
});

test('AdRecord.findAll returns null from database for unexisting entry.', async () => {

    const ads = await AdRecord.findAll('');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
});

test('AdRecord.findAll returns array of found entries when searching for "a".', async () => {

    const ads = await AdRecord.findAll('a');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
});

test('AdRecord.findAll returns empty array when searching for something that does not exist.', async () => {

    const ads = await AdRecord.findAll('eeeeeeeeeeeeeeeeeeeeee');

    expect(ads).toEqual([]);
});

test('AdRecord.findAll returns smaller amount of data', async () => {

    const ads = await AdRecord.findAll('');

    expect(ads[0].price).toBeUndefined();
    expect(ads[0].description).toBeUndefined();
});