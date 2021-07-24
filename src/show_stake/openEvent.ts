import { getElement, log } from '@kot-shrodingera-team/germes-utils';
import JsFailError from './errors/jsFailError';
import NewUrlError from './errors/newUrlError';

const openEvent = async (): Promise<void> => {
  const eventUrl = worker.EventUrl.replace(/amp_suck/g, '&');
  /* ======================================================================== */
  /*             Если не было попытки перехода на страницу события            */
  /* ======================================================================== */

  if (
    worker.GetSessionData(
      `${window.germesData.bookmakerName}.TransitionToEventPage`
    ) === '0'
  ) {
    if (window.location.href.includes(worker.EventId)) {
      log('Открыта страница нужного события', 'steelblue');
      await Promise.race([
        getElement('.basket-empty'),
        getElement('.busket-item'),
      ]);
      return;
    }
    log(`${window.location.href} !== ${eventUrl}`, 'white', true);
    worker.SetSessionData(
      `${window.germesData.bookmakerName}.TransitionToEventPage`,
      '1'
    );
    window.location.href = eventUrl;
    throw new NewUrlError('Переходим на событие');
  }

  /* ======================================================================== */
  /*              Если была попытка перехода на страницу события              */
  /* ======================================================================== */

  if (window.location.href.includes(worker.EventId)) {
    log('Открыли нужное событие', 'steelblue');
    await Promise.race([
      getElement('.basket-empty'),
      getElement('.busket-item'),
    ]);
    return;
  }
  log(`${window.location.href} !== ${eventUrl}`, 'crimson');
  throw new JsFailError('Не удалось перейти на нужное событие');
};

export default openEvent;
