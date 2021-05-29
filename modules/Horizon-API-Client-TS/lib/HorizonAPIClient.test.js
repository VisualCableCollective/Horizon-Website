"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HorizonAPIClient_1 = require("./HorizonAPIClient");
require('dotenv').config();
// Init
const apiClientConfig = new HorizonAPIClient_1.HorizonAPIClientConfig(HorizonAPIClient_1.Environment.LocalDevelopment);
HorizonAPIClient_1.HorizonAPIClient.Config = apiClientConfig;
// -------- AUTH TESTS --------
test('user should not authenticate', async (done) => {
    const result = await HorizonAPIClient_1.HorizonAPIClient.authenticateUserWithToken('definitely_not_working_token');
    expect(result).toBe(false);
    done();
});
if (process.env.TEST_BEARER_TOKEN) {
    test('user should authenticate', async (done) => {
        const result = await HorizonAPIClient_1.HorizonAPIClient.authenticateUserWithToken(process.env.TEST_BEARER_TOKEN || '');
        expect(result).toBe(true);
        done();
    });
}
// -------- TEAM TESTS --------
let team;
test('VCC team should be found', async (done) => {
    const responseteam = await HorizonAPIClient_1.HorizonAPIClient.getTeam(1);
    expect(responseteam).toBeDefined();
    expect(responseteam?.id).toBe(1);
    if (responseteam !== null) {
        team = responseteam;
    }
    done();
});
test('VCC team should have products', async (done) => {
    const result = await team?.getProducts();
    expect(result).toBeDefined();
    expect(result?.length).toBeGreaterThan(0);
    if (result) {
        console.log(result[0].name);
        expect(result[0].id).toBeDefined();
    }
    done();
});
