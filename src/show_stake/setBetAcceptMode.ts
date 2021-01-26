import { log } from '@kot-shrodingera-team/germes-utils';

const setBetAcceptMode = (): boolean => {
  const betAcceptModes = [
    ...document.querySelectorAll('.koef_ch_radio .radio-item'),
  ] as HTMLElement[];
  const mode = ((): HTMLElement => {
    switch (worker.StakeAcceptRuleShoulder) {
      case 0:
        return betAcceptModes.find(
          (element) => element.textContent.trim() === 'никогда'
        );
      case 1:
        return betAcceptModes.find(
          (element) => element.textContent.trim() === 'при повышении'
        );
      case 2:
        return betAcceptModes.find(
          (element) => element.textContent.trim() === 'всегда'
        );
      default:
        return null;
    }
  })();
  if (!mode) {
    log('Не найдена нужная опция режима принятия ставки', 'crimson');
    return false;
  }
  const modeInput = mode.querySelector('input');
  if (!modeInput) {
    log(
      'Не найдена радиокнопка нужной опции режима принятия ставки',
      'crimson'
    );
    return false;
  }
  modeInput.click();
  return true;
};

export default setBetAcceptMode;
