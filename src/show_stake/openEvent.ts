const openEvent = async (): Promise<void> => {
  // if (window.location.href.includes(worker.EventId)) {
  //   log('Открыта страница нужного события', 'steelblue');
  //   return;
  // }
  // const event = (await getElement(`a[id$="${worker.EventId}"]`)) as HTMLElement;
  // if (!event) {
  //   throw new JsFailError('Событие не найдено');
  // }
  // log('Событие найдено', 'steelblue');
  // event.click();
  // throw new NewUrlError('Переходим на страницу события');
};

export default openEvent;
