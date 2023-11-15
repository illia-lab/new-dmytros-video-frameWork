import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system'
import {
    IWaitOpts, 
   TextAction, TextGetRes, TextIsDispRes, TextContent,
  } from '../../../lib';

import { CombinesPage } from './page';

const page = new CombinesPage();





/** ====================== action ================== */




type TcombineRowAction = {
 manufacturer?: TextAction
 weight?: TextAction
 height?: TextAction
 class?: TextAction
 price?: TextAction
}
type TcombineRowActionResult = void
async function onCombinesPagePagePerformOnCombineRowFragment<Tentry extends TcombineRowAction>(data: Tentry): Promise<TcombineRowActionResult> {
    return await page.action({ combineRow: data });
  };


/** ====================== action ================== */


/** ====================== get ================== */




type TcombineRowGet = {
 manufacturer?: TextAction
 weight?: TextAction
 height?: TextAction
 class?: TextAction
 price?: TextAction
}
type TcombineRowGetResult = {
 manufacturer?: TextGetRes
 weight?: TextGetRes
 height?: TextGetRes
 class?: TextGetRes
 price?: TextGetRes
}
async function onCombinesPagePageGetDataFromCombineRowFragment<Tentry extends TcombineRowGet>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TcombineRowGetResult>> {
    const { combineRow } = await page.get({ combineRow: data });
	return combineRow;
  };


/** ====================== get ================== */


/** ====================== isDisplayed ================== */




type TcombineRowIsDisplayed = {
 manufacturer?: TextAction
 weight?: TextAction
 height?: TextAction
 class?: TextAction
 price?: TextAction
}
type TcombineRowIsDisplayedResult = {
 manufacturer?: TextIsDispRes
 weight?: TextIsDispRes
 height?: TextIsDispRes
 class?: TextIsDispRes
 price?: TextIsDispRes
}
async function onCombinesPagePageGetVisibilityOfCombineRowFragment<Tentry extends TcombineRowIsDisplayed>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TcombineRowIsDisplayedResult>> {
    const { combineRow } = await page.isDisplayed({ combineRow: data });
	return combineRow;
  };


/** ====================== isDisplayed ================== */


/** ====================== sendKeys ================== */




/** ====================== sendKeys ================== */


/** ====================== waitForVisibilityState ================== */




type TcombineRowWaitForVisibilityState = {
 manufacturer?: TextIsDispRes
 weight?: TextIsDispRes
 height?: TextIsDispRes
 class?: TextIsDispRes
 price?: TextIsDispRes
}
type TcombineRowWaitForVisibilityStateResult = boolean
async function onCombinesPagePageWaitForVisibilityStateCombineRowFragment<Tentry extends TcombineRowWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TcombineRowWaitForVisibilityStateResult> {
    return await page.waitForVisibilityState({ combineRow: data }, opts);
  };


/** ====================== waitForVisibilityState ================== */


/** ====================== waitForContentState ================== */




type TcombineRowWaitForContentState = {
 manufacturer?: TextContent
 weight?: TextContent
 height?: TextContent
 class?: TextContent
 price?: TextContent
}
type TcombineRowWaitForContentStateResult = boolean
async function onCombinesPagePageWaitForContentStateCombineRowFragment<Tentry extends TcombineRowWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TcombineRowWaitForContentStateResult> {
    return await page.waitForContentState({ combineRow: data }, opts);
  };


/** ====================== waitForContentState ================== */






export {
    onCombinesPagePagePerformOnCombineRowFragment,
  onCombinesPagePageGetDataFromCombineRowFragment,
  onCombinesPagePageGetVisibilityOfCombineRowFragment,
  onCombinesPagePageWaitForVisibilityStateCombineRowFragment,
  onCombinesPagePageWaitForContentStateCombineRowFragment,
  }
