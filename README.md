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

## Comparison with Other Git CLIs

Here's a table comparing Gitadox with other popular Git CLI tools:

| Tool        | Main Features | Platforms | Language |
|-------------|---------------|-----------|----------|
| Gitadox     | AI-powered automation, pretty output, GitHub integration, plugins, scripts | Windows, macOS, Linux | JavaScript |
| lazygit     | Terminal UI, fast navigation | Windows, macOS, Linux | Go |
| tig         | Ncurses TUI, browse logs/diffs | Windows, macOS, Linux | C |
| forgit      | Fuzzy-search git operations | Windows, macOS, Linux | Shell scripts |
| gitui       | Modern TUI, conflict resolution | Windows, macOS, Linux | Rust |
| gh (GitHub CLI) | GitHub management & automation | Windows, macOS, Linux | Go |
| hub         | GitHub CLI extensions | Windows, macOS, Linux | Go |
| git-extras  | Extra commands, productivity | Windows, macOS, Linux | Shell scripts |
| git-flow    | Branch/release workflow model | Windows, macOS, Linux | Shell scripts |
| Oh My Zsh   | Git aliases, prompt customization | Windows, macOS, Linux | Shell scripts |

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

- List pull requests for a repository:
  ```bash
  gitadox prs <owner> <repo>
  ```

- Create a new issue:
  ```bash
  gitadox issue <owner> <repo> "Issue Title" "Issue Description"
  ```

- Run a custom script:
  ```bash
  gitadox run <script-name>
  ```

### Configuration

Gitadox requires a GitHub personal access token for GitHub integration. Set it as an environment variable:

```bash
export GITHUB_TOKEN=your_token_here
```

For Ollama integration, ensure Ollama is running and configured.

## Plugins

Gitadox supports plugins to add new features. Plugins are located in the `gitadox-plugins/` directory.

Example plugin structure (see `gitadox-plugins/sample.js`):

```javascript
export const name = 'Sample Plugin';
export const description = 'A sample plugin for Gitadox.';
export async function handler() {
  console.log('Hello from the sample plugin!');
}
```

## Scripts

Custom scripts can be added to the `scripts/` directory. They follow a similar structure to plugins but use the `run` function.

Example script (see `scripts/hello.js`):

```javascript
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

Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): 2025-12-25 20:58:54
Current User's Login: theKennethy