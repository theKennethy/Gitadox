
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

## Competitor Comparison

| Tool             | AI Features         | Usability                | Extensibility         | Advanced Git Support      | Unique Differentiators                |
|------------------|--------------------|--------------------------|-----------------------|--------------------------|---------------------------------------|
| **Gitadox**      | Yes (Ollama, all major actions, commit, stash, merge, etc.) | High (AI prompts, guided menu, Undo/Redo, no infinite scroll) | High (plugin system, JS plugins) | Good (core + advanced via menu, AI explanations) | AI-driven, plugin support, Undo/Redo, modern menu |
| GitHub CLI (gh)  | No                 | High (GitHub-focused, intuitive commands) | Moderate (extensions/plugins) | Good (esp. for GitHub workflows)      | Deep GitHub integration, PR/issues   |
| Lazygit          | No                 | Very High (TUI, keyboard-driven, fast) | Low (configurable, not extensible) | Good (visualizes branches, stashes)   | Fast TUI, real-time status, easy undo|
| GitUI            | No                 | High (TUI, mouse/keyboard, clean UI) | Low (configurable, not extensible) | Good (interactive rebase, stash, etc.)| Clean UI, performance, cross-platform|
| Standard Git CLI | No                 | Moderate (powerful, steep learning curve) | High (scripts, aliases, hooks) | Excellent (full git feature set)      | Ubiquitous, scriptable, most control |

**Where Gitadox stands out:**
- AI-powered explanations, commit messages, and automation
- Undo/Redo for common git actions
- Plugin/extensibility system
- Modern, user-friendly CLI menu (no infinite scroll)

**Where others excel:**
- Lazygit/GitUI: Fast, visual TUI workflows
- GitHub CLI: Deep GitHub integration (PRs, issues)
- Standard Git: Most powerful, scriptable, and universal


## Advanced Git


Gitadox now supports a full suite of advanced git commands, each with AI-powered explanations and summaries. After running any advanced command, you’ll see a plain-English summary of what happened and what to do next.

| Command      | Description / Prompt Example                      | AI Explanation |
|--------------|--------------------------------------------------|:-------------:|
| stash        | Save, apply, drop, and list stashes              |      Yes      |
| checkout     | Switch branches or restore files                 |      Yes      |
| cherry-pick  | Apply a commit from another branch               |      Yes      |
| rebase       | Reapply commits on top of another base tip       |      Yes      |
| reset        | Reset current HEAD to a specified state          |      Yes      |
| tag          | Create, list, or delete tags                     |      Yes      |
| remote       | Manage set of tracked repositories               |      Yes      |
| diff         | Show changes between commits, branches, etc.     |      Yes      |
| show         | Show various types of objects                    |      Yes      |
| revert       | Revert some existing commits                     |      Yes      |
| bisect       | Find the commit that introduced a bug            |      Yes      |
| blame        | Show what revision and author last modified each line of a file | Yes |
| fetch        | Download objects and refs from another repo      |      Yes      |
| config       | Get and set repository or global options         |      Yes      |
| clean        | Remove untracked files from the working tree     |      Yes      |
| archive      | Create an archive of files from a named tree     |      Yes      |
| describe     | Give an object a human-readable name             |      Yes      |
| reflog       | Show history of HEAD or references               |      Yes      |
| shortlog     | Summarize git log output                         |      Yes      |
| notes        | Add or inspect object notes                      |      Yes      |
| grep         | Print lines matching a pattern                   |      Yes      |
| submodule    | Initialize, update, or inspect submodules        |      Yes      |
| worktree     | Manage multiple working trees                    |      Yes      |

All commands are accessible from the "Advanced Commands" menu. Each will prompt for any required arguments and then provide an AI summary of the result.
## Scripts vs Plugins

**Scripts** (in the `scripts/` folder) are for quick, user-defined automation or macros. Each script is a JS file exporting a `name` and a `run` function. Use scripts for simple, personal tasks or to automate repetitive actions. Scripts appear in the menu as `[Script]` entries.

**Plugins** (in `gitadox-plugins/`) are for advanced, reusable, or shareable CLI extensions. Each plugin exports a `name`, `description`, and a `handler` function. Plugins can add new menu actions and interact more deeply with the CLI. Use plugins for features you want to share or reuse across projects. Plugins appear in the menu as `[Plugin]` entries.

**Summary:**
- Use scripts for quick, personal automation.
- Use plugins for advanced, reusable, or shareable CLI extensions.

**Example script (`scripts/hello.js`):**
```js
export const name = 'Hello Script';
export async function run() {
  console.log('Hello from your custom script!');
}
```

**Example plugin (`gitadox-plugins/sample.js`):**
```js
export const name = 'My Plugin';
export const description = 'Does something cool!';
export async function handler() {
  console.log('Hello from My Plugin!');
}
```
## Multi-Repo Management

Gitadox lets you manage multiple git repositories at once from a single menu.

- **Add Repo**: Add the path to any local git repository you want to manage.
- **Remove Repo**: Remove a repo from the managed list.
- **List Repos**: See all currently managed repos.
- **Batch Status**: Run `git status` in all managed repos and see the results.
- **Batch Pull**: Run `git pull` in all managed repos.
- **Batch Push**: Run `git push` in all managed repos.

To use, select "Multi-Repo Management" from the main menu. You can add, remove, and list repos, and perform batch operations across all of them. Managed repo paths are stored in `.gitadox-repos.json` in your project directory.

---
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
