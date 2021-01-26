// export const minimumStakeReady = minimumStakeReadyGenerator({
//   minimumStakeElementSelector: '',
//   // minimumStakeRegex: null,
// });

const getMinimumStake = (): number => {
  switch (worker.Currency) {
    case 'RUR':
      return 10;
    default:
      return 0;
  }
};

export default getMinimumStake;
