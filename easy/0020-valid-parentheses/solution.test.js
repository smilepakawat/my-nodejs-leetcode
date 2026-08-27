import isValid from './solution.js';

describe('20. Valid Parentheses', () => {
  // Sample cases from LeetCode — un-skip once solution.js is implemented
  test.skip('example 1: "()" -> true', () => {
    expect(isValid('()')).toBe(true);
  });

  test.skip('example 2: "()[]{}" -> true', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test.skip('example 3: "(]" -> false', () => {
    expect(isValid('(]')).toBe(false);
  });

  // My own edge cases
  test.skip('nested and interleaved correctly: "{[]}" -> true', () => {
    expect(isValid('{[]}')).toBe(true);
  });

  test.skip('wrong order: "([)]" -> false', () => {
    expect(isValid('([)]')).toBe(false);
  });

  test.skip('single opening bracket: "(" -> false', () => {
    expect(isValid('(')).toBe(false);
  });

  test.skip('single closing bracket: ")" -> false', () => {
    expect(isValid(')')).toBe(false);
  });

  test.skip('only closing brackets: "]})" -> false', () => {
    expect(isValid(']})')).toBe(false);
  });

  test.skip('empty string -> true (vacuously balanced)', () => {
    expect(isValid('')).toBe(true);
  });
});
