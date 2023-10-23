import { PromodElementsType } from 'promod/built/interface';
import { $$ } from '../_engine';
import { lengthToIndexesArray, toArray, asyncFilter, isUndefined, asyncMap } from 'sat-utils';

export type CollectionActionType<Where = any, Visible = any, Action = any> = {
  _action?: Action;
  _where?: Where;
  _whereNot?: Where;
  _visible?: Visible;
  _indexe?: number | number[];
  _ignoreIndexes?: number | number[];
};

export type CollectionWaitingType<Where = any, Visible = any, Action = any, ToCompare = any> =
  | (CollectionActionType<Where, Visible, Action> & { length?: string | number })
  | ToCompare
  | ToCompare[];

class Collection {
  roots: PromodElementsType;
  id: string;
  CollectionChild;
  constructor(selector: string | PromodElementsType, id, CollectionChild) {
    this.roots = typeof selector === 'string' ? $$(selector) : selector;
    this.id = id;
    this.CollectionChild = CollectionChild;
  }

  /**
   *
   * @info
   * first priority - _indexes
   */

  async getRequiredCollectionItem({ _where, _whereNot, _visible, _indexes, _ignoreIndexes }) {
    _indexes = toArray(_indexes);
    _ignoreIndexes = toArray(_ignoreIndexes);
    const rootsAmount = await this.roots.count();
    let existingIndexes = lengthToIndexesArray(rootsAmount);
    if (_indexes.leght && !_indexes.every((index) => existingIndexes.includes(index))) {
      throw new Error(
        `${this.id} , ${_indexes.join(',')} some index is out of available range ${existingIndexes.join(',')}`,
      );
    } else if (_indexes.length) {
      existingIndexes = _indexes;
    }
    if (_ignoreIndexes.length) {
      existingIndexes = existingIndexes.filter((index) => _ignoreIndexes.includes(index));
    }

    const children = existingIndexes.map(
      (index) => new this.CollectionChild(this.roots.get(index), `${this.id} ${index}`),
    );

    if (!isUndefined(_where) && !isUndefined(_whereNot) && !isUndefined(_visible)) {
      return asyncFilter(children, async (child) => {
        return (
          (await child.isSameContent(_where)) &&
          !(await child.isSameContent(_whereNot)) &&
          (await child.isSameVisibility(_visible))
        );
      });
    }
    if (!isUndefined(_whereNot) && !isUndefined(_where)) {
      return asyncFilter(children, async (child) => {
        return !(await child.isSameContent(_whereNot)) && (await child.isSameContent(_where));
      });
    }
    if (!isUndefined(_whereNot) && !isUndefined(_visible)) {
      return asyncFilter(children, async (child) => {
        return !(await child.isSameContent(_whereNot)) && (await child.isSameVisibility(_visible));
      });
    }
    if (!isUndefined(_visible)) {
      return asyncFilter(children, async (child) => {
        return await child.isSameVisibility(_visible);
      });
    }
    if (!isUndefined(_whereNot)) {
      return asyncFilter(children, async (child) => {
        return !(await child.isSameContent(_whereNot));
      });
    }
    if (!isUndefined(_where) && !isUndefined(_visible)) {
      return asyncFilter(children, async (child) => {
        return !(await child.isSameContent(_where)) && (await child.isSameVisibility(_visible));
      });
    }
    if (!isUndefined(_where)) {
      return asyncFilter(children, async (child) => {
        return await child.isSameContent(_where);
      });
    }
    return children;
  }

  async isSameVisibility(objData) {
    return this.getRequiredCollectionItem(objData || {})
      .then((children) => !!children.length)
      .catch(() => false);
  }

  async isSameContent(objData) {
    return this.getRequiredCollectionItem(objData || {})
      .then((children) => !!children.length)
      .catch(() => false);
  }

  async sendKeys(objData) {
    const children = await this.getRequiredCollectionItem(objData || {});
    if (!children.length) {
      throw new Error(`${this.id} does not have required children}`);
    }

    await children[0].sendKeys(objData?._action || null);
  }
  async action(objData) {
    const children = await this.getRequiredCollectionItem(objData || {});
    if (!children.length) {
      throw new Error(`${this.id} does not have required children}`);
    }

    await children[0].action(objData?._action || null);
  }
  async get(objData) {
    const children = await this.getRequiredCollectionItem(objData || {});

    return asyncMap(children, (child) => {
      return child.get(objData || {});
    });
  }
  async isDisplayed(objData) {
    const children = await this.getRequiredCollectionItem(objData || {});

    return asyncMap(children, (child) => {
      return child.isDisplayed(objData || {});
    });
  }
}

export { Collection };
