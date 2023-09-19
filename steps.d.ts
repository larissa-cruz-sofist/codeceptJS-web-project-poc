/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps/steps_file.js');
type loginPage = typeof import('./pages/login.js');
type shoppingPage = typeof import('./pages/shopping.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, shoppingPage: shoppingPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
