import authorizeGenerator from '@kot-shrodingera-team/germes-generators/initialization/authorize';
// import afterSuccesfulLogin from './afterSuccesfulLogin';

const authorize = (() => {
  return authorizeGenerator({
    // openForm: {
    // selector: '',
    // openedSelector: '',
    // afterOpenDelay: 0,
    // },
    // setLoginType,
    loginInputSelector: '.enter-block input[name="login"]',
    passwordInputSelector: '.enter-block input[name="passw"]',
    submitButtonSelector: 'button.enterBtn',
    inputType: 'fireEvent',
    beforeSubmitDelay: 1000, // на olimp.com бывала ошибка 404 при авторизации, с паузой вроде всё нормально
    // captchaSelector: '',
    // loginedWait: {
    //   loginedSelector: '',
    //   balanceReady,
    //   updateBalance,
    // },
    // afterSuccesfulLogin,
  });
})();

export default authorize;
