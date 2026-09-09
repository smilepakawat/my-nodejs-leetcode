/**
 * LeetCode 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length != t.length) {
    return false;
  }
  let map = new Map();
  for (const c of s) {
    if (map.has(c)) {
      const v = map.get(c);
      map.set(c, v + 1);
    } else {
      map.set(c, 1);
    }
  }

  for (const c of t) {
    if (map.has(c) && map.get(c) != 0) {
      map.set(c, map.get(c) - 1);
      continue;
    }

    if (!map.has(c) || map.get(c) == 0) {
      return false;
    }
  }

  return true;
}

export default isAnagram;
