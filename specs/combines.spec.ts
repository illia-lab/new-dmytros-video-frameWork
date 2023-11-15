// import { browser, getDriver } from '../lib';
// import { expect } from 'chai';
// import { I } from '../project/actor';

// describe('check that data on combines page fit to expected data test suite', async () => {
//   it.only('test case', async () => {
//     await I.onMainPageSetValuesToLoginFragment({ username: 'admin', password: 'admin' })
//       .onMainPagePerformOnLoginFragment({
//         loginButton: null,
//       })
//       .onTablePagePerformOnTablesHeader({ combines: 'click' });
//     const result = await I.onCombinesPagePageGetDataFromCombineRowFragment({
//       manufacturer: null,
//       weight: null,
//       height: null,
//       class: null,
//       price: null,
//     });
//     console.log(result);
//     expect(result).to.deep.equals({
//       manufacturer: 'Комбайн (Versatile RT490) Versatile RT490',
//       weight: '3834',
//       height: '6687',
//       class: '7',
//       price: '99795',
//     });
//   });
// });
