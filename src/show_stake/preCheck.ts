import { log, getElement } from '@kot-shrodingera-team/germes-utils';
import NewUrlError from './errors/newUrlError';

const preCheck = async (): Promise<void> => {
  if (window.location.href.includes(worker.EventId)) {
    log('Открыта страница нужного события', 'steelblue');
    await Promise.race([
      getElement('.basket-empty'),
      getElement('.busket-item'),
    ]);
    return;
  }
  log('Открыта не страница нужного события', 'crimson');
  // https://olimp.com/live/5/6736/61691344
  // https://olimp.com/index.php?page=line&action=2&live[]=61691344&sid[]=5
  const eventUrl = worker.EventUrl.replace(/amp_suck/g, '&');
  // const sidRegex = /\/live\/(\d+)\/./;
  // const sidMatch = eventUrl.match(sidRegex);
  // if (!sidMatch) {
  //   throw new JsFailError('Не найден sid. Сообщите в ТП');
  // }
  // const sid = sidMatch[1];
  // const url = new URL(
  //   `index.php?page=line&action=2&live[]=${worker.EventId}&sid[]=${sid}`,
  //   window.location.origin
  // );
  // window.location.href = url.href;
  window.location.href = eventUrl;
  throw new NewUrlError('Переходим на страницу события');
  // if (window.location.pathname !== '/betting') {
  //   log('Открыт не Live', 'steelblue');
  //   window.location.href = new URL('/betting', worker.BookmakerMainUrl).href;
  //   throw new NewUrlError('Переходим на Live');
  // }
  // log('Открыт Live', 'steelblue');
  // await Promise.race([getElement('.basket-empty'), getElement('.busket-item')]);
};

export default preCheck;
