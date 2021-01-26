import {
  log,
  round,
  stakeInfoString,
} from '@kot-shrodingera-team/germes-utils';
import getBalance, { updateBalance } from '../stake_info/getBalance';

const checkStakeStatus = (): boolean => {
  const errorMessage = document.querySelector('#error-wraper-betslip');
  if (!errorMessage) {
    log('Результат ставки не найден (не найдено сообщение)', 'red');
    return false;
  }
  const errorText = errorMessage.textContent.trim();
  if (errorText === 'Ваша ставка успешно принята!') {
    log('Cтавка принята', 'green');
    updateBalance();
    return true;
  }
  if (
    /Дождитесь принятия предыдущей ставки перед приёмом новой/i.test(errorText)
  ) {
    const currentBalance = getBalance();
    log(
      `Баланс до ставки: ${worker.StakeInfo.Balance}. Текущий баланс: ${currentBalance}. Сумма ставки: ${worker.StakeInfo.Summ}`,
      'steelblue'
    );
    const balanceDrop =
      round(worker.StakeInfo.Balance - getBalance()) === worker.StakeInfo.Summ;
    if (balanceDrop) {
      const message =
        `В Olimp ошибка ставки "Дождитесь принятия предыдущей ставки перед приёмом новой"\n` +
        `${stakeInfoString()}\n` +
        `Баланс изменился на сумму ставки` +
        `Ставка засчитана как принятая. Желательно проверить вручную\n` +
        `Если ставка НЕ принята сообщить в ТП\n`;
      worker.Helper.SendInformedMessage(message);
      log('Баланс изменился на сумму ставки. Считаем ставку принятой', 'green');
      updateBalance();
      return true;
    }
    const message =
      `В Olimp ошибка ставки "Дождитесь принятия предыдущей ставки перед приёмом новой"\n` +
      `${stakeInfoString()}\n` +
      `Баланс не изменился на сумму ставки` +
      `Ставка засчитана как НЕ принятая. Желательно проверить вручную\n` +
      `Если ставка принята сообщить в ТП\n`;
    worker.Helper.SendInformedMessage(message);
    log('Cтавка не принята', 'tomato');
    return false;
  }
  log(`Ставка не принята (${errorText})`, 'tomato');
  return false;
};

export default checkStakeStatus;
