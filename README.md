# My LeetCode Practice (JavaScript / Node.js)

![CI](https://github.com/smilepakawat/my-nodejs-leetcode/actions/workflows/ci.yml/badge.svg)

My LeetCode solutions in plain modern JavaScript (Node.js), organized by
difficulty, each with tests and a short write-up of my approach.

This project uses native ES modules (`"type": "module"` in `package.json`) —
solutions use `export default`, tests use `import`, and relative imports need
their explicit `.js` extension (e.g. `import twoSum from './solution.js'`).

## Structure

```
easy/
  0001-two-sum/
    solution.js       # exported solution, e.g. export default twoSum
    solution.test.js  # Jest tests: LeetCode samples + my own edge cases
    README.md         # problem link, approach, complexity, what I got wrong
medium/
hard/
scripts/
  new-problem.js       # scaffolds a new problem folder from a template
  templates/           # solution.js / solution.test.js / README.md templates
```

Problem folders are named `<4-digit-number>-<slug>`, matching the LeetCode
problem number and URL slug (e.g. `0001-two-sum` for
https://leetcode.com/problems/two-sum/).

## Getting Started

```bash
npm install       # install dependencies
npm test          # run every problem's tests
npm run lint      # lint everything
npm run format    # format everything with Prettier
```

### Running a single problem's tests

Jest treats extra CLI args as a path pattern, so you can scope a run to one
problem folder:

```bash
npm test -- easy/0001-two-sum
```

### Scaffolding a new problem

```bash
node scripts/new-problem.js <number> <slug> <difficulty>

# Example
node scripts/new-problem.js 0002 add-two-numbers medium
```

This generates `medium/0002-add-two-numbers/` with `solution.js`,
`solution.test.js`, and `README.md` pre-filled from the templates in
`scripts/templates/`.

## Scripts

| Script                  | What it does                            |
| ----------------------- | --------------------------------------- |
| `npm test`              | Run all problem tests (Jest)            |
| `npm run test:watch`    | Run tests in watch mode                 |
| `npm run test:coverage` | Run tests with coverage report          |
| `npm run new`           | Alias for `node scripts/new-problem.js` |
| `npm run lint`          | Lint all files with ESLint              |
| `npm run lint:fix`      | Lint and auto-fix                       |
| `npm run format`        | Format all files with Prettier          |
| `npm run format:check`  | Check formatting without writing        |

## Progress

| #    | Title                           | Difficulty | Link                                                                       | Status  |
| ---- | ------------------------------- | ---------- | -------------------------------------------------------------------------- | ------- |
| 0001 | Two Sum                         | Easy       | [LeetCode](https://leetcode.com/problems/two-sum/)                         | ✅ Done |
| 0020 | Valid Parentheses               | Easy       | [LeetCode](https://leetcode.com/problems/valid-parentheses/)               | ✅ Done |
| 0121 | Best Time to Buy and Sell Stock | Easy       | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | ✅ Done |
| 0009 | Palindrome Number               | Easy       | [LeetCode](https://leetcode.com/problems/palindrome-number/)               | ✅ Done |
| 0217 | Contains Duplicate              | Easy       | [LeetCode](https://leetcode.com/problems/contains-duplicate/)              | ✅ Done |

<!--
Add a row per problem as you go, e.g.:
| 0002 | Add Two Numbers | Medium | [LeetCode](https://leetcode.com/problems/add-two-numbers/) | 🚧 In Progress |
Status values I use: ⬜ Todo · 🚧 In Progress · ✅ Done
-->
