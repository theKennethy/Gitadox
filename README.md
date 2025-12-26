# Gitadox

AI-powered Git CLI with pretty output and full workflow automation.

## Description

Gitadox is a command-line interface tool that enhances your Git experience with AI-driven automation, beautiful formatting, and seamless integration with GitHub. It supports plugins and custom scri[...]

## Features

- **AI-Powered Automation**: Leverages Ollama for intelligent Git operations and suggestions.
- **Pretty Output**: Uses Boxen and Chalk for visually appealing console output.
- **GitHub Integration**: Directly interact with GitHub repositories, including pull requests and issues.
- **Interactive Prompts**: Customizable prompts using Inquirer for user-friendly interactions.
- **Plugin System**: Extend functionality with custom plugins.
- **Script Support**: Run custom scripts for advanced workflows.

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- Git
- Ollama (for AI features)

### Install Globally

Clone the repository and install globally:

```bash
git clone https://github.com/theKennethy/Gitadox.git
cd Gitadox
npm install -g .
```

This will make the `gitadox` command available globally.

## Usage

After installation, you can use Gitadox commands in your terminal:

```bash
gitadox --help
```

### Common Commands

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


| Feature                        | Gitadox (Yours)         | GitHub CLI (gh)      | Lazygit            | GitUI              | Standard Git CLI   |
|--------------------------------|-------------------------|----------------------|--------------------|--------------------|--------------------|
| AI-powered commit messages      | Yes (Ollama)            | No                   | No                 | No                 | No                 |
| AI explanations/summaries       | Yes (all major actions) | No                   | No                 | No                 | No                 |
| Guided merge conflict (AI)      | Yes                     | No                   | Partial (manual)   | Partial (manual)   | Manual             |
| Undo/Redo for actions           | Yes (commit/branch)     | No                   | No                 | No                 | No (manual only)   |
| Plugin/extensibility system     | Yes (JS plugins)        | Moderate (extensions)| No                 | No                 | Yes (scripts/hooks)|
| Scripting support               | Yes (scripts folder)    | No                   | No                 | No                 | Yes (scripts/hooks)|
| Modern menu UI (no wrap)        | Yes                     | No                   | Yes (TUI)          | Yes (TUI)          | No                 |
| Stash support                   | Yes + AI                | Yes                  | Yes                | Yes                | Yes                |
| Advanced git commands           | Yes + AI                | Yes                  | Yes                | Yes                | Yes                |
| GitHub integration (PR/issues)  | Yes                     | Yes                  | No                 | No                 | No                 |
| GitHub repo creation            | Yes                     | Yes                  | No                 | No                 | No                 |
| Public/private repo creation    | Yes                     | Yes                  | No                 | No                 | No                 |
| Multi-repo management           | Yes (batch ops)         | No                   | No                 | No                 | No                 |
| Check for updates               | Yes (menu)              | No                   | No                 | No                 | No                 |
| Cross-platform                  | Yes                     | Yes                  | Yes                | Yes                | Yes                |
| Easy install                    | Yes                     | Yes                  | Yes                | Yes                | Yes                |
| Community/support               | New                     | Large                | Growing            | Growing            | Large              |
| TUI/visual workflow             | No (menu)               | No                   | Yes                | Yes                | No                 |
| Scripting/automation            | Yes (scripts/plugins)   | Yes                  | No                 | No                 | Yes                |

**Where Gitadox stands out:**
- AI-powered explanations, commit messages, and automation
- Undo/Redo for common git actions
- Plugin/extensibility system and scripting
- Multi-repo management with batch operations
- Modern, user-friendly CLI menu (no infinite scroll)
- Built-in update checker

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
export const description = 'Prints Hello from a user script!';
export async function run() {
  console.log('Hello from your custom script!');
}
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Dependencies

- [boxen](https://github.com/sindresorhus/boxen) - Create boxes in the terminal
- [chalk](https://github.com/chalk/chalk) - Terminal string styling
- [inquirer](https://github.com/SBoudrias/Inquirer.js) - A collection of common interactive command line user interfaces
- [node-fetch](https://github.com/node-fetch/node-fetch) - A light-weight module that brings window.fetch to Node.js
