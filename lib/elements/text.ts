import { BaseElement } from '../base/base.element';
import { PromodElementType } from 'promod/built/interface';

export type TextAction = 'click' | 'focus' | null;
export type TextGetRes = string;
export type TextIsDispRes = boolean;
export type TextContent = string | ((str: string) => boolean);

class Text extends BaseElement {
  constructor(root: string | PromodElementType, id: string) {
    super(root, id);
  }

  async get() {
    await this.waitForRootVisible();
    const result = await this.root.getText();
    return result.trim();
  }

  async click() {
    await this.waitForRootVisible();
    await this.root.click();
  }

  async sendKeys() {
    throw new Error(
      `${this.id} with selector ${this.root.selector} was created as a Text element,Text does not have send keys`,
    );
  }
}

export { Text };
