import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system'
import {
    IWaitOpts, CollectionActionType,CollectionWaitingType,
   ButtonAction, ButtonGetRes, ButtonIsDispRes,
  } from '../../../lib';

import { TablePage } from './page';

const page = new TablePage();




  type TonTablePageGetRandomDataAndFieldValuesFromMachineRowEntryFields =  'manufacturer' | 'workWolume' | 'length' | 'width' | 'weight' | 'power' | 'price'
  type TonTablePageGetRandomDataAndFieldValuesFromMachineRowEntry = Omit<CollectionActionType<{
 manufacturer?: ButtonGetRes
 workWolume?: ButtonGetRes
 length?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
},{
 manufacturer?: ButtonIsDispRes
 workWolume?: ButtonIsDispRes
 length?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
}>, '_action'>

  async function onTablePageGetRandomFieldValueFromMachineRow(_field: TonTablePageGetRandomDataAndFieldValuesFromMachineRowEntryFields,  descriptions: TonTablePageGetRandomDataAndFieldValuesFromMachineRowEntry = {}): Promise<string> {

    const result = await page.get({machineRow: {...descriptions, _action: { [_field]: null }}});

    const flatResult = result.machineRow

    return getRandomArrayItem(
      flatResult
        .map(item => item[_field]),
    );
  }

  async function onTablePageGetSeveralRandomFieldValuesFromMachineRow(_field: TonTablePageGetRandomDataAndFieldValuesFromMachineRowEntryFields = 'manufacturer', quantity: number = 2, descriptions: TonTablePageGetRandomDataAndFieldValuesFromMachineRowEntry = {}): Promise<string[]> {

    const result = await page.get({machineRow: {...descriptions, _action: { [_field]: null }}});

    const flatResult = result.machineRow

    return getRandomArrayItem(
      flatResult
        .map(item => item[_field]),
      quantity,
    );
  }

    async function onTablePageGetRandomDataFromMachineRow<T extends ReadonlyArray<TonTablePageGetRandomDataAndFieldValuesFromMachineRowEntryFields>>(_fields: T, descriptions: TonTablePageGetRandomDataAndFieldValuesFromMachineRowEntry = {}): Promise<TobjectFromStringArray<T>> {

      const result = await page.get({machineRow: {...descriptions, _action: _fields.reduce((act, k) => {
      act[k] = null;

      return act
    }, {})}});

      const flatResult = result.machineRow
  return getRandomArrayItem(
    flatResult
      .map(item => _fields.reduce((requredData, k ) => {
        requredData[k] = item[k]

        return requredData
      }, {} as TobjectFromStringArray<T>))
  );
};



/** ====================== action ================== */




type TheaderAction = {
 analytics?: ButtonAction
 combines?: ButtonAction
 adminPanel?: ButtonAction
 LogOut?: ButtonAction
}
type TheaderActionResult = void
async function onTablePagePerformOnTablesHeader<Tentry extends TheaderAction>(data: Tentry): Promise<TheaderActionResult> {
    return await page.action({ header: data });
  };


type TmachineRowAction = CollectionActionType<{
 manufacturer?: ButtonGetRes
 workWolume?: ButtonGetRes
 length?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
},{
 manufacturer?: ButtonIsDispRes
 workWolume?: ButtonIsDispRes
 length?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
},{
 manufacturer?: ButtonAction
 workWolume?: ButtonAction
 length?: ButtonAction
 width?: ButtonAction
 weight?: ButtonAction
 power?: ButtonAction
 price?: ButtonAction
}>
type TmachineRowActionResult = void
async function onTablePagePerformOnMachinesList<Tentry extends TmachineRowAction>(data: Tentry): Promise<TmachineRowActionResult> {
    return await page.action({ machineRow: data });
  };


/** ====================== action ================== */


/** ====================== get ================== */




type TheaderGet = {
 analytics?: ButtonAction
 combines?: ButtonAction
 adminPanel?: ButtonAction
 LogOut?: ButtonAction
}
type TheaderGetResult = {
 analytics?: ButtonGetRes
 combines?: ButtonGetRes
 adminPanel?: ButtonGetRes
 LogOut?: ButtonGetRes
}
async function onTablePageGetDataFromTablesHeader<Tentry extends TheaderGet>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TheaderGetResult>> {
    const { header } = await page.get({ header: data });
	return header;
  };


type TmachineRowGet = CollectionActionType<{
 manufacturer?: ButtonGetRes
 workWolume?: ButtonGetRes
 length?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
},{
 manufacturer?: ButtonIsDispRes
 workWolume?: ButtonIsDispRes
 length?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
},{
 manufacturer?: ButtonAction
 workWolume?: ButtonAction
 length?: ButtonAction
 width?: ButtonAction
 weight?: ButtonAction
 power?: ButtonAction
 price?: ButtonAction
}>
type TmachineRowGetResult = {
 manufacturer?: ButtonGetRes
 workWolume?: ButtonGetRes
 length?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
}[]
async function onTablePageGetDataFromMachinesList<Tentry extends TmachineRowGet>(data: Tentry): Promise<TmachineRowGetResult> {
    const { machineRow } = await page.get({ machineRow: data });
	return machineRow;
  };


/** ====================== get ================== */


/** ====================== isDisplayed ================== */




type TheaderIsDisplayed = {
 analytics?: ButtonAction
 combines?: ButtonAction
 adminPanel?: ButtonAction
 LogOut?: ButtonAction
}
type TheaderIsDisplayedResult = {
 analytics?: ButtonIsDispRes
 combines?: ButtonIsDispRes
 adminPanel?: ButtonIsDispRes
 LogOut?: ButtonIsDispRes
}
async function onTablePageGetVisibilityOfTablesHeader<Tentry extends TheaderIsDisplayed>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TheaderIsDisplayedResult>> {
    const { header } = await page.isDisplayed({ header: data });
	return header;
  };


type TmachineRowIsDisplayed = CollectionActionType<{
 manufacturer?: ButtonGetRes
 workWolume?: ButtonGetRes
 length?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
},{
 manufacturer?: ButtonIsDispRes
 workWolume?: ButtonIsDispRes
 length?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
},{
 manufacturer?: ButtonAction
 workWolume?: ButtonAction
 length?: ButtonAction
 width?: ButtonAction
 weight?: ButtonAction
 power?: ButtonAction
 price?: ButtonAction
}>
type TmachineRowIsDisplayedResult = {
 manufacturer?: ButtonIsDispRes
 workWolume?: ButtonIsDispRes
 length?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
}[]
async function onTablePageGetVisibilityOfMachinesList<Tentry extends TmachineRowIsDisplayed>(data: Tentry): Promise<TmachineRowIsDisplayedResult> {
    const { machineRow } = await page.isDisplayed({ machineRow: data });
	return machineRow;
  };


/** ====================== isDisplayed ================== */


/** ====================== sendKeys ================== */




/** ====================== sendKeys ================== */


/** ====================== waitForVisibilityState ================== */




type TheaderWaitForVisibilityState = {
 analytics?: ButtonIsDispRes
 combines?: ButtonIsDispRes
 adminPanel?: ButtonIsDispRes
 LogOut?: ButtonIsDispRes
}
type TheaderWaitForVisibilityStateResult = boolean
async function onTablePageWaitForVisibilityStateTablesHeader<Tentry extends TheaderWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TheaderWaitForVisibilityStateResult> {
    return await page.waitForRootVisibilityState({ header: data }, opts);
  };


type TmachineRowWaitForVisibilityState = CollectionWaitingType<{
 manufacturer?: ButtonGetRes
 workWolume?: ButtonGetRes
 length?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
},{
 manufacturer?: ButtonIsDispRes
 workWolume?: ButtonIsDispRes
 length?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
},{
 manufacturer?: ButtonAction
 workWolume?: ButtonAction
 length?: ButtonAction
 width?: ButtonAction
 weight?: ButtonAction
 power?: ButtonAction
 price?: ButtonAction
},{
 manufacturer?: ButtonIsDispRes
 workWolume?: ButtonIsDispRes
 length?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
}>
type TmachineRowWaitForVisibilityStateResult = boolean
async function onTablePageWaitForVisibilityStateMachinesList<Tentry extends TmachineRowWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TmachineRowWaitForVisibilityStateResult> {
    return await page.waitForRootVisibilityState({ machineRow: data }, opts);
  };


/** ====================== waitForVisibilityState ================== */


/** ====================== waitForContentState ================== */




type TheaderWaitForContentState = {
 analytics?: ButtonGetRes
 combines?: ButtonGetRes
 adminPanel?: ButtonGetRes
 LogOut?: ButtonGetRes
}
type TheaderWaitForContentStateResult = boolean
async function onTablePageWaitForContentStateTablesHeader<Tentry extends TheaderWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TheaderWaitForContentStateResult> {
    return await page.waitForRootContentState({ header: data }, opts);
  };


type TmachineRowWaitForContentState = CollectionWaitingType<{
 manufacturer?: ButtonGetRes
 workWolume?: ButtonGetRes
 length?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
},{
 manufacturer?: ButtonIsDispRes
 workWolume?: ButtonIsDispRes
 length?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
},{
 manufacturer?: ButtonAction
 workWolume?: ButtonAction
 length?: ButtonAction
 width?: ButtonAction
 weight?: ButtonAction
 power?: ButtonAction
 price?: ButtonAction
},{
 manufacturer?: ButtonGetRes
 workWolume?: ButtonGetRes
 length?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
}>
type TmachineRowWaitForContentStateResult = boolean
async function onTablePageWaitForContentStateMachinesList<Tentry extends TmachineRowWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TmachineRowWaitForContentStateResult> {
    return await page.waitForRootContentState({ machineRow: data }, opts);
  };


/** ====================== waitForContentState ================== */



  type TonTablePageGetCollectionFromMachineRowEntry = Omit<CollectionActionType<{
 manufacturer?: ButtonGetRes
 workWolume?: ButtonGetRes
 length?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
},{
 manufacturer?: ButtonIsDispRes
 workWolume?: ButtonIsDispRes
 length?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
}>, '_action'>
  type TonTablePageGetCollectionFromMachineRow = {
 manufacturer?: ButtonGetRes
 workWolume?: ButtonGetRes
 length?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
}
  async function onTablePageGetCollectionFromMachineRow({...descriptions}: TonTablePageGetCollectionFromMachineRowEntry = {}): Promise<TonTablePageGetCollectionFromMachineRow[]> {
    const result = await page.get({machineRow: {...descriptions, _action: null}});

    return result.machineRow
  }




export {
    onTablePageGetRandomFieldValueFromMachineRow,
  onTablePageGetSeveralRandomFieldValuesFromMachineRow,
  onTablePageGetRandomDataFromMachineRow,
  onTablePagePerformOnTablesHeader,
  onTablePagePerformOnMachinesList,
  onTablePageGetDataFromTablesHeader,
  onTablePageGetDataFromMachinesList,
  onTablePageGetVisibilityOfTablesHeader,
  onTablePageGetVisibilityOfMachinesList,
  onTablePageWaitForVisibilityStateTablesHeader,
  onTablePageWaitForVisibilityStateMachinesList,
  onTablePageWaitForContentStateTablesHeader,
  onTablePageWaitForContentStateMachinesList,
  onTablePageGetCollectionFromMachineRow,
  }
