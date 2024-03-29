import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system'
import {
    IWaitOpts, CollectionActionType,CollectionWaitingType,CollectionWaitingContentType,
   ButtonAction, ButtonGetRes, ButtonIsDispRes, ButtonContent,
   InputAction, InputGetRes, InputIsDispRes, InputSendKeys,
  } from '../../../lib';

import { TablePage } from './page';

const page = new TablePage();




  type TonTablePageGetRandomDataAndFieldValuesFromMachinesListEntryFields =  'manufacturer' | 'workVolume' | 'machineLength' | 'width' | 'weight' | 'power' | 'price' 
  type TonTablePageGetRandomDataAndFieldValuesFromMachinesListEntry = Omit<CollectionActionType<{
 manufacturer?: ButtonContent
 workVolume?: ButtonContent
 machineLength?: ButtonContent
 width?: ButtonContent
 weight?: ButtonContent
 power?: ButtonContent
 price?: ButtonContent
},{
 manufacturer?: ButtonIsDispRes
 workVolume?: ButtonIsDispRes
 machineLength?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
}>, '_action'>

  async function onTablePageGetRandomFieldValueFromMachinesList(_field: TonTablePageGetRandomDataAndFieldValuesFromMachinesListEntryFields,  descriptions: TonTablePageGetRandomDataAndFieldValuesFromMachinesListEntry = {}): Promise<string> {
    
    const result = await page.get({machinesList: {...descriptions, _action: { [_field]: null }}});

    const flatResult = result.machinesList

    return getRandomArrayItem(
      flatResult
        .map(item => item[_field]),
    );
  }

  async function onTablePageGetSeveralRandomFieldValuesFromMachinesList(_field: TonTablePageGetRandomDataAndFieldValuesFromMachinesListEntryFields = 'manufacturer', quantity: number = 2, descriptions: TonTablePageGetRandomDataAndFieldValuesFromMachinesListEntry = {}): Promise<string[]> {
    
    const result = await page.get({machinesList: {...descriptions, _action: { [_field]: null }}});

    const flatResult = result.machinesList

    return getRandomArrayItem(
      flatResult
        .map(item => item[_field]),
      quantity,
    );
  }
  
    async function onTablePageGetRandomDataFromMachinesList<T extends ReadonlyArray<TonTablePageGetRandomDataAndFieldValuesFromMachinesListEntryFields>>(_fields: T, descriptions: TonTablePageGetRandomDataAndFieldValuesFromMachinesListEntry = {}): Promise<TobjectFromStringArray<T>> {
      
      const result = await page.get({machinesList: {...descriptions, _action: _fields.reduce((act, k) => {
      act[k] = null;

      return act
    }, {})}});

      const flatResult = result.machinesList
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


type TmachinesListAction = CollectionActionType<{
 manufacturer?: ButtonContent
 workVolume?: ButtonContent
 machineLength?: ButtonContent
 width?: ButtonContent
 weight?: ButtonContent
 power?: ButtonContent
 price?: ButtonContent
},{
 manufacturer?: ButtonIsDispRes
 workVolume?: ButtonIsDispRes
 machineLength?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
},{
 manufacturer?: ButtonAction
 workVolume?: ButtonAction
 machineLength?: ButtonAction
 width?: ButtonAction
 weight?: ButtonAction
 power?: ButtonAction
 price?: ButtonAction
}>
type TmachinesListActionResult = void
async function onTablePagePerformOnMachinesList<Tentry extends TmachinesListAction>(data: Tentry): Promise<TmachinesListActionResult> {
    return await page.action({ machinesList: data });
  };


type TfilterFragmentAction = {
 filterManufacturer?: InputAction
 filterWorkVolume?: InputAction
 filterPrice?: InputAction
 filterButton?: ButtonAction
}
type TfilterFragmentActionResult = void
async function onTablePagePerformOnFilterFragment<Tentry extends TfilterFragmentAction>(data: Tentry): Promise<TfilterFragmentActionResult> {
    return await page.action({ filterFragment: data });
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


type TmachinesListGet = CollectionActionType<{
 manufacturer?: ButtonContent
 workVolume?: ButtonContent
 machineLength?: ButtonContent
 width?: ButtonContent
 weight?: ButtonContent
 power?: ButtonContent
 price?: ButtonContent
},{
 manufacturer?: ButtonIsDispRes
 workVolume?: ButtonIsDispRes
 machineLength?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
},{
 manufacturer?: ButtonAction
 workVolume?: ButtonAction
 machineLength?: ButtonAction
 width?: ButtonAction
 weight?: ButtonAction
 power?: ButtonAction
 price?: ButtonAction
}>
type TmachinesListGetResult = {
 manufacturer?: ButtonGetRes
 workVolume?: ButtonGetRes
 machineLength?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
}[]
async function onTablePageGetDataFromMachinesList<Tentry extends TmachinesListGet>(data: Tentry): Promise<TmachinesListGetResult> {
    const { machinesList } = await page.get({ machinesList: data });
	return machinesList;
  };


type TfilterFragmentGet = {
 filterManufacturer?: InputAction
 filterWorkVolume?: InputAction
 filterPrice?: InputAction
 filterButton?: ButtonAction
}
type TfilterFragmentGetResult = {
 filterManufacturer?: InputGetRes
 filterWorkVolume?: InputGetRes
 filterPrice?: InputGetRes
 filterButton?: ButtonGetRes
}
async function onTablePageGetDataFromFilterFragment<Tentry extends TfilterFragmentGet>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TfilterFragmentGetResult>> {
    const { filterFragment } = await page.get({ filterFragment: data });
	return filterFragment;
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


type TmachinesListIsDisplayed = CollectionActionType<{
 manufacturer?: ButtonContent
 workVolume?: ButtonContent
 machineLength?: ButtonContent
 width?: ButtonContent
 weight?: ButtonContent
 power?: ButtonContent
 price?: ButtonContent
},{
 manufacturer?: ButtonIsDispRes
 workVolume?: ButtonIsDispRes
 machineLength?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
},{
 manufacturer?: ButtonAction
 workVolume?: ButtonAction
 machineLength?: ButtonAction
 width?: ButtonAction
 weight?: ButtonAction
 power?: ButtonAction
 price?: ButtonAction
}>
type TmachinesListIsDisplayedResult = {
 manufacturer?: ButtonIsDispRes
 workVolume?: ButtonIsDispRes
 machineLength?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
}[]
async function onTablePageGetVisibilityOfMachinesList<Tentry extends TmachinesListIsDisplayed>(data: Tentry): Promise<TmachinesListIsDisplayedResult> {
    const { machinesList } = await page.isDisplayed({ machinesList: data });
	return machinesList;
  };


type TfilterFragmentIsDisplayed = {
 filterManufacturer?: InputAction
 filterWorkVolume?: InputAction
 filterPrice?: InputAction
 filterButton?: ButtonAction
}
type TfilterFragmentIsDisplayedResult = {
 filterManufacturer?: InputIsDispRes
 filterWorkVolume?: InputIsDispRes
 filterPrice?: InputIsDispRes
 filterButton?: ButtonIsDispRes
}
async function onTablePageGetVisibilityOfFilterFragment<Tentry extends TfilterFragmentIsDisplayed>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TfilterFragmentIsDisplayedResult>> {
    const { filterFragment } = await page.isDisplayed({ filterFragment: data });
	return filterFragment;
  };


/** ====================== isDisplayed ================== */


/** ====================== sendKeys ================== */




type TfilterFragmentSendKeys = {
 filterManufacturer?: InputSendKeys
 filterWorkVolume?: InputSendKeys
 filterPrice?: InputSendKeys
}
type TfilterFragmentSendKeysResult = void
async function onTablePageSetValuesToFilterFragment<Tentry extends TfilterFragmentSendKeys>(data: Tentry): Promise<TfilterFragmentSendKeysResult> {
    return await page.sendKeys({ filterFragment: data });
  };


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
    return await page.waitForVisibilityState({ header: data }, opts);
  };


type TmachinesListWaitForVisibilityState = CollectionWaitingType<{
 manufacturer?: ButtonContent
 workVolume?: ButtonContent
 machineLength?: ButtonContent
 width?: ButtonContent
 weight?: ButtonContent
 power?: ButtonContent
 price?: ButtonContent
},{
 manufacturer?: ButtonIsDispRes
 workVolume?: ButtonIsDispRes
 machineLength?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
},{
 manufacturer?: ButtonAction
 workVolume?: ButtonAction
 machineLength?: ButtonAction
 width?: ButtonAction
 weight?: ButtonAction
 power?: ButtonAction
 price?: ButtonAction
},{
 manufacturer?: ButtonIsDispRes
 workVolume?: ButtonIsDispRes
 machineLength?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
}>
type TmachinesListWaitForVisibilityStateResult = boolean
async function onTablePageWaitForVisibilityStateMachinesList<Tentry extends TmachinesListWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TmachinesListWaitForVisibilityStateResult> {
    return await page.waitForVisibilityState({ machinesList: data }, opts);
  };


type TfilterFragmentWaitForVisibilityState = {
 filterManufacturer?: InputIsDispRes
 filterWorkVolume?: InputIsDispRes
 filterPrice?: InputIsDispRes
 filterButton?: ButtonIsDispRes
}
type TfilterFragmentWaitForVisibilityStateResult = boolean
async function onTablePageWaitForVisibilityStateFilterFragment<Tentry extends TfilterFragmentWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TfilterFragmentWaitForVisibilityStateResult> {
    return await page.waitForVisibilityState({ filterFragment: data }, opts);
  };


/** ====================== waitForVisibilityState ================== */


/** ====================== waitForContentState ================== */




type TheaderWaitForContentState = {
 analytics?: ButtonContent
 combines?: ButtonContent
 adminPanel?: ButtonContent
 LogOut?: ButtonContent
}
type TheaderWaitForContentStateResult = boolean
async function onTablePageWaitForContentStateTablesHeader<Tentry extends TheaderWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TheaderWaitForContentStateResult> {
    return await page.waitForContentState({ header: data }, opts);
  };


type TmachinesListWaitForContentState = CollectionWaitingContentType<{
 manufacturer?: ButtonContent
 workVolume?: ButtonContent
 machineLength?: ButtonContent
 width?: ButtonContent
 weight?: ButtonContent
 power?: ButtonContent
 price?: ButtonContent
},{
 manufacturer?: ButtonIsDispRes
 workVolume?: ButtonIsDispRes
 machineLength?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
},{
 manufacturer?: ButtonAction
 workVolume?: ButtonAction
 machineLength?: ButtonAction
 width?: ButtonAction
 weight?: ButtonAction
 power?: ButtonAction
 price?: ButtonAction
},{
 manufacturer?: ButtonGetRes
 workVolume?: ButtonGetRes
 machineLength?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
}>
type TmachinesListWaitForContentStateResult = boolean
async function onTablePageWaitForContentStateMachinesList<Tentry extends TmachinesListWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TmachinesListWaitForContentStateResult> {
    return await page.waitForContentState({ machinesList: data }, opts);
  };


type TfilterFragmentWaitForContentState = {
 filterManufacturer?: InputGetRes
 filterWorkVolume?: InputGetRes
 filterPrice?: InputGetRes
 filterButton?: ButtonContent
}
type TfilterFragmentWaitForContentStateResult = boolean
async function onTablePageWaitForContentStateFilterFragment<Tentry extends TfilterFragmentWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TfilterFragmentWaitForContentStateResult> {
    return await page.waitForContentState({ filterFragment: data }, opts);
  };


/** ====================== waitForContentState ================== */



  type TonTablePageGetCollectionFromMachinesListEntry = Omit<CollectionActionType<{
 manufacturer?: ButtonContent
 workVolume?: ButtonContent
 machineLength?: ButtonContent
 width?: ButtonContent
 weight?: ButtonContent
 power?: ButtonContent
 price?: ButtonContent
},{
 manufacturer?: ButtonIsDispRes
 workVolume?: ButtonIsDispRes
 machineLength?: ButtonIsDispRes
 width?: ButtonIsDispRes
 weight?: ButtonIsDispRes
 power?: ButtonIsDispRes
 price?: ButtonIsDispRes
}>, '_action'>
  type TonTablePageGetCollectionFromMachinesList = {
 manufacturer?: ButtonGetRes
 workVolume?: ButtonGetRes
 machineLength?: ButtonGetRes
 width?: ButtonGetRes
 weight?: ButtonGetRes
 power?: ButtonGetRes
 price?: ButtonGetRes
}
  async function onTablePageGetCollectionFromMachinesList({...descriptions}: TonTablePageGetCollectionFromMachinesListEntry = {}): Promise<TonTablePageGetCollectionFromMachinesList[]> {
    const result = await page.get({machinesList: {...descriptions, _action: null}});

    return result.machinesList
  }




export {
    onTablePageGetRandomFieldValueFromMachinesList,
  onTablePageGetSeveralRandomFieldValuesFromMachinesList,
  onTablePageGetRandomDataFromMachinesList,
  onTablePagePerformOnTablesHeader,
  onTablePagePerformOnMachinesList,
  onTablePagePerformOnFilterFragment,
  onTablePageGetDataFromTablesHeader,
  onTablePageGetDataFromMachinesList,
  onTablePageGetDataFromFilterFragment,
  onTablePageGetVisibilityOfTablesHeader,
  onTablePageGetVisibilityOfMachinesList,
  onTablePageGetVisibilityOfFilterFragment,
  onTablePageSetValuesToFilterFragment,
  onTablePageWaitForVisibilityStateTablesHeader,
  onTablePageWaitForVisibilityStateMachinesList,
  onTablePageWaitForVisibilityStateFilterFragment,
  onTablePageWaitForContentStateTablesHeader,
  onTablePageWaitForContentStateMachinesList,
  onTablePageWaitForContentStateFilterFragment,
  onTablePageGetCollectionFromMachinesList,
  }
