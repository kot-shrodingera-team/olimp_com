import checkStakeEnabledGenerator from '@kot-shrodingera-team/germes-generators/stake_info/checkStakeEnabled';
import { log } from '@kot-shrodingera-team/germes-utils';
import getBet from '../getBet';
import getStakeCount from './getStakeCount';

const preCheck = (): boolean => {
  const bet = getBet();
  if (!bet) {
    log('Ставка недоступна (не найдена)', 'crimson');
    return false;
  }
  if (bet.deleted) {
    log('Ставка недоступна (заблокирована)', 'crimson');
    return false;
  }
  return true;
};

const checkStakeEnabled = checkStakeEnabledGenerator({
  preCheck,
  getStakeCount,
  // betCheck: {
  //   selector: '',
  //   errorClasses: [
  //     {
  //       className: '',
  //       message: '',
  //     },
  //   ],
  // },
  // errorsCheck: [
  //   {
  //     selector: '',
  //     message: '',
  //   },
  // ],
});

export default checkStakeEnabled;
