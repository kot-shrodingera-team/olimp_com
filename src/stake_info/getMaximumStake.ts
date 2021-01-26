// import getMaximumStakeGenerator, {
//   maximumStakeReadyGenerator,
// } from '@kot-shrodingera-team/germes-generators/stake_info/getMaximumStake';
import { log } from '@kot-shrodingera-team/germes-utils';
import { OlimpBet } from '../bookmakerApi';
import getBet from '../getBet';

// export const maximumStakeReady = maximumStakeReadyGenerator({
//   maximumStakeElementSelector: '',
//   // maximumStakeRegex: null,
// });

const getMaximumStake = (): number => {
  const bet = getBet() as OlimpBet;
  if (!bet) {
    log('Не найдена максимальная ставка (ставка не найдена)', 'crimson');
    return 0;
  }
  const max = bet.new_max_bet;
  if (!max) {
    log('Не найдена максимальная ставка', 'crimson');
    return 0;
  }
  if (Number.isNaN(max)) {
    log(`Непонятный формат максимальной ставки: "${max}"`, 'crimson');
    return 0;
  }
  return max;
};

export default getMaximumStake;
