import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system'
import {
    IWaitOpts, CollectionActionType,CollectionWaitingType,CollectionWaitingContentType,
   ButtonAction, ButtonGetRes, ButtonIsDispRes, ButtonContent,
   TextAction, TextGetRes, TextIsDispRes, TextContent,
   InputAction, InputGetRes, InputIsDispRes, InputSendKeys,
   CheckBoxAction, CheckBoxGetRes, CheckBoxIsDispRes, CheckBoxContent,
  } from '../../../lib';

import { AdminPage } from './page';

const page = new AdminPage();




  type TonAdminPageGetRandomDataAndFieldValuesFromUserListEntryFields =  'usernameItem' | 'detailsButton' 
  type TonAdminPageGetRandomDataAndFieldValuesFromUserListEntry = Omit<CollectionActionType<{
 usernameItem?: TextContent
 detailsButton?: ButtonContent
},{
 usernameItem?: TextIsDispRes
 detailsButton?: ButtonIsDispRes
}>, '_action'>

  async function onAdminPageGetRandomFieldValueFromUserList(_field: TonAdminPageGetRandomDataAndFieldValuesFromUserListEntryFields,  descriptions: TonAdminPageGetRandomDataAndFieldValuesFromUserListEntry = {}): Promise<string> {
    
    const result = await page.get({userList: {...descriptions, _action: { [_field]: null }}});

    const flatResult = result.userList

    return getRandomArrayItem(
      flatResult
        .map(item => item[_field]),
    );
  }

  async function onAdminPageGetSeveralRandomFieldValuesFromUserList(_field: TonAdminPageGetRandomDataAndFieldValuesFromUserListEntryFields = 'usernameItem', quantity: number = 2, descriptions: TonAdminPageGetRandomDataAndFieldValuesFromUserListEntry = {}): Promise<string[]> {
    
    const result = await page.get({userList: {...descriptions, _action: { [_field]: null }}});

    const flatResult = result.userList

    return getRandomArrayItem(
      flatResult
        .map(item => item[_field]),
      quantity,
    );
  }
  
    async function onAdminPageGetRandomDataFromUserList<T extends ReadonlyArray<TonAdminPageGetRandomDataAndFieldValuesFromUserListEntryFields>>(_fields: T, descriptions: TonAdminPageGetRandomDataAndFieldValuesFromUserListEntry = {}): Promise<TobjectFromStringArray<T>> {
      
      const result = await page.get({userList: {...descriptions, _action: _fields.reduce((act, k) => {
      act[k] = null;

      return act
    }, {})}});

      const flatResult = result.userList
  return getRandomArrayItem(
    flatResult
      .map(item => _fields.reduce((requredData, k ) => {
        requredData[k] = item[k]

        return requredData
      }, {} as TobjectFromStringArray<T>))
  );
};



/** ====================== action ================== */




type TadminButtonsAction = {
 addNewUser?: ButtonAction
 userList?: ButtonAction
}
type TadminButtonsActionResult = void
async function onAdminPagePerformOnAdminPageButtons<Tentry extends TadminButtonsAction>(data: Tentry): Promise<TadminButtonsActionResult> {
    return await page.action({ adminButtons: data });
  };


type TuserListAction = CollectionActionType<{
 usernameItem?: TextContent
 detailsButton?: ButtonContent
},{
 usernameItem?: TextIsDispRes
 detailsButton?: ButtonIsDispRes
},{
 usernameItem?: TextAction
 detailsButton?: ButtonAction
}>
type TuserListActionResult = void
async function onAdminPagePerformOnUserListRow<Tentry extends TuserListAction>(data: Tentry): Promise<TuserListActionResult> {
    return await page.action({ userList: data });
  };


type TaddNewUserAction = {
 username?: InputAction
 name?: InputAction
 password?: InputAction
 email?: InputAction
 addButton?: ButtonAction
 makeAdminCheckBox?: CheckBoxAction
}
type TaddNewUserActionResult = void
async function onAdminPagePerformOnAddNewUserForm<Tentry extends TaddNewUserAction>(data: Tentry): Promise<TaddNewUserActionResult> {
    return await page.action({ addNewUser: data });
  };


type TadminUserFormAction = {
 username?: InputAction
 name?: InputAction
 password?: InputAction
 email?: InputAction
 makeAdminCheckBox?: CheckBoxAction
}
type TadminUserFormActionResult = void
async function onAdminPagePerformOnAdminUserForm<Tentry extends TadminUserFormAction>(data: Tentry): Promise<TadminUserFormActionResult> {
    return await page.action({ adminUserForm: data });
  };


/** ====================== action ================== */


/** ====================== get ================== */




type TadminButtonsGet = {
 addNewUser?: ButtonAction
 userList?: ButtonAction
}
type TadminButtonsGetResult = {
 addNewUser?: ButtonGetRes
 userList?: ButtonGetRes
}
async function onAdminPageGetDataFromAdminPageButtons<Tentry extends TadminButtonsGet>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TadminButtonsGetResult>> {
    const { adminButtons } = await page.get({ adminButtons: data });
	return adminButtons;
  };


type TuserListGet = CollectionActionType<{
 usernameItem?: TextContent
 detailsButton?: ButtonContent
},{
 usernameItem?: TextIsDispRes
 detailsButton?: ButtonIsDispRes
},{
 usernameItem?: TextAction
 detailsButton?: ButtonAction
}>
type TuserListGetResult = {
 usernameItem?: TextGetRes
 detailsButton?: ButtonGetRes
}[]
async function onAdminPageGetDataFromUserListRow<Tentry extends TuserListGet>(data: Tentry): Promise<TuserListGetResult> {
    const { userList } = await page.get({ userList: data });
	return userList;
  };


type TaddNewUserGet = {
 username?: InputAction
 name?: InputAction
 password?: InputAction
 email?: InputAction
 addButton?: ButtonAction
 makeAdminCheckBox?: CheckBoxAction
}
type TaddNewUserGetResult = {
 username?: InputGetRes
 name?: InputGetRes
 password?: InputGetRes
 email?: InputGetRes
 addButton?: ButtonGetRes
 makeAdminCheckBox?: CheckBoxGetRes
}
async function onAdminPageGetDataFromAddNewUserForm<Tentry extends TaddNewUserGet>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TaddNewUserGetResult>> {
    const { addNewUser } = await page.get({ addNewUser: data });
	return addNewUser;
  };


type TadminUserFormGet = {
 username?: InputAction
 name?: InputAction
 password?: InputAction
 email?: InputAction
 makeAdminCheckBox?: CheckBoxAction
}
type TadminUserFormGetResult = {
 username?: InputGetRes
 name?: InputGetRes
 password?: InputGetRes
 email?: InputGetRes
 makeAdminCheckBox?: CheckBoxGetRes
}
async function onAdminPageGetDataFromAdminUserForm<Tentry extends TadminUserFormGet>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TadminUserFormGetResult>> {
    const { adminUserForm } = await page.get({ adminUserForm: data });
	return adminUserForm;
  };


/** ====================== get ================== */


/** ====================== isDisplayed ================== */




type TadminButtonsIsDisplayed = {
 addNewUser?: ButtonAction
 userList?: ButtonAction
}
type TadminButtonsIsDisplayedResult = {
 addNewUser?: ButtonIsDispRes
 userList?: ButtonIsDispRes
}
async function onAdminPageGetVisibilityOfAdminPageButtons<Tentry extends TadminButtonsIsDisplayed>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TadminButtonsIsDisplayedResult>> {
    const { adminButtons } = await page.isDisplayed({ adminButtons: data });
	return adminButtons;
  };


type TuserListIsDisplayed = CollectionActionType<{
 usernameItem?: TextContent
 detailsButton?: ButtonContent
},{
 usernameItem?: TextIsDispRes
 detailsButton?: ButtonIsDispRes
},{
 usernameItem?: TextAction
 detailsButton?: ButtonAction
}>
type TuserListIsDisplayedResult = {
 usernameItem?: TextIsDispRes
 detailsButton?: ButtonIsDispRes
}[]
async function onAdminPageGetVisibilityOfUserListRow<Tentry extends TuserListIsDisplayed>(data: Tentry): Promise<TuserListIsDisplayedResult> {
    const { userList } = await page.isDisplayed({ userList: data });
	return userList;
  };


type TaddNewUserIsDisplayed = {
 username?: InputAction
 name?: InputAction
 password?: InputAction
 email?: InputAction
 addButton?: ButtonAction
 makeAdminCheckBox?: CheckBoxAction
}
type TaddNewUserIsDisplayedResult = {
 username?: InputIsDispRes
 name?: InputIsDispRes
 password?: InputIsDispRes
 email?: InputIsDispRes
 addButton?: ButtonIsDispRes
 makeAdminCheckBox?: CheckBoxIsDispRes
}
async function onAdminPageGetVisibilityOfAddNewUserForm<Tentry extends TaddNewUserIsDisplayed>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TaddNewUserIsDisplayedResult>> {
    const { addNewUser } = await page.isDisplayed({ addNewUser: data });
	return addNewUser;
  };


type TadminUserFormIsDisplayed = {
 username?: InputAction
 name?: InputAction
 password?: InputAction
 email?: InputAction
 makeAdminCheckBox?: CheckBoxAction
}
type TadminUserFormIsDisplayedResult = {
 username?: InputIsDispRes
 name?: InputIsDispRes
 password?: InputIsDispRes
 email?: InputIsDispRes
 makeAdminCheckBox?: CheckBoxIsDispRes
}
async function onAdminPageGetVisibilityOfAdminUserForm<Tentry extends TadminUserFormIsDisplayed>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TadminUserFormIsDisplayedResult>> {
    const { adminUserForm } = await page.isDisplayed({ adminUserForm: data });
	return adminUserForm;
  };


/** ====================== isDisplayed ================== */


/** ====================== sendKeys ================== */




type TaddNewUserSendKeys = {
 username?: InputSendKeys
 name?: InputSendKeys
 password?: InputSendKeys
 email?: InputSendKeys
 makeAdminCheckBox?: CheckBoxAction
}
type TaddNewUserSendKeysResult = void
async function onAdminPageSetValuesToAddNewUserForm<Tentry extends TaddNewUserSendKeys>(data: Tentry): Promise<TaddNewUserSendKeysResult> {
    return await page.sendKeys({ addNewUser: data });
  };


type TadminUserFormSendKeys = {
 username?: InputSendKeys
 name?: InputSendKeys
 password?: InputSendKeys
 email?: InputSendKeys
 makeAdminCheckBox?: CheckBoxAction
}
type TadminUserFormSendKeysResult = void
async function onAdminPageSetValuesToAdminUserForm<Tentry extends TadminUserFormSendKeys>(data: Tentry): Promise<TadminUserFormSendKeysResult> {
    return await page.sendKeys({ adminUserForm: data });
  };


/** ====================== sendKeys ================== */


/** ====================== waitForVisibilityState ================== */




type TadminButtonsWaitForVisibilityState = {
 addNewUser?: ButtonIsDispRes
 userList?: ButtonIsDispRes
}
type TadminButtonsWaitForVisibilityStateResult = boolean
async function onAdminPageWaitForVisibilityStateAdminPageButtons<Tentry extends TadminButtonsWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TadminButtonsWaitForVisibilityStateResult> {
    return await page.waitForVisibilityState({ adminButtons: data }, opts);
  };


type TuserListWaitForVisibilityState = CollectionWaitingType<{
 usernameItem?: TextContent
 detailsButton?: ButtonContent
},{
 usernameItem?: TextIsDispRes
 detailsButton?: ButtonIsDispRes
},{
 usernameItem?: TextAction
 detailsButton?: ButtonAction
},{
 usernameItem?: TextIsDispRes
 detailsButton?: ButtonIsDispRes
}>
type TuserListWaitForVisibilityStateResult = boolean
async function onAdminPageWaitForVisibilityStateUserListRow<Tentry extends TuserListWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TuserListWaitForVisibilityStateResult> {
    return await page.waitForVisibilityState({ userList: data }, opts);
  };


type TaddNewUserWaitForVisibilityState = {
 username?: InputIsDispRes
 name?: InputIsDispRes
 password?: InputIsDispRes
 email?: InputIsDispRes
 addButton?: ButtonIsDispRes
 makeAdminCheckBox?: CheckBoxIsDispRes
}
type TaddNewUserWaitForVisibilityStateResult = boolean
async function onAdminPageWaitForVisibilityStateAddNewUserForm<Tentry extends TaddNewUserWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TaddNewUserWaitForVisibilityStateResult> {
    return await page.waitForVisibilityState({ addNewUser: data }, opts);
  };


type TadminUserFormWaitForVisibilityState = {
 username?: InputIsDispRes
 name?: InputIsDispRes
 password?: InputIsDispRes
 email?: InputIsDispRes
 makeAdminCheckBox?: CheckBoxIsDispRes
}
type TadminUserFormWaitForVisibilityStateResult = boolean
async function onAdminPageWaitForVisibilityStateAdminUserForm<Tentry extends TadminUserFormWaitForVisibilityState>(data: Tentry, opts?: IWaitOpts): Promise<TadminUserFormWaitForVisibilityStateResult> {
    return await page.waitForVisibilityState({ adminUserForm: data }, opts);
  };


/** ====================== waitForVisibilityState ================== */


/** ====================== waitForContentState ================== */




type TadminButtonsWaitForContentState = {
 addNewUser?: ButtonContent
 userList?: ButtonContent
}
type TadminButtonsWaitForContentStateResult = boolean
async function onAdminPageWaitForContentStateAdminPageButtons<Tentry extends TadminButtonsWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TadminButtonsWaitForContentStateResult> {
    return await page.waitForContentState({ adminButtons: data }, opts);
  };


type TuserListWaitForContentState = CollectionWaitingContentType<{
 usernameItem?: TextContent
 detailsButton?: ButtonContent
},{
 usernameItem?: TextIsDispRes
 detailsButton?: ButtonIsDispRes
},{
 usernameItem?: TextAction
 detailsButton?: ButtonAction
},{
 usernameItem?: TextGetRes
 detailsButton?: ButtonGetRes
}>
type TuserListWaitForContentStateResult = boolean
async function onAdminPageWaitForContentStateUserListRow<Tentry extends TuserListWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TuserListWaitForContentStateResult> {
    return await page.waitForContentState({ userList: data }, opts);
  };


type TaddNewUserWaitForContentState = {
 username?: InputGetRes
 name?: InputGetRes
 password?: InputGetRes
 email?: InputGetRes
 addButton?: ButtonContent
 makeAdminCheckBox?: CheckBoxContent
}
type TaddNewUserWaitForContentStateResult = boolean
async function onAdminPageWaitForContentStateAddNewUserForm<Tentry extends TaddNewUserWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TaddNewUserWaitForContentStateResult> {
    return await page.waitForContentState({ addNewUser: data }, opts);
  };


type TadminUserFormWaitForContentState = {
 username?: InputGetRes
 name?: InputGetRes
 password?: InputGetRes
 email?: InputGetRes
 makeAdminCheckBox?: CheckBoxContent
}
type TadminUserFormWaitForContentStateResult = boolean
async function onAdminPageWaitForContentStateAdminUserForm<Tentry extends TadminUserFormWaitForContentState>(data: Tentry, opts?: IWaitOpts): Promise<TadminUserFormWaitForContentStateResult> {
    return await page.waitForContentState({ adminUserForm: data }, opts);
  };


/** ====================== waitForContentState ================== */



  type TonAdminPageGetCollectionFromUserListEntry = Omit<CollectionActionType<{
 usernameItem?: TextContent
 detailsButton?: ButtonContent
},{
 usernameItem?: TextIsDispRes
 detailsButton?: ButtonIsDispRes
}>, '_action'>
  type TonAdminPageGetCollectionFromUserList = {
 usernameItem?: TextGetRes
 detailsButton?: ButtonGetRes
}
  async function onAdminPageGetCollectionFromUserList({...descriptions}: TonAdminPageGetCollectionFromUserListEntry = {}): Promise<TonAdminPageGetCollectionFromUserList[]> {
    const result = await page.get({userList: {...descriptions, _action: null}});

    return result.userList
  }




export {
    onAdminPageGetRandomFieldValueFromUserList,
  onAdminPageGetSeveralRandomFieldValuesFromUserList,
  onAdminPageGetRandomDataFromUserList,
  onAdminPagePerformOnAdminPageButtons,
  onAdminPagePerformOnUserListRow,
  onAdminPagePerformOnAddNewUserForm,
  onAdminPagePerformOnAdminUserForm,
  onAdminPageGetDataFromAdminPageButtons,
  onAdminPageGetDataFromUserListRow,
  onAdminPageGetDataFromAddNewUserForm,
  onAdminPageGetDataFromAdminUserForm,
  onAdminPageGetVisibilityOfAdminPageButtons,
  onAdminPageGetVisibilityOfUserListRow,
  onAdminPageGetVisibilityOfAddNewUserForm,
  onAdminPageGetVisibilityOfAdminUserForm,
  onAdminPageSetValuesToAddNewUserForm,
  onAdminPageSetValuesToAdminUserForm,
  onAdminPageWaitForVisibilityStateAdminPageButtons,
  onAdminPageWaitForVisibilityStateUserListRow,
  onAdminPageWaitForVisibilityStateAddNewUserForm,
  onAdminPageWaitForVisibilityStateAdminUserForm,
  onAdminPageWaitForContentStateAdminPageButtons,
  onAdminPageWaitForContentStateUserListRow,
  onAdminPageWaitForContentStateAddNewUserForm,
  onAdminPageWaitForContentStateAdminUserForm,
  onAdminPageGetCollectionFromUserList,
  }
