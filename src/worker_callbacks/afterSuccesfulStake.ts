import { log } from '@kot-shrodingera-team/germes-utils';

let currentCoefficient = 0;

export const setCurrentCoefficient = (newCurrentCoefficient: number): void => {
  currentCoefficient = newCurrentCoefficient;
};

export const getCurrentCoefficient = (): number => {
  return currentCoefficient;
};

export const clearCurrentCoefficient = (): void => {
  currentCoefficient = 0;
};

const afterSuccesfulStake = (): void => {
  log('Обновление итогового коэффициента', 'steelblue');
  if (currentCoefficient && currentCoefficient !== worker.StakeInfo.Coef) {
    log(
      `Коеффициент изменился: ${worker.StakeInfo.Coef} => ${currentCoefficient}`,
      'orange'
    );
    worker.StakeInfo.Coef = currentCoefficient;
    return;
  }
  log('Коеффициент не изменился', 'lightblue');
};

export default afterSuccesfulStake;
