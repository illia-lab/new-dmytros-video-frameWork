import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import {
  IWaitOpts,
  ButtonAction,
  ButtonGetRes,
  ButtonIsDispRes,
  InputAction,
  InputGetRes,
  InputIsDispRes,
  InputSendKeys,
} from '../../../lib';

import { MainPage } from './page';

const page = new MainPage();

/** ====================== action ================== */

type TheaderAction = {
  register?: ButtonAction;
  login?: ButtonAction;
};
type TheaderActionResult = void;
async function onMainPagePerformOnHeaderFragment<Tentry extends TheaderAction>(
  data: Tentry,
): Promise<TheaderActionResult> {
  return await page.action({ header: data });
}

type TloginAction = {
  username?: InputAction;
  password?: InputAction;
  loginButton?: ButtonAction;
};
type TloginActionResult = void;
async function onMainPagePerformOnLoginFragment<Tentry extends TloginAction>(
  data: Tentry,
): Promise<TloginActionResult> {
  return await page.action({ login: data });
}

/** ====================== action ================== */

/** ====================== get ================== */

type TheaderGet = {
  register?: ButtonAction;
  login?: ButtonAction;
};
type TheaderGetResult = {
  register?: ButtonGetRes;
  login?: ButtonGetRes;
};
async function onMainPageGetDataFromHeaderFragment<Tentry extends TheaderGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderGetResult>> {
  const { header } = await page.get({ header: data });
  return header;
}

type TloginGet = {
  username?: InputAction;
  password?: InputAction;
  loginButton?: ButtonAction;
};
type TloginGetResult = {
  username?: InputGetRes;
  password?: InputGetRes;
  loginButton?: ButtonGetRes;
};
async function onMainPageGetDataFromLoginFragment<Tentry extends TloginGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TloginGetResult>> {
  const { login } = await page.get({ login: data });
  return login;
}

/** ====================== get ================== */

/** ====================== isDisplayed ================== */

type TheaderIsDisplayed = {
  register?: ButtonAction;
  login?: ButtonAction;
};
type TheaderIsDisplayedResult = {
  register?: ButtonIsDispRes;
  login?: ButtonIsDispRes;
};
async function onMainPageGetVisibilityOfHeaderFragment<Tentry extends TheaderIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderIsDisplayedResult>> {
  const { header } = await page.isDisplayed({ header: data });
  return header;
}

type TloginIsDisplayed = {
  username?: InputAction;
  password?: InputAction;
  loginButton?: ButtonAction;
};
type TloginIsDisplayedResult = {
  username?: InputIsDispRes;
  password?: InputIsDispRes;
  loginButton?: ButtonIsDispRes;
};
async function onMainPageGetVisibilityOfLoginFragment<Tentry extends TloginIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TloginIsDisplayedResult>> {
  const { login } = await page.isDisplayed({ login: data });
  return login;
}

/** ====================== isDisplayed ================== */

/** ====================== sendKeys ================== */

type TloginSendKeys = {
  username?: InputSendKeys;
  password?: InputSendKeys;
};
type TloginSendKeysResult = void;
async function onMainPageSetValuesToLoginFragment<Tentry extends TloginSendKeys>(
  data: Tentry,
): Promise<TloginSendKeysResult> {
  return await page.sendKeys({ login: data });
}

/** ====================== sendKeys ================== */

/** ====================== waitForVisibilityState ================== */

type TheaderWaitForVisibilityState = {
  register?: ButtonIsDispRes;
  login?: ButtonIsDispRes;
};
type TheaderWaitForVisibilityStateResult = boolean;
async function onMainPageWaitForVisibilityStateHeaderFragment<Tentry extends TheaderWaitForVisibilityState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TheaderWaitForVisibilityStateResult> {
  return await page.waitForRootVisibilityState({ header: data }, opts);
}

type TloginWaitForVisibilityState = {
  username?: InputIsDispRes;
  password?: InputIsDispRes;
  loginButton?: ButtonIsDispRes;
};
type TloginWaitForVisibilityStateResult = boolean;
async function onMainPageWaitForVisibilityStateLoginFragment<Tentry extends TloginWaitForVisibilityState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TloginWaitForVisibilityStateResult> {
  return await page.waitForRootVisibilityState({ login: data }, opts);
}

/** ====================== waitForVisibilityState ================== */

/** ====================== waitForContentState ================== */

type TheaderWaitForContentState = {
  register?: ButtonGetRes;
  login?: ButtonGetRes;
};
type TheaderWaitForContentStateResult = boolean;
async function onMainPageWaitForContentStateHeaderFragment<Tentry extends TheaderWaitForContentState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TheaderWaitForContentStateResult> {
  return await page.waitForRootContentState({ header: data }, opts);
}

type TloginWaitForContentState = {
  username?: InputGetRes;
  password?: InputGetRes;
  loginButton?: ButtonGetRes;
};
type TloginWaitForContentStateResult = boolean;
async function onMainPageWaitForContentStateLoginFragment<Tentry extends TloginWaitForContentState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TloginWaitForContentStateResult> {
  return await page.waitForRootContentState({ login: data }, opts);
}

/** ====================== waitForContentState ================== */

export {
  onMainPagePerformOnHeaderFragment,
  onMainPagePerformOnLoginFragment,
  onMainPageGetDataFromHeaderFragment,
  onMainPageGetDataFromLoginFragment,
  onMainPageGetVisibilityOfHeaderFragment,
  onMainPageGetVisibilityOfLoginFragment,
  onMainPageSetValuesToLoginFragment,
  onMainPageWaitForVisibilityStateHeaderFragment,
  onMainPageWaitForVisibilityStateLoginFragment,
  onMainPageWaitForContentStateHeaderFragment,
  onMainPageWaitForContentStateLoginFragment,
};
