import readline from 'readline';
import chalk from 'chalk';

/**
 * Minimal single-line selection prompt
 * @param {string[]} choices - Array of choices to select from
 * @param {string} message - Prompt message
 * @returns {Promise<string>} - Selected choice
 */
export async function minimalPrompt(choices, message = 'Select an action:') {
  return new Promise((resolve) => {
    let selected = 0;
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    function render() {
      const line = `${chalk.cyan(message)} ${choices[selected]}`;
      readline.cursorTo(process.stdout, 0);
      process.stdout.write(line);
      readline.clearLine(process.stdout, 1);
    }
    render();
    readline.emitKeypressEvents(process.stdin, rl);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
    process.stdin.on('keypress', (str, key) => {
      if (key.name === 'up' || key.name === 'left') {
        selected = (selected - 1 + choices.length) % choices.length;
        render();
      } else if (key.name === 'down' || key.name === 'right') {
        selected = (selected + 1) % choices.length;
        render();
      } else if (key.name === 'return' || key.name === 'enter') {
        rl.close();
        if (process.stdin.isTTY) process.stdin.setRawMode(false);
        process.stdout.write('\n');
        resolve(choices[selected]);
      } else if (key.name === 'c' && key.ctrl) {
        rl.close();
        if (process.stdin.isTTY) process.stdin.setRawMode(false);
        process.stdout.write('\n');
        process.exit(0);
      }
    });
  });
}
