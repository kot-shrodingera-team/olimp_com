import setStakeSumGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/setStakeSum';

// const preInputCheck = (): boolean => {
//   return true;
// };

const setStakeSum = setStakeSumGenerator({
  sumInputSelector: 'input[name="singlebet_sum0"]',
  alreadySetCheck: {
    falseOnSumChange: false,
  },
  inputType: 'fireEvent',
  // preInputCheck,
});

export default setStakeSum;
