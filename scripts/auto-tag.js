// scripts/auto-tag.js
// Auto-generate tags for this repo using llama3.1:8b (Ollama) and write to .gitadox-tags.json
import fetch from 'node-fetch';
import fs from 'fs';

const OLLAMA_URL = 'http://localhost:11434/api/generate';
const OLLAMA_MODEL = 'llama3.1:8b';

function getRepoSummary() {
  let summary = '';
  if (fs.existsSync('package.json')) {
    try {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      summary += `Name: ${pkg.name}\nDescription: ${pkg.description || ''}\n`;
      if (pkg.keywords) summary += `Keywords: ${pkg.keywords.join(', ')}\n`;
    } catch {}
  }
  if (fs.existsSync('README.md')) {
    try {
      const readme = fs.readFileSync('README.md', 'utf8');
      summary += `README: ${readme.slice(0, 1000)}\n`;
    } catch {}
  }
  return summary;
}

async function main() {
  const context = getRepoSummary();
  const prompt = `Suggest 3-7 relevant tags for this git repo based on the following metadata and content. Output as a JSON array of strings, no explanations.\n${context}`;
  const res = await fetch(OLLAMA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: OLLAMA_MODEL, prompt })
  });
  const text = await res.text();
  let tags = [];
  for (const line of text.split(/\r?\n/)) {
    try {
      if (!line.trim()) continue;
      const obj = JSON.parse(line);
      if (obj.response) {
        // Try to parse the response as JSON array
        try {
          tags = JSON.parse(obj.response);
          if (Array.isArray(tags)) break;
        } catch {}
      }
    } catch {}
  }
  if (!Array.isArray(tags) || !tags.length) {
    console.error('AI did not return valid tags.');
    return;
  }
  fs.writeFileSync('.gitadox-tags.json', JSON.stringify({ tags }, null, 2));
  console.log('Tags written to .gitadox-tags.json:', tags);
}

main();
