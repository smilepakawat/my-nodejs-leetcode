#!/usr/bin/env node

/**
 * Scaffolds a new LeetCode problem folder from the templates in
 * scripts/templates/.
 *
 * Usage:
 *   node scripts/new-problem.js <number> <slug> <difficulty>
 *
 * Example:
 *   node scripts/new-problem.js 0001 two-sum easy
 *
 * Creates:
 *   easy/0001-two-sum/solution.js
 *   easy/0001-two-sum/solution.test.js
 *   easy/0001-two-sum/README.md
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIFFICULTIES = ['easy', 'medium', 'hard'];
const ROOT_DIR = path.join(__dirname, '..');
const TEMPLATES_DIR = path.join(__dirname, 'templates');

function printUsageAndExit(message) {
  if (message) {
    console.error(`Error: ${message}\n`);
  }
  console.error('Usage: node scripts/new-problem.js <number> <slug> <difficulty>');
  console.error('Example: node scripts/new-problem.js 0001 two-sum easy');
  console.error(`Difficulty must be one of: ${DIFFICULTIES.join(', ')}`);
  process.exit(1);
}

function padNumber(rawNumber) {
  if (!/^\d+$/.test(rawNumber)) {
    printUsageAndExit(`problem number must be numeric, got "${rawNumber}"`);
  }
  return rawNumber.padStart(4, '0');
}

function normalizeSlug(rawSlug) {
  const slug = rawSlug.trim().toLowerCase();
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    printUsageAndExit(
      `slug must be lowercase, alphanumeric words separated by hyphens, got "${rawSlug}"`
    );
  }
  return slug;
}

function slugToTitle(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function slugToCamelCase(slug) {
  const words = slug.split('-');
  return words
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join('');
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function applyReplacements(content, replacements) {
  return Object.entries(replacements).reduce(
    (text, [token, value]) => text.split(`{{${token}}}`).join(value),
    content
  );
}

function main() {
  const [rawNumber, rawSlug, rawDifficulty] = process.argv.slice(2);

  if (!rawNumber || !rawSlug || !rawDifficulty) {
    printUsageAndExit('missing required arguments');
  }

  const difficulty = rawDifficulty.trim().toLowerCase();
  if (!DIFFICULTIES.includes(difficulty)) {
    printUsageAndExit(`difficulty must be one of: ${DIFFICULTIES.join(', ')}`);
  }

  const number = padNumber(rawNumber);
  const slug = normalizeSlug(rawSlug);
  const folderName = `${number}-${slug}`;
  const targetDir = path.join(ROOT_DIR, difficulty, folderName);

  if (fs.existsSync(targetDir)) {
    printUsageAndExit(`${path.relative(ROOT_DIR, targetDir)} already exists`);
  }

  const replacements = {
    NUMBER: number,
    TITLE: slugToTitle(slug),
    SLUG: slug,
    DIFFICULTY: difficulty,
    DIFFICULTY_CAP: capitalize(difficulty),
    FUNCTION_NAME: slugToCamelCase(slug),
  };

  const files = [
    { template: 'solution.js.template', output: 'solution.js' },
    { template: 'solution.test.js.template', output: 'solution.test.js' },
    { template: 'README.md.template', output: 'README.md' },
  ];

  fs.mkdirSync(targetDir, { recursive: true });

  files.forEach(({ template, output }) => {
    const templatePath = path.join(TEMPLATES_DIR, template);
    const rawContent = fs.readFileSync(templatePath, 'utf8');
    const content = applyReplacements(rawContent, replacements);
    fs.writeFileSync(path.join(targetDir, output), content);
  });

  const relativeDir = path.relative(ROOT_DIR, targetDir);
  console.log(`Created ${relativeDir}/`);
  files.forEach(({ output }) => console.log(`  ${relativeDir}/${output}`));
  console.log('\nNext steps:');
  console.log(`  1. Implement the solution in ${relativeDir}/solution.js`);
  console.log(`  2. Fill in the sample + edge case tests in ${relativeDir}/solution.test.js`);
  console.log(`  3. Run: npm test -- ${relativeDir}`);
}

main();
