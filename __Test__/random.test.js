const { test, expect } = require('@jest/globals');
const checkIfEqual = require('../lib/random.js');

const randomNumber = require('../lib/random.js');

test('gets random number between 1 and 10', () => {
  expect(randomNumber()).toBeGreaterThanOrEqual(1);
  expect(randomNumber()).toBeLessThanOrEqual(10);
});