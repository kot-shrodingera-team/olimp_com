import { awaiter, getElement, log } from '@kot-shrodingera-team/germes-utils';
import getStakeCount from '../stake_info/getStakeCount';
import JsFailError from './errors/jsFailError';

const openBet = async (): Promise<void> => {
  const { selectionId } = JSON.parse(worker.BetId);

  log(`Ищем ставку "${worker.BetName}"`, 'steelblue');

  const bet = (await getElement(`span[id*="${selectionId}"]`)) as HTMLElement;

  if (!bet) {
    log(`Selector = span[id*="${selectionId}"]`, 'white', true);
    const bets = document.querySelectorAll('.googleStatIssue');
    bets.forEach((betElement) => {
      const betNameElement = betElement.querySelector('.googleStatIssueName');
      if (!betNameElement) {
        log('Не найден заголовок ставки', 'white', true);
        return;
      }
      const betName = betNameElement.textContent.trim();
      const betSel = betElement.querySelector('.bet_sel');
      if (!betSel) {
        log('Не найден betSel ставки', 'white', true);
        return;
      }
      const betSelId = betSel.getAttribute('id');
      log(`${betName}: ${betSelId}`, 'white', true);
    });
    throw new JsFailError('Ставка не найдена');
  }

  const maxTryCount = 5;
  for (let i = 1; i <= maxTryCount; i += 1) {
    bet.click();
    // eslint-disable-next-line no-await-in-loop
    const betAdded = await awaiter(() => getStakeCount() === 1, 1000, 50);

    if (!betAdded) {
      if (i === maxTryCount) {
        throw new JsFailError('Ставка так и не попала в купон');
      }
      log(`Ставка не попала в купон (попытка ${i})`, 'steelblue');
    } else {
      log('Ставка попала в купон', 'steelblue');
      break;
    }
  }
};

export default openBet;
