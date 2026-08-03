#!/usr/bin/env node
/**
 * Append one tip for today's Asia/Kuala_Lumpur date if missing.
 * Env: NOTE (optional override), GITHUB_OUTPUT (Actions)
 * Writes wrote=true|false and commit_message=... for the workflow.
 */
import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const logPath = join(root, 'LOG.md');
const readmePath = join(root, 'README.md');
const tipsPath = join(root, 'tips.json');

function todayMYT() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kuala_Lumpur',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date()); // YYYY-MM-DD
}

function dayOfYearMYT(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const start = Date.UTC(y, 0, 0);
  const now = Date.UTC(y, m - 1, d);
  return (now - start) / 86400000;
}

function setOutput(name, value) {
  const out = process.env.GITHUB_OUTPUT;
  if (!out) {
    console.log(`${name}=${value}`);
    return;
  }
  // Escape newlines for multiline-safe single line
  const safe = String(value).replace(/\n/g, '%0A').replace(/\r/g, '');
  appendFileSync(out, `${name}=${safe}\n`);
}

const today = todayMYT();
const log = readFileSync(logPath, 'utf8');
const heading = `## ${today}`;

if (log.includes(heading)) {
  console.log(`Already logged ${today}; skip.`);
  setOutput('wrote', 'false');
  setOutput('commit_message', '');
  process.exit(0);
}

const tips = JSON.parse(readFileSync(tipsPath, 'utf8'));
const note = (process.env.NOTE || '').trim();
let category;
let text;

if (note) {
  category = 'note';
  text = note;
} else {
  const tip = tips[dayOfYearMYT(today) % tips.length];
  category = tip.category;
  text = tip.text;
}

const entry = `\n${heading}\n\n- **${category}:** ${text}\n`;
writeFileSync(logPath, log.trimEnd() + entry + '\n');

const daysLogged = (log.match(/^## \d{4}-\d{2}-\d{2}/gm) || []).length + 1;
const readme = readFileSync(readmePath, 'utf8');
const stats = `<!-- stats:start -->
- **Last entry:** ${today} (${category})
- **Days logged:** ${daysLogged}
<!-- stats:end -->`;
const nextReadme = readme.replace(
  /<!-- stats:start -->[\s\S]*?<!-- stats:end -->/,
  stats,
);
writeFileSync(readmePath, nextReadme);

const short = text.length > 72 ? `${text.slice(0, 69)}...` : text;
const commitMessage = `log(${category}): ${short}`;

console.log(commitMessage);
setOutput('wrote', 'true');
setOutput('commit_message', commitMessage);
