import { BaseElement } from '../base/base.element';
import { PromodElementType } from 'promod/built/interface';

export type ButtonAction = 'click' | 'focus' | null;
export type ButtonGetRes = string;
export type ButtonIsDispRes = boolean;
export type ButtonContent = string | ((str:string) => boolean)

class Button extends BaseElement {
  constructor(root: string | PromodElementType, id: string) {
    super(root, id);
  }

  async sendKeys() {
    throw new Error(
      `${this.id} with selector ${this.root.selector} was created as a Button element,Button does not have send keys`,
    );
  }
}

export { Button };
