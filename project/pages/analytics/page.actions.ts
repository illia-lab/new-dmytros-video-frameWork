import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import {
  IWaitOpts,
  ButtonAction,
  ButtonGetRes,
  ButtonIsDispRes,
  ButtonContent,
  TextAction,
  TextGetRes,
  TextIsDispRes,
  TextContent,
} from '../../../lib';

import { AnalyticsPage } from './page';

const page = new AnalyticsPage();

/** ====================== action ================== */

type TanalyticsHeaderAction = {
  machinesButton?: ButtonAction;
  combineButton?: ButtonAction;
  adminPanelButton?: ButtonAction;
  logOutButton?: ButtonAction;
};
type TanalyticsHeaderActionResult = void;
async function onAnalyticPagePerformOnAnalayticsHeader<Tentry extends TanalyticsHeaderAction>(
  data: Tentry,
): Promise<TanalyticsHeaderActionResult> {
  return await page.action({ analyticsHeader: data });
}

type TanalyticStatsAction = {
  machinesQuantity?: TextAction;
  workVolumeStats?: TextAction;
  priceStats?: TextAction;
};
type TanalyticStatsActionResult = void;
async function onAnalyticPagePerformOnAnalyticsInfoStats<Tentry extends TanalyticStatsAction>(
  data: Tentry,
): Promise<TanalyticStatsActionResult> {
  return await page.action({ analyticStats: data });
}

/** ====================== action ================== */

/** ====================== get ================== */

type TanalyticsHeaderGet = {
  machinesButton?: ButtonAction;
  combineButton?: ButtonAction;
  adminPanelButton?: ButtonAction;
  logOutButton?: ButtonAction;
};
type TanalyticsHeaderGetResult = {
  machinesButton?: ButtonGetRes;
  combineButton?: ButtonGetRes;
  adminPanelButton?: ButtonGetRes;
  logOutButton?: ButtonGetRes;
};
async function onAnalyticPageGetDataFromAnalayticsHeader<Tentry extends TanalyticsHeaderGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TanalyticsHeaderGetResult>> {
  const { analyticsHeader } = await page.get({ analyticsHeader: data });
  return analyticsHeader;
}

type TanalyticStatsGet = {
  machinesQuantity?: TextAction;
  workVolumeStats?: TextAction;
  priceStats?: TextAction;
};
type TanalyticStatsGetResult = {
  machinesQuantity?: TextGetRes;
  workVolumeStats?: TextGetRes;
  priceStats?: TextGetRes;
};
async function onAnalyticPageGetDataFromAnalyticsInfoStats<Tentry extends TanalyticStatsGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TanalyticStatsGetResult>> {
  const { analyticStats } = await page.get({ analyticStats: data });
  return analyticStats;
}

/** ====================== get ================== */

/** ====================== isDisplayed ================== */

type TanalyticsHeaderIsDisplayed = {
  machinesButton?: ButtonAction;
  combineButton?: ButtonAction;
  adminPanelButton?: ButtonAction;
  logOutButton?: ButtonAction;
};
type TanalyticsHeaderIsDisplayedResult = {
  machinesButton?: ButtonIsDispRes;
  combineButton?: ButtonIsDispRes;
  adminPanelButton?: ButtonIsDispRes;
  logOutButton?: ButtonIsDispRes;
};
async function onAnalyticPageGetVisibilityOfAnalayticsHeader<Tentry extends TanalyticsHeaderIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TanalyticsHeaderIsDisplayedResult>> {
  const { analyticsHeader } = await page.isDisplayed({ analyticsHeader: data });
  return analyticsHeader;
}

type TanalyticStatsIsDisplayed = {
  machinesQuantity?: TextAction;
  workVolumeStats?: TextAction;
  priceStats?: TextAction;
};
type TanalyticStatsIsDisplayedResult = {
  machinesQuantity?: TextIsDispRes;
  workVolumeStats?: TextIsDispRes;
  priceStats?: TextIsDispRes;
};
async function onAnalyticPageGetVisibilityOfAnalyticsInfoStats<Tentry extends TanalyticStatsIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TanalyticStatsIsDisplayedResult>> {
  const { analyticStats } = await page.isDisplayed({ analyticStats: data });
  return analyticStats;
}

/** ====================== isDisplayed ================== */

/** ====================== sendKeys ================== */

/** ====================== sendKeys ================== */

/** ====================== waitForVisibilityState ================== */

type TanalyticsHeaderWaitForVisibilityState = {
  machinesButton?: ButtonIsDispRes;
  combineButton?: ButtonIsDispRes;
  adminPanelButton?: ButtonIsDispRes;
  logOutButton?: ButtonIsDispRes;
};
type TanalyticsHeaderWaitForVisibilityStateResult = boolean;
async function onAnalyticPageWaitForVisibilityStateAnalayticsHeader<
  Tentry extends TanalyticsHeaderWaitForVisibilityState,
>(data: Tentry, opts?: IWaitOpts): Promise<TanalyticsHeaderWaitForVisibilityStateResult> {
  return await page.waitForVisibilityState({ analyticsHeader: data }, opts);
}

type TanalyticStatsWaitForVisibilityState = {
  machinesQuantity?: TextIsDispRes;
  workVolumeStats?: TextIsDispRes;
  priceStats?: TextIsDispRes;
};
type TanalyticStatsWaitForVisibilityStateResult = boolean;
async function onAnalyticPageWaitForVisibilityStateAnalyticsInfoStats<
  Tentry extends TanalyticStatsWaitForVisibilityState,
>(data: Tentry, opts?: IWaitOpts): Promise<TanalyticStatsWaitForVisibilityStateResult> {
  return await page.waitForVisibilityState({ analyticStats: data }, opts);
}

/** ====================== waitForVisibilityState ================== */

/** ====================== waitForContentState ================== */

type TanalyticsHeaderWaitForContentState = {
  machinesButton?: ButtonContent;
  combineButton?: ButtonContent;
  adminPanelButton?: ButtonContent;
  logOutButton?: ButtonContent;
};
type TanalyticsHeaderWaitForContentStateResult = boolean;
async function onAnalyticPageWaitForContentStateAnalayticsHeader<Tentry extends TanalyticsHeaderWaitForContentState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TanalyticsHeaderWaitForContentStateResult> {
  return await page.waitForContentState({ analyticsHeader: data }, opts);
}

type TanalyticStatsWaitForContentState = {
  machinesQuantity?: TextContent;
  workVolumeStats?: TextContent;
  priceStats?: TextContent;
};
type TanalyticStatsWaitForContentStateResult = boolean;
async function onAnalyticPageWaitForContentStateAnalyticsInfoStats<Tentry extends TanalyticStatsWaitForContentState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TanalyticStatsWaitForContentStateResult> {
  return await page.waitForContentState({ analyticStats: data }, opts);
}

/** ====================== waitForContentState ================== */

export {
  onAnalyticPagePerformOnAnalayticsHeader,
  onAnalyticPagePerformOnAnalyticsInfoStats,
  onAnalyticPageGetDataFromAnalayticsHeader,
  onAnalyticPageGetDataFromAnalyticsInfoStats,
  onAnalyticPageGetVisibilityOfAnalayticsHeader,
  onAnalyticPageGetVisibilityOfAnalyticsInfoStats,
  onAnalyticPageWaitForVisibilityStateAnalayticsHeader,
  onAnalyticPageWaitForVisibilityStateAnalyticsInfoStats,
  onAnalyticPageWaitForContentStateAnalayticsHeader,
  onAnalyticPageWaitForContentStateAnalyticsInfoStats,
};
