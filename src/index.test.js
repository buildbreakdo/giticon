import giticon from './index.js';

test('Handler does not explode on import', () => {
  expect(true).toBe(true);
});

test(`empty string => ''`, () => {
  expect(giticon('')).toBe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect fill="#afb3b9" x="10" y="10" width="20" height="20" /></svg>');
});

test(`'John Williams'`, () => {
  expect(giticon('John Williams').length).toBeGreaterThan(60);
});

test(`'John_Williams'`, () => {
  expect(giticon('John_Williams').length).toBeGreaterThan(60);
});

test(`'John-Williams'`, () => {
  expect(giticon('John-Williams').length).toBeGreaterThan(60);
});

test(`'John_-Williams3'`, () => {
  expect(giticon('John_-Williams3').length).toBeGreaterThan(60);
});

