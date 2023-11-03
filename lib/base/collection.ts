import { PromodElementsType } from 'promod/built/interface';
import { $$ } from '../_engine';
import { lengthToIndexesArray, toArray, asyncFilter, isUndefined, asyncMap } from 'sat-utils';

export type CollectionActionType<Where = any, Visible = any, Action = any> = {
  _action?: Action;
  _where?: Where;
  _whereNot?: Where;
  _visible?: Visible;
  _indexes?: number | number[];
  _ignoreIndexes?: number | number[];
};

export type CollectionWaitingType<Where = any, Visible = any, Action = any, ToCompare = any> =
  | (CollectionActionType<Where, Visible, Action> & { length?: string | number })
  | ToCompare
  | ToCompare[];

export type CollectionWaitingContentType<Where = any, Visible = any, Action = any, ToCompare = any> =
  | (CollectionActionType<Where, Visible, Action> & { length?: string | number } & Where)
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
   * @info getRequiredCollectionItem method was created for work with collections of elements
   * @param _where option _where indicates a special description of the element
   * @param _whereNot option _whereNot indicates on element that doesn't fit to our description
   * @param _visible option _visible waiting until we dont see expected result. example: element is visible expected result: true, current result: false
   * @param _indexes option _indexes its Option on which we can search Element by index
   * @param _ignoreIndexes option _ignoreIndexes work as array of indexes that we want to ignore
   */

  async getRequiredCollectionItem({ _where, _whereNot, _visible, _indexes, _ignoreIndexes }) {
    // here we create araay with of indexes
    _indexes = toArray(_indexes);
    // here we create array of ignoreIndexes
    _ignoreIndexes = toArray(_ignoreIndexes);
    // here we count our root elements
    const rootsAmount = await this.roots.count();
    // here we decompose the sun of elements into successive indexes and here we appropriate rootsAmount into exisingIndexes changable
    let existingIndexes = lengthToIndexesArray(rootsAmount);
    // first block if: here we check thath we have some indexes in our array but we dont have in thta array index thta we need to found if its true we throw Error
    if (_indexes.leght && !_indexes.every((index) => existingIndexes.includes(index))) {
      throw new Error(
        `${this.id} , ${_indexes.join(',')} some index is out of available range ${existingIndexes.join(',')}`,
      );
      // second block else if: if we have index that we search in page we appropriate it to existingIndexes changable array
    } else if (_indexes.length) {
      existingIndexes = _indexes;
    }
    // third block if: here we check that we have indexes in our ignoreIndexes list and if its true, we try to find index that we need to found in ignore indexes list with help of filter method
    if (_ignoreIndexes.length) {
      existingIndexes = existingIndexes.filter((index) => _ignoreIndexes.includes(index));
    }
    // here we create an prototype of child class with index of element in first child class param and name of element and index of element of class params
    const children = existingIndexes.map(
      (index) => new this.CollectionChild(this.roots.get(index), `${this.id} ${index}`),
    );
    // fourth block if we use these 3 options we check that our isSameContent exeption will equals true
    if (!isUndefined(_where) && !isUndefined(_whereNot) && !isUndefined(_visible)) {
      return asyncFilter(children, async (child) => {
        return (
          (await child.isSameContent(_where)) &&
          !(await child.isSameContent(_whereNot)) &&
          (await child.isSameVisibility(_visible))
        );
      });
    }
    // fifth block if we use these 2 options we check that our isSameContent exeption will equals true
    if (!isUndefined(_whereNot) && !isUndefined(_where)) {
      return asyncFilter(children, async (child) => {
        return !(await child.isSameContent(_whereNot)) && (await child.isSameContent(_where));
      });
    }
    // sixth block if we use these 2 options we check that our isSameContent and is SameVisibility exeption will equals true
    if (!isUndefined(_whereNot) && !isUndefined(_visible)) {
      return asyncFilter(children, async (child) => {
        return !(await child.isSameContent(_whereNot)) && (await child.isSameVisibility(_visible));
      });
    }
    // seventh block if we use these 1 options we check that our isSameVisibility exeption will equals true
    if (!isUndefined(_visible)) {
      return asyncFilter(children, async (child) => {
        return await child.isSameVisibility(_visible);
      });
    }
    // eighth block if we use these 1 options we check that our isSameContnet exeption will equals true
    if (!isUndefined(_whereNot)) {
      return asyncFilter(children, async (child) => {
        return !(await child.isSameContent(_whereNot));
      });
    }
    // nintht block if we use these 2 options we check that our isSameContent and is SameVisibility exeption will equals true
    if (!isUndefined(_where) && !isUndefined(_visible)) {
      return asyncFilter(children, async (child) => {
        return !(await child.isSameContent(_where)) && (await child.isSameVisibility(_visible));
      });
    }
    // tenth block if we use these 1 options we check that our isSameContnet exeption will equals true
    if (!isUndefined(_where)) {
      return asyncFilter(children, async (child) => {
        return await child.isSameContent(_where);
      });
    }
    return children;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
    if(!children.length) {
      throw new Error(`${this.id} does not have required children}`);
    }
    await children[0].action(objData?._action || null);
  }

  async get(objData) {
    const children = await this.getRequiredCollectionItem(objData || {});

    return asyncMap(children, (child) => {
      return child.get(objData?._action || {});
    });
  }

  async isDisplayed(objData?) {
    const children = await this.getRequiredCollectionItem(objData || {});

    return asyncMap(children, (child) => {
      return child.isDisplayed(objData?._action || {});
    });
  }
}

export { Collection };
