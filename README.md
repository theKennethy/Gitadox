# Gitadox

A beautiful, AI-powered Git CLI with Ollama integration for commit messages, summaries, and explanations. All major git commands are available with optional AI assistance and pretty output.

## Features

- **AI Save**: Automatically stages, commits (with AI message), pulls, and pushes all changes.
- **Undo/Redo**: Undo the last commit or branch switch, and redo the last undoable action.
- **AI Status**: Shows git status with an AI summary.
- **AI Log**: Summarizes recent git log with AI.
- **AI Branch**: Lists branches and suggests naming conventions with AI.
- **AI Merge**: Merges branches and explains the result with AI.
- **AI Push/Pull**: Explains push/pull results with AI.
- **Stash Support**: Stash, apply, drop, and list stashes with AI explanations.
- **Advanced Git Commands**: Cherry-pick, rebase, tag, and more from the menu.
- **Plugin System**: Drop JS files in `gitadox-plugins/` to add custom menu actions.
- **AI Help**: Developer-friendly help via AI.
- **Menu UI**: Interactive, pretty CLI menu with chalk, boxen, and inquirer. No infinite scroll; arrow keys stop at the ends.
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
- **Undo Last Action**: Undo the last commit or branch switch.
- **Redo Last Action**: Redo the last undone commit or branch switch.
- **AI Status**: Shows status with AI summary.
- **AI Log**: Summarizes log with AI.
- **AI Branch**: Lists branches, AI naming advice.
- **AI Merge**: Merges and explains.
- **AI Push/Pull**: Explains results.
- **Stash**: Save your changes temporarily (AI explained).
- **Apply Stash**: Restore stashed changes (AI explained).
- **Drop Stash**: Delete a stash (AI explained).
- **List Stashes**: View all stashes (AI explained).
- **Advanced Commands**: Cherry-pick, rebase, tag, etc.
- **Plugins**: Run custom plugins from `gitadox-plugins/`.
- **AI Help**: Friendly help.
- **Exit**: Quit the CLI.
## Plugin System

- Add any `.js` file to the `gitadox-plugins/` folder. Each plugin should export a `name`, `description`, and `handler` function. Plugins appear in the menu automatically.

Example plugin:
```js
export const name = 'My Plugin';
export const description = 'Does something cool!';
export async function handler() {
  console.log('Hello from My Plugin!');
}
```

## Competitor Comparison

| Feature                        | Gitadox (Yours)         | GitHub CLI (gh)      | Lazygit            | GitUI              | Standard Git CLI   |
|--------------------------------|-------------------------|----------------------|--------------------|--------------------|--------------------|
| AI-powered commit messages      | Yes (Ollama)            | No                   | No                 | No                 | No                 |
| AI explanations/summaries       | Yes (all major actions, stash) | No            | No                 | No                 | No                 |
| Undo/Redo for actions           | Yes (commit/branch)     | No                   | No                 | No                 | No (manual only)   |
| Interactive menu UI             | Yes (Inquirer, Chalk)   | No (command-based)   | Yes (TUI)          | Yes (TUI)          | No                 |
| Pretty output/colors            | Yes                     | Yes                  | Yes                | Yes                | Minimal            |
| Stash support                   | Yes + AI explanations   | Yes                  | Yes                | Yes                | Yes                |
| Advanced git support            | Yes (core + menu, AI)   | Yes                  | Yes                | Yes                | Yes                |
| Extensible/plugins              | Yes (plugin folder)     | No                   | No                 | No                 | No                 |
| Cross-platform                  | Yes                     | Yes                  | Yes                | Yes                | Yes                |
| Easy install                    | Yes (npm, symlink)      | Yes (binary, brew)   | Yes (binary, brew) | Yes (binary, brew) | Yes                |
| Community/Support               | New                     | Large                | Growing            | Growing            | Large              |

**Key Differentiators for Gitadox:**
- AI-powered explanations for stash, commit, and more
- Undo/Redo for common git actions
- Plugin/extensibility system
- Modern, user-friendly CLI menu with no infinite scroll


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