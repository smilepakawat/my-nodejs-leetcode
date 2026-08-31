import isValid from './solution.js';

describe('20. Valid Parentheses', () => {
  // Sample cases from LeetCode — un once solution.js is implemented
  test('example 1: "()" -> true', () => {
    expect(isValid('()')).toBe(true);
  });

  test('example 2: "()[]{}" -> true', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('example 3: "(]" -> false', () => {
    expect(isValid('(]')).toBe(false);
  });

  // My own edge cases
  test('nested and interleaved correctly: "{[]}" -> true', () => {
    expect(isValid('{[]}')).toBe(true);
  });

  test('wrong order: "([)]" -> false', () => {
    expect(isValid('([)]')).toBe(false);
  });

  test('single opening bracket: "(" -> false', () => {
    expect(isValid('(')).toBe(false);
  });

  test('single closing bracket: ")" -> false', () => {
    expect(isValid(')')).toBe(false);
  });

  test('only closing brackets: "]})" -> false', () => {
    expect(isValid(']})')).toBe(false);
  });

  test('empty string -> true (vacuously balanced)', () => {
    expect(isValid('')).toBe(true);
  });
});
