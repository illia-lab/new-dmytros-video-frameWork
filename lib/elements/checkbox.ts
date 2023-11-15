import { BaseElement } from '../base/base.element';
import { browser } from '../_engine';

export type CheckBoxGetRes = boolean;
export type CheckBoxIsDispRes = boolean;
export type CheckBoxSendKeys = boolean;
export type CheckBoxAction = 'click' | 'focus' | null;
export type CheckBoxContent = boolean;

class CheckBox extends BaseElement {
  constructor(root, name) {
    super(root, name);
  }

  async sendKeys(data: boolean) {
    if ((await this.get()) !== data) {
      await this.root.click();
    }
  }

  async get() {
    const result = await browser.executeScript((element) => {
      return element.checked;
    }, this.root.getEngineElement());
    return result;
  }
}

export { CheckBox };
