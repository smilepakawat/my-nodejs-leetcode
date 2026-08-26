# 1. Two Sum

- **Difficulty:** Easy
- **Link:** https://leetcode.com/problems/two-sum/

## Approach

Single pass with a hash map. Walk `nums` once; for each element, compute
`complement = target - nums[i]`. If the complement is already in the map
(meaning we've seen a value earlier in the array that would pair with the
current one), return `[indexOfComplement, i]` immediately. Otherwise record
the current value's index in the map and keep going.

This avoids checking every pair explicitly — by the time we reach index `i`,
the map already holds every value that could complete a pair with `nums[i]`.

## Complexity

- **Time:** O(n) — one pass, O(1) map lookups/inserts.
- **Space:** O(n) — the hash map holds up to n entries.

## What I initially got wrong

- First attempt was the brute-force double loop (O(n²)) — it works but doesn't
  scale, and it's the "obvious" answer interviewers expect you to improve on.
- Initially inserted into the map _before_ checking for the complement, which
  let an element pair with itself when `target == 2 * nums[i]` (e.g.
  `[3, 3]` with `target = 6` would incorrectly return `[0, 0]`). Fixed by
  checking the complement first, then inserting.
- Forgot that the problem doesn't guarantee a solution exists in the general
  case I might test with (only under LeetCode's stated constraints), so the
  function returns `[]` instead of throwing when no pair is found.
