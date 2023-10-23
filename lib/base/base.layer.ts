import { $ } from '../_engine';
import { waitForCondition } from 'sat-utils';
import { PromodElementType } from 'promod/built/interface';

class BaseLayer {
  root: PromodElementType;
  id: string;
  constructor(root: string | PromodElementType, name: string) {
    this.root = typeof root === 'string' ? $(root) : root;
    this.id = name;
  }
  async waitForRootExist() {
    await waitForCondition(() => this.root.isPresent(), {
      timeout: 5_000,
      message: `${this.id} with selector ${this.root.selector} does not exist`,
    });
  }
  async waitForRootVisible() {
    await waitForCondition(() => this.root.isDisplayed(), {
      timeout: 5_000,
      message: `${this.id} with selector ${this.root.selector} does not Visible`,
    });
  }
}

export { BaseLayer };
