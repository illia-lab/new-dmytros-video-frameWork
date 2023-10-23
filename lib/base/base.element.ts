import { BaseLayer } from './base.layer';
import { compareToPattern } from 'sat-utils';
import { PromodElementType } from 'promod/built/interface';
import { browser } from '../_engine';

class BaseElement extends BaseLayer {
  selector;
  name;
  constructor(root: string | PromodElementType, name: string) {
    super(root, name);
  }

  async action(action: null | 'click' | 'focus') {
    if (!action) {
      action = 'click';
    }
    await this.waitForRootVisible();
    await this[action]();
  }

  async get() {
    await this.waitForRootVisible();

    return await browser.executeScript((element) => element.innerText, this.root.getEngineElement());
  }
  async isSameVisibility(data) {
    return compareToPattern(await this.isDysplayed(), data).result;
  }

  async isSameContent(data) {
    return compareToPattern(await this.get(), data).result;
  }

  async isDysplayed() {
    await this.root.isDisplayed();
  }

  async click() {
    await this.root.click();
  }

  async focus() {
    await this.root.click();
  }
}

export { BaseElement };
