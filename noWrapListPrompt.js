import inquirer from 'inquirer';
import ListPrompt from 'inquirer/lib/prompts/list.js';


class NoWrapListPrompt extends ListPrompt {
  constructor(questions, rl, answers) {
    super(questions, rl, answers);
    // Force finite pagination (no infinite scroll/duplication)
    this.paginator = new (this.paginator.constructor)(this.screen, { isInfinite: false });
  }
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
