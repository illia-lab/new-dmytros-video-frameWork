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
    const result = this.root.getText();
    console.log(result);
  }

  async click() {
    await this.waitForRootVisible();
    const result = this.root.click();
  }
}

export { Text };
