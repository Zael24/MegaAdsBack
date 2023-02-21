import { AdRecord } from "../records/ad.record";

test('AdRecord returns dta from database for one entry', async() => {
    
    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('Tester');
});

test('AdRecord returns null from database for unexisting entry.', async () => {

    const ad = await AdRecord.getOne('eeeee');

    expect(ad).toBeNull();
});