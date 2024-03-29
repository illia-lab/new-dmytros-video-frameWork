import { BaseLayer } from './base.layer';
import { Collection } from './collection';
import { getCollectionRecomposedData } from 'promod-system';
import { waitForCondition, compareToPattern, TCompareOpts } from 'sat-utils';

export type IWaitOpts = TCompareOpts;

class BasePage extends BaseLayer {
  root;
  id;
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
    await this.waitForRootExist();

    const keys = Object.keys(objData);

    for (const key of keys) {
      await this[key].sendKeys(objData[key]);
    }
  }

  async get(objData): Promise<any> {
    await this.waitForRootExist();

    const keys = Object.keys(objData); // [масив ключів аргумента,який ми очікуємо як об'єкт]
    const result = {};

    for (const key of keys) {
      if (!this[key]) {
        throw new Error(`${this.id} doen not have required property ${key}`);
      }
      result[key] = await this[key].get(objData[key]);
    }

    return result;
  }

  async isDisplayed(objData): Promise<any> {
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

  async waitForVisibilityState(data, opts?: TCompareOpts): Promise<any> {
    return await this.executeWaiting(data, opts, 'isDisplayed');
  }
  async waitForContentState(data, opts?: TCompareOpts): Promise<any> {
    return await this.executeWaiting(data, opts, 'get');
  }

  private async executeWaiting(expectedData, opts: TCompareOpts = {}, callMethod: 'get' | 'isDisplayed') {
    const collectionActionsOpts = ['_where', '_whereNot', '_visible', '_indexes', '_ignoreIndexes', '_action'];

    const dataState = getCollectionRecomposedData(JSON.parse(JSON.stringify(expectedData)), this);
    let errMessage;

    return await waitForCondition(
      async () => {
        const callResult = await this[callMethod](dataState);

        const { result, message } = compareToPattern(callResult, expectedData, {
          ...opts,
          ignoreProperties: collectionActionsOpts,
        });

        errMessage = message;

        return result;
      },
      {
        timeout: 5_000,
        interval: 1000,
        message: (time, error = 'not exists') => `waiting time: ${time}, internal error: ${error.stack} ${errMessage}`,
      },
    );
  }
}
export { BasePage };
