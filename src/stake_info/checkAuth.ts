import checkAuthGenerator, {
  authStateReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/checkAuth';

export const authStateReady = authStateReadyGenerator({
  noAuthElementSelector: '.enter-block input[name="login"]',
  authElementSelector: '.balance-link',
  // maxDelayAfterNoAuthElementAppeared: 0,
  // logging: false,
});

const checkAuth = checkAuthGenerator({
  authElementSelector: '.balance-link',
});

export default checkAuth;
