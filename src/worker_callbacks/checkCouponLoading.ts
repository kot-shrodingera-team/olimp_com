import checkCouponLoadingGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/checkCouponLoading';
import { log } from '@kot-shrodingera-team/germes-utils';
import { getDoStakeTime } from '../stake_info/doStakeTime';
import getCoefficient from '../stake_info/getCoefficient';
import {
  getCurrentCoefficient,
  setCurrentCoefficient,
} from './afterSuccesfulStake';

const check = () => {
  const actualCoefficient = getCoefficient();
  if (actualCoefficient) {
    const currentCoefficient = getCurrentCoefficient();
    if (actualCoefficient !== currentCoefficient) {
      if (currentCoefficient) {
        log(
          `Коэффициент изменился ${currentCoefficient} => ${actualCoefficient}`,
          'orange'
        );
      }
      setCurrentCoefficient(actualCoefficient);
    }
  }
  const basketLoad = document.querySelector('.busket_load');
  if (basketLoad) {
    log('Обработка ставки (индикатор)', 'tan');
    return true;
  }
  const errorMessage = document.querySelector('#error-wraper-betslip');
  if (errorMessage) {
    const errorText = errorMessage.textContent.trim();
    if (errorText) {
      log(
        `Обработка ставки завершена (Текст результата: "${errorText}")`,
        'orange'
      );
      return false;
    }
  }
  log('Обработка ставки (нет результата)', 'tan');
  return true;
};

const checkCouponLoading = checkCouponLoadingGenerator({
  getDoStakeTime,
  bookmakerName: 'OlimpCom',
  timeout: 50000,
  check,
});

export default checkCouponLoading;
