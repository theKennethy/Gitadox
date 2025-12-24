import inquirer from 'inquirer';
import ListPrompt from 'inquirer/lib/prompts/list.js';

class NoWrapListPrompt extends ListPrompt {
  onUpKey() {
    if (this.selected > 0) {
      this.selected--;
      this.render();
    }
  }
  onDownKey() {
    if (this.selected < this.opt.choices.realLength - 1) {
      this.selected++;
      this.render();
    }
  }
}

export default NoWrapListPrompt;
