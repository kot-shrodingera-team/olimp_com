import {
  balanceReadyGenerator,
  getBalanceGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getBalance';

export const balanceReady = balanceReadyGenerator({
  balanceSelector: '.currusum',
  // balanceRegex: null,
});

const getBalance = getBalanceGenerator({
  balanceSelector: '.currusum',
  // balanceRegex: null,
});

export const updateBalance = (): void => {
  worker.JSBalanceChange(getBalance());
};

export default getBalance;
