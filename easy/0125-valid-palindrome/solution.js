/**
 * LeetCode 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 *
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]+/g, "")
  if (str.length <= 1) {
    return true;
  }
  for (let i = 0; i < str.length / 2; ++i) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

export default isPalindrome;
