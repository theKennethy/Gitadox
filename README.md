# Gitadox

A beautiful, AI-powered Git CLI with Ollama integration for commit messages, summaries, and explanations. All major git commands are available with optional AI assistance and pretty output.

## Features

- **AI Save**: Automatically stages, commits (with AI message), pulls, and pushes all changes.
- **AI Status**: Shows git status with an AI summary.
- **AI Log**: Summarizes recent git log with AI.
- **AI Branch**: Lists branches and suggests naming conventions with AI.
- **AI Merge**: Merges branches and explains the result with AI.
- **AI Push/Pull**: Explains push/pull results with AI.
- **AI Help**: Developer-friendly help via AI.
- **Menu UI**: Interactive, pretty CLI menu with chalk, boxen, and inquirer.
- **Global CLI**: Run `gitadox` from anywhere after symlinking.

## Installation

1. Clone this repo or copy the `gitadox` file to your project.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Make the CLI executable:
   ```sh
   chmod +x gitadox
   ```
4. (Optional) Symlink globally:
   ```sh
   sudo ln -sf "$PWD/gitadox" /usr/local/bin/gitadox
   ```

## Usage

- Run the menu:
  ```sh
  gitadox
  ```
- Or run a command directly:
  ```sh
  gitadox save
  ```

## Commands

- **AI Save**: Stages, commits (AI message), pulls, and pushes.
- **AI Status**: Shows status with AI summary.
- **AI Log**: Summarizes log with AI.
- **AI Branch**: Lists branches, AI naming advice.
- **AI Merge**: Merges and explains.
- **AI Push/Pull**: Explains results.
- **AI Help**: Friendly help.
- **Exit**: Quit the CLI.

## Advanced Git (Planned)

Support for advanced git commands (stash, checkout, cherry-pick, rebase, reset, tag, remote, diff, show, revert, bisect, blame, fetch, config, clean, archive, describe, reflog, shortlog, notes, grep, submodule, worktree, etc.) is planned. PRs welcome!

## AI Integration

- Uses [Ollama](https://ollama.com/) (local API, e.g., llama3.1:8b) for:
  - Commit message generation
  - Summaries and explanations
  - Help formatting

## Requirements

- Node.js 18+
- npm
- [Ollama](https://ollama.com/) running locally

## License

MIT

---

*Made with ❤️ by theKennethy and GitHub Copilot*