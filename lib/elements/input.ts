import { browser } from '../_engine';
import { BaseElement } from '../base/base.element';

export type InputAction = 'click' | 'focus' | null;
export type InputGetRes = { text: string; placeholder: string };
export type InputSendKeys = string | number;
export type InputIsDispRes = boolean;

class Input extends BaseElement {
  constructor(selector, id) {
    super(selector, id);
  }

  async get() {
    await this.waitForRootVisible();

    return await browser.executeScript((element) => {
      return {
        text: element.value,
        placeholder: element.placeholder,
      };
    }, this.root.getEngineElement());
  }

  async sendKeys(value) {
    await this.waitForRootVisible();

    await this.root.sendKeys(value);
  }
}

export { Input };
