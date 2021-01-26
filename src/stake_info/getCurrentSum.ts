import getCurrentSumGenerator from '@kot-shrodingera-team/germes-generators/stake_info/getCurrentSum';

const getCurrentSum = getCurrentSumGenerator({
  sumInput: 'input[name="singlebet_sum0"]',
  // zeroValues: [],
  // currentSumRegex: null,
});

export default getCurrentSum;
