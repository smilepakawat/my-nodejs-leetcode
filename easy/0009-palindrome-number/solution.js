/**
 * LeetCode 9. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 *
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0) {
    return false
  }

  let rev = 0;
  let num = x;
  while (num > 0) {
    rev = (rev * 10) + (num % 10);
    num = Math.floor(num / 10);
  }

  return x == rev
}

export default isPalindrome;
