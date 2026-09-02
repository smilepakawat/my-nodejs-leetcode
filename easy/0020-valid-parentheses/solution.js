/**
 * LeetCode 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  let stacks = [];
  for (const c of s) {
    if (c == '(' || c == '{' || c == '[') {
      stacks.push(c);
      continue;
    }

    if (stacks.length == 0) {
      return false;
    }
    let top = stacks.pop();
    if ((top == '(' && c !== ')') || (top == '{' && c != '}') || (top == '[' && c != ']')) {
      return false;
    }
  }

  return !stacks.length;
}

export default isValid;
