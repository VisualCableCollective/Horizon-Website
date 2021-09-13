// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';

import { Environment } from './enums/Environment';
// import Team from './models/Team';
import { HorizonAPIClient } from './index';
import { HorizonAPIClientConfig } from './HorizonAPIClientConfig';

dotenv.config();

// Config
jest.setTimeout(10000);

// Init
const apiClientConfig = new HorizonAPIClientConfig(0, '', Environment.LocalDevelopment);
const apiClient = new HorizonAPIClient(apiClientConfig);

// -------- AUTH TESTS --------
test('user should not authenticate', async (done) => {
  const result = await apiClient.authenticateUserWithToken('definitely_not_working_token');
  expect(result).toBe(false);
  done();
});

if (process.env.TEST_BEARER_TOKEN) {
  test('user should authenticate', async (done) => {
    const result = await apiClient.authenticateUserWithToken(process.env.TEST_BEARER_TOKEN || '');
    expect(result).toBe(true);
    done();
  });
} else {
  console.warn('Skipped test for correct user authentication!');
}

// -------- TEAM TESTS --------
// let team: Team;
test('VCC team should be found', async (done) => {
  const responseteam = await apiClient.getTeam(1);
  expect(responseteam).toBeDefined();
  expect(responseteam?.id).toBe(1);
  if (responseteam !== null) {
    // team = responseteam;
  }
  done();
});

/* test('VCC team should have products', async (done) => {
  const result = await team?.getProducts();
  expect(result).toBeDefined();
  expect(result?.length).toBeGreaterThan(0);
  if (result) {
    console.log(result[0].name);
    expect(result[0].id).toBeDefined();
  }
  done();
}); */
