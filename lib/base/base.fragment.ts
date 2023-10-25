import { BaseLayer } from './base.layer';
import { Collection } from './collection';

class BaseFragment extends BaseLayer {
  constructor(root, id) {
    super(root, id);
  }

  init(root, id, ChildType, ...rest) {
    if (ChildType === Collection) {
      return new ChildType(typeof root === 'string' ? this.root.$$(root) : root, id, ...rest);
    } else {
      return new ChildType(typeof root === 'string' ? this.root.$(root) : root, id);
    }
  }

  async sendKeys(objData) {
    await this.waitForRootVisible();

    const keys = Object.keys(objData);

    for (const key of keys) {
      await this[key].sendKeys(objData[key]);
    }
  }

  async get(objData) {
    await this.waitForRootExist();

    const keys = Object.keys(objData); // [масив ключів аргумента,який ми очікуємо як об'єкт]
    const result = {};

    for (const key of keys) {
      if (!this[key]) {
        throw new Error(`${this.id} does not have required property ${key}`);
      }
      result[key] = await this[key].get(objData[key]);
    }
    return result;
  }

  async isSameVisibility(objData) {
    const keys = Object.keys(objData);

    for (const key of keys) {
      const res = await this[key].isSameVisibility(objData[key]);
      if (!res) {
        return false;
      }
    }
    return true;
  }

  async isSameContent(objData) {
    const keys = Object.keys(objData);

    for (const key of keys) {
      const res = await this[key].isSameContent(objData[key]);
      if (!res) {
        return false;
      }
    }
    return true;
  }

  async isDisplayed(objData) {
    const keys = Object.keys(objData); // [масив ключів аргумента,який ми очікуємо як об'єкт]
    const result = {};

    for (const key of keys) {
      if (!this[key]) {
        throw new Error(`${this.id} doen not have required property ${key}`);
      }
      result[key] = await this[key].isDisplayed(objData[key]);
    }

    return result;
  }

  async action(objData) {
    await this.waitForRootExist();

    const keys = Object.keys(objData);

    for (const key of keys) {
      await this[key].action(objData[key]);
    }
  }
}

export { BaseFragment };
