// import { I } from '../project/actor';
// import { browser } from '../lib';
// import { expect } from 'chai';

// describe('check That Price Search Field is Working test suite', async () => {
//   it.only('test case [P]', async () => {
//     await I.onMainPageSetValuesToLoginFragment({
//       username: 'admin',
//       password: 'admin',
//     }).onMainPagePerformOnLoginFragment({
//       loginButton: null,
//     });
//     await I.onTablePageSetValuesToFilterFragment({ filterPrice: 500000 }).onTablePagePerformOnFilterFragment({
//       filterButton: 'click',
//     });
//     const result = await I.onTablePageGetDataFromMachinesList({ _action: { price: null } });

//     console.log(result);

//     const res = result.every((arr) => {
//       expect(parseFloat(arr.price)).to.lessThanOrEqual(500000);
//     });

//     await browser.sleep(2000);
//     await I.onTablePagePerformOnTablesHeader({ LogOut: 'click' });
//   });
//   it.only('test case [N]', async () => {
//     await I.onMainPageSetValuesToLoginFragment({
//       username: 'admin',
//       password: 'admin',
//     }).onMainPagePerformOnLoginFragment({
//       loginButton: null,
//     });
//     await I.onTablePageSetValuesToFilterFragment({ filterPrice: 'abc' }).onTablePagePerformOnFilterFragment({
//       filterButton: 'click',
//     });
//     const result = await I.onTablePageGetDataFromMachinesList({ _action: { price: null } });

//     console.log(result);

//     const res = result.every((arr) => {
//       expect(parseFloat(arr.price)).not.exist;
//     });
//     await browser.sleep(2000);
//     await I.onTablePagePerformOnTablesHeader({ LogOut: 'click' });
//   });
//   it.only('test case [N]', async () => {
//     await I.onMainPageSetValuesToLoginFragment({
//       username: 'admin',
//       password: 'admin',
//     }).onMainPagePerformOnLoginFragment({
//       loginButton: null,
//     });
//     await I.onTablePageSetValuesToFilterFragment({ filterPrice: '' }).onTablePagePerformOnFilterFragment({
//       filterButton: 'click',
//     });
//     const result = await I.onTablePageGetDataFromMachinesList({ _action: { price: null } });

//     console.log(result);

//     const res = result.every((arr) => {
//       expect(parseFloat(arr.price)).not.exist;
//     });
//     await browser.sleep(2000);
//     await I.onTablePagePerformOnTablesHeader({ LogOut: 'click' });
//   });
// });

// describe('check That Work Wolume Search Field is Working test suite', async () => {
//   it.only('test case [P]', async () => {
//     await I.onMainPageSetValuesToLoginFragment({
//       username: 'admin',
//       password: 'admin',
//     }).onMainPagePerformOnLoginFragment({
//       loginButton: null,
//     });
//     await I.onTablePageSetValuesToFilterFragment({ filterWorkVolume: 10 }).onTablePagePerformOnFilterFragment({
//       filterButton: 'click',
//     });
//     const result = await I.onTablePageGetDataFromMachinesList({ _action: { workVolume: null } });

//     console.log(result);

//     const res = result.every((arr) => {
//       expect(parseFloat(arr.workVolume)).lessThanOrEqual(10);
//     });
//     await browser.sleep(2000);
//     await I.onTablePagePerformOnTablesHeader({ LogOut: 'click' });
//   });
//   it.only('test case [N]', async () => {
//     await I.onMainPageSetValuesToLoginFragment({
//       username: 'admin',
//       password: 'admin',
//     }).onMainPagePerformOnLoginFragment({
//       loginButton: null,
//     });
//     await I.onTablePageSetValuesToFilterFragment({ filterWorkVolume: 'abc' }).onTablePagePerformOnFilterFragment({
//       filterButton: 'click',
//     });
//     const result = await I.onTablePageGetDataFromMachinesList({ _action: { workVolume: null } });

//     console.log(result);

//     const res = result.every((arr) => {
//       expect(parseFloat(arr.workVolume)).not.exist;
//     });
//     await browser.sleep(2000);
//     await I.onTablePagePerformOnTablesHeader({ LogOut: 'click' });
//   });
//   it.only('test case [N]', async () => {
//     await I.onMainPageSetValuesToLoginFragment({
//       username: 'admin',
//       password: 'admin',
//     }).onMainPagePerformOnLoginFragment({
//       loginButton: null,
//     });
//     await I.onTablePageSetValuesToFilterFragment({ filterWorkVolume: '' }).onTablePagePerformOnFilterFragment({
//       filterButton: 'click',
//     });
//     const result = await I.onTablePageGetDataFromMachinesList({ _action: { workVolume: null } });

//     console.log(result);

//     const res = result.every((arr) => {
//       expect(parseFloat(arr.workVolume)).not.exist;
//     });
//     await browser.sleep(2000);
//     await I.onTablePagePerformOnTablesHeader({ LogOut: 'click' });
//   });
// });
// /////
// describe('check That Manufacturer Search Field is Working test suite', async () => {
//   it.only('test case [P]', async () => {
//     await I.onMainPageSetValuesToLoginFragment({
//       username: 'admin',
//       password: 'admin',
//     }).onMainPagePerformOnLoginFragment({
//       loginButton: null,
//     });
//     await I.onTablePageSetValuesToFilterFragment({
//       filterManufacturer: 'ITALMIX DUPLEX 10 MC',
//     }).onTablePagePerformOnFilterFragment({
//       filterButton: 'click',
//     });
//     const result = await I.onTablePageGetDataFromMachinesList({ _action: { manufacturer: null } });

//     console.log(result);

//     const res = result.find((arr) => {
//       expect(arr.manufacturer.trim()).to.deep.include('ITALMIX DUPLEX 10 MC');
//     });
//     await browser.sleep(2000);
//     await I.onTablePagePerformOnTablesHeader({ LogOut: 'click' });
//   });
//   it.only('test case [N]', async () => {
//     await I.onMainPageSetValuesToLoginFragment({
//       username: 'admin',
//       password: 'admin',
//     }).onMainPagePerformOnLoginFragment({
//       loginButton: null,
//     });
//     await I.onTablePageSetValuesToFilterFragment({ filterManufacturer: '' }).onTablePagePerformOnFilterFragment({
//       filterButton: 'click',
//     });
//     const result = await I.onTablePageGetDataFromMachinesList({ _action: { workVolume: null } });

//     console.log(result);

//     const res = result.find((arr) => {
//       expect(arr.manufacturer).not.exist;
//     });
//     await browser.sleep(2000);
//     await I.onTablePagePerformOnTablesHeader({ LogOut: 'click' });
//   });
//   it.only('test case [N]', async () => {
//     await I.onMainPageSetValuesToLoginFragment({
//       username: 'admin',
//       password: 'admin',
//     }).onMainPagePerformOnLoginFragment({
//       loginButton: null,
//     });
//     await I.onTablePageSetValuesToFilterFragment({ filterManufacturer: 100 }).onTablePagePerformOnFilterFragment({
//       filterButton: 'click',
//     });
//     const result = await I.onTablePageGetDataFromMachinesList({ _action: { workVolume: null } });

//     console.log(result);

//     const res = result.every((arr) => {
//       expect(arr.manufacturer).not.exist;
//     });
//     await browser.sleep(2000);
//     await I.onTablePagePerformOnTablesHeader({ LogOut: 'click' });
//   });
// });
