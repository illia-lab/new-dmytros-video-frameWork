// import { provider } from '../project';
// const { suite, test } = provider.testRunner;

// suite('Main page suite', async () => {
//   test('[P] login', async ({ I, browser, users }) => {
//     await browser.get('http://localhost:4000');
//     const result = await I.onMainPageSetValuesToLoginFragment(users.admin)
//       .onMainPagePerformOnLoginFragment({ loginButton: 'click' })
//       .onTablePageWaitForVisibilityStateTablesHeader({ analytics: true })
//       .onTablePageWaitForVisibilityStateMachinesList({
//         length: '>0',
//         workVolume: true,
//         _action: { workVolume: null },
//       })
//       .onTablePageWaitForContentStateMachinesList(
//         { price: (str) => Number.parseInt(str) > 10, _action: { price: null } },
//         { customCheck: true },
//       );

//     console.log(result);
//   });
// });
