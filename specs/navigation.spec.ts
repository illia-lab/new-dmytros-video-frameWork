// import { I } from '../project/actor';
// import { browser } from '../lib';
// import { expect } from 'chai';

// describe('check That Navigation buttons leads us to proper pages test suite', async () => {
//   it.only('test case [P]', async () => {
//     I.onMainPageSetValuesToLoginFragment({ username: 'admin', password: 'admin' })
//       .onMainPagePerformOnLoginFragment({
//         loginButton: null,
//       })
//       .onTablePagePerformOnTablesHeader({ analytics: 'click' });
//     const result = await I.onAnalyticPageGetDataFromAnalyticsInfoStats({
//       machinesQuantity: null,
//       workVolumeStats: null,
//       priceStats: null,
//     });

//     console.log(result);
//     expect(result).to.deep.equal({
//       machinesQuantity: 'Machines quantity 78',
//       workVolumeStats: 'Work volume from 3.7 to 46',
//       priceStats: 'Price from 340000 to 1430200.44',
//     });
//     await browser.sleep(2000);
//   });
// });
