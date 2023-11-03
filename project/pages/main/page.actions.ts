import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system'
import {
    IWaitOpts, 
   ButtonAction, ButtonGetRes, ButtonIsDispRes, ButtonContent,
   InputAction, InputGetRes, InputIsDispRes, InputSendKeys,
  } from '../../../lib';

import { MainPage } from './page';

const page = new MainPage();





/** ====================== action ================== */




type TheaderAction = {
 register?: ButtonAction
 login?: ButtonAction
}
type TheaderActionResult = void
async function onMainPagePerformOnHeaderFragment<Tentry extends TheaderAction>(data: Tentry): Promise<TheaderActionResult> {
    return await page.action({ header: data });
  };


type TloginAction = {
 username?: InputAction
 password?: InputAction
 loginButton?: ButtonAction
}
type TloginActionResult = void
async function onMainPagePerformOnLoginFragment<Tentry extends TloginAction>(data: Tentry): Promise<TloginActionResult> {
    return await page.action({ login: data });
  };


type TregistrationAction = {
 username?: InputAction
 name?: InputAction
 password?: InputAction
 registerButton?: ButtonAction
 email?: InputAction
}
type TregistrationActionResult = void
async function onMainPagePerformOnRegistrationFragment<Tentry extends TregistrationAction>(data: Tentry): Promise<TregistrationActionResult> {
    return await page.action({ registration: data });
  };


/** ====================== action ================== */


/** ====================== get ================== */




type TheaderGet = {
 register?: ButtonAction
 login?: ButtonAction
}
type TheaderGetResult = {
 register?: ButtonGetRes
 login?: ButtonGetRes
}
async function onMainPageGetDataFromHeaderFragment<Tentry extends TheaderGet>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TheaderGetResult>> {
    const { header } = await page.get({ header: data });
	return header;
  };


type TloginGet = {
 username?: InputAction
 password?: InputAction
 loginButton?: ButtonAction
}
type TloginGetResult = {
 username?: InputGetRes
 password?: InputGetRes
 loginButton?: ButtonGetRes
}
async function onMainPageGetDataFromLoginFragment<Tentry extends TloginGet>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TloginGetResult>> {
    const { login } = await page.get({ login: data });
	return login;
  };


type TregistrationGet = {
 username?: InputAction
 name?: InputAction
 password?: InputAction
 registerButton?: ButtonAction
 email?: InputAction
}
type TregistrationGetResult = {
 username?: InputGetRes
 name?: InputGetRes
 password?: InputGetRes
 registerButton?: ButtonGetRes
 email?: InputGetRes
}
async function onMainPageGetDataFromRegistrationFragment<Tentry extends TregistrationGet>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TregistrationGetResult>> {
    const { registration } = await page.get({ registration: data });
	return registration;
  };


/** ====================== get ================== */


/** ====================== isDisplayed ================== */




type TheaderIsDisplayed = {
 register?: ButtonAction
 login?: ButtonAction
}
type TheaderIsDisplayedResult = {
 register?: ButtonIsDispRes
 login?: ButtonIsDispRes
}
async function onMainPageGetVisibilityOfHeaderFragment<Tentry extends TheaderIsDisplayed>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TheaderIsDisplayedResult>> {
    const { header } = await page.isDisplayed({ header: data });
	return header;
  };


type TloginIsDisplayed = {
 username?: InputAction
 password?: InputAction
 loginButton?: ButtonAction
}
type TloginIsDisplayedResult = {
 username?: InputIsDispRes
 password?: InputIsDispRes
 loginButton?: ButtonIsDispRes
}
async function onMainPageGetVisibilityOfLoginFragment<Tentry extends TloginIsDisplayed>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TloginIsDisplayedResult>> {
    const { login } = await page.isDisplayed({ login: data });
	return login;
  };


type TregistrationIsDisplayed = {
 username?: InputAction
 name?: InputAction
 password?: InputAction
 registerButton?: ButtonAction
 email?: InputAction
}
type TregistrationIsDisplayedResult = {
 username?: InputIsDispRes
 name?: InputIsDispRes
 password?: InputIsDispRes
 registerButton?: ButtonIsDispRes
 email?: InputIsDispRes
}
async function onMainPageGetVisibilityOfRegistrationFragment<Tentry extends TregistrationIsDisplayed>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TregistrationIsDisplayedResult>> {
    const { registration } = await page.isDisplayed({ registration: data });
	return registration;
  };


/** ====================== isDisplayed ================== */


/** ====================== sendKeys ================== */




type TloginSendKeys = {
 username?: InputSendKeys
 password?: InputSendKeys
}
type TloginSendKeysResult = void
async function onMainPageSetValuesToLoginFragment<Tentry extends TloginSendKeys>(data: Tentry): Promise<TloginSendKeysResult> {
    return await page.sendKeys({ login: data });
  };


type TregistrationSendKeys = {
 username?: InputSendKeys
 name?: InputSendKeys
 password?: InputSendKeys
 email?: InputSendKeys
}
type TregistrationSendKeysResult = void
async function onMainPageSetValuesToRegistrationFragment<Tentry extends TregistrationSendKeys>(data: Tentry): Promise<TregistrationSendKeysResult> {
    return await page.sendKeys({ registration: data });
  };


/** ====================== sendKeys ================== */


/** ====================== waitForVisibilityState ================== */




type TheaderWaitForVisibilityState = {
 register?: ButtonIsDispRes
 login?: ButtonIsDispRes
}
type TheaderWaitForVisibilityStateResult = boolean
async function onMainPageWaitForVisibilityStateHeaderFragment<Tentry extends TheaderWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TheaderWaitForVisibilityStateResult> {
    return await page.waitForVisibilityState({ header: data }, opts);
  };


type TloginWaitForVisibilityState = {
 username?: InputIsDispRes
 password?: InputIsDispRes
 loginButton?: ButtonIsDispRes
}
type TloginWaitForVisibilityStateResult = boolean
async function onMainPageWaitForVisibilityStateLoginFragment<Tentry extends TloginWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TloginWaitForVisibilityStateResult> {
    return await page.waitForVisibilityState({ login: data }, opts);
  };


type TregistrationWaitForVisibilityState = {
 username?: InputIsDispRes
 name?: InputIsDispRes
 password?: InputIsDispRes
 registerButton?: ButtonIsDispRes
 email?: InputIsDispRes
}
type TregistrationWaitForVisibilityStateResult = boolean
async function onMainPageWaitForVisibilityStateRegistrationFragment<Tentry extends TregistrationWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TregistrationWaitForVisibilityStateResult> {
    return await page.waitForVisibilityState({ registration: data }, opts);
  };


/** ====================== waitForVisibilityState ================== */


/** ====================== waitForContentState ================== */




type TheaderWaitForContentState = {
 register?: ButtonContent
 login?: ButtonContent
}
type TheaderWaitForContentStateResult = boolean
async function onMainPageWaitForContentStateHeaderFragment<Tentry extends TheaderWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TheaderWaitForContentStateResult> {
    return await page.waitForContentState({ header: data }, opts);
  };


type TloginWaitForContentState = {
 username?: InputGetRes
 password?: InputGetRes
 loginButton?: ButtonContent
}
type TloginWaitForContentStateResult = boolean
async function onMainPageWaitForContentStateLoginFragment<Tentry extends TloginWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TloginWaitForContentStateResult> {
    return await page.waitForContentState({ login: data }, opts);
  };


type TregistrationWaitForContentState = {
 username?: InputGetRes
 name?: InputGetRes
 password?: InputGetRes
 registerButton?: ButtonContent
 email?: InputGetRes
}
type TregistrationWaitForContentStateResult = boolean
async function onMainPageWaitForContentStateRegistrationFragment<Tentry extends TregistrationWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TregistrationWaitForContentStateResult> {
    return await page.waitForContentState({ registration: data }, opts);
  };


/** ====================== waitForContentState ================== */






export {
    onMainPagePerformOnHeaderFragment,
  onMainPagePerformOnLoginFragment,
  onMainPagePerformOnRegistrationFragment,
  onMainPageGetDataFromHeaderFragment,
  onMainPageGetDataFromLoginFragment,
  onMainPageGetDataFromRegistrationFragment,
  onMainPageGetVisibilityOfHeaderFragment,
  onMainPageGetVisibilityOfLoginFragment,
  onMainPageGetVisibilityOfRegistrationFragment,
  onMainPageSetValuesToLoginFragment,
  onMainPageSetValuesToRegistrationFragment,
  onMainPageWaitForVisibilityStateHeaderFragment,
  onMainPageWaitForVisibilityStateLoginFragment,
  onMainPageWaitForVisibilityStateRegistrationFragment,
  onMainPageWaitForContentStateHeaderFragment,
  onMainPageWaitForContentStateLoginFragment,
  onMainPageWaitForContentStateRegistrationFragment,
  }
