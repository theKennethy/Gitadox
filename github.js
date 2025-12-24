// github.js
// GitHub API integration for Gitadox
import fetch from 'node-fetch';

const GITHUB_API = 'https://api.github.com';

export async function getUser(token) {
  const res = await fetch(`${GITHUB_API}/user`, {
    headers: { Authorization: `token ${token}` }
  });
  if (!res.ok) throw new Error('GitHub authentication failed');
  return res.json();
}

export async function listPullRequests(owner, repo, token) {
  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/pulls`, {
    headers: { Authorization: `token ${token}` }
  });
  if (!res.ok) throw new Error('Failed to fetch pull requests');
  return res.json();
}

export async function createPullRequest(owner, repo, title, head, base, token) {
  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/pulls`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, head, base })
  });
  if (!res.ok) throw new Error('Failed to create pull request');
  return res.json();
}

export async function listIssues(owner, repo, token) {
  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/issues`, {
    headers: { Authorization: `token ${token}` }
  });
  if (!res.ok) throw new Error('Failed to fetch issues');
  return res.json();
}

export async function createIssue(owner, repo, title, body, token) {
  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  });
  if (!res.ok) throw new Error('Failed to create issue');
  return res.json();
}
