import { log } from '@kot-shrodingera-team/germes-utils';
import { OlimpBet } from '../bookmakerApi';
import getBet from '../getBet';

const getParameter = (): number => {
  const bet = getBet() as OlimpBet;
  if (!bet) {
    log('Не найден параметр (не найдена ставка)');
    return -9999;
  }
  const market = bet.event_name;
  const parameterRegex = /\(([+-]?\d+(?:\.\d+)?)\)/;
  const parameterMatch = market.match(parameterRegex);
  if (!parameterMatch) {
    log('Ставка без параметра', 'steelblue');
    return -6666;
  }
  const parameter = Number(parameterMatch[1]);
  log(`Параметр: ${parameter}`, 'steelblue');
  return parameter;
};

export default getParameter;
