const filterForm = document.querySelector('.map__filters');
const filterFormItems = document.querySelectorAll('.map__filters select, fieldset');
const adForm = document.querySelector('.ad-form');
const adFormItems = document.querySelectorAll('.ad-form fieldset');

const changeItemsState = (items, state) => {
  items.forEach((item) => {
    item.disabled = state;
  });
};

const disableFilterForm = () => {
  filterForm.classList.add('map__filters--disabled');
  changeItemsState(filterFormItems, true);
};

const disableAddForm = () => {
  adForm.classList.add('ad-form--disabled');
  changeItemsState(adFormItems, true);
};

const setDisablePageState = () => {
  disableFilterForm();
  disableAddForm();
};

const enableAddForm = () => {
  adForm.classList.remove('ad-form--disabled');
  changeItemsState(adFormItems, false);
};

const enableFilterForm = () => {
  filterForm.classList.remove('map__filters--disabled');
  changeItemsState(filterFormItems, false);
};

export { setDisablePageState, enableAddForm, enableFilterForm };
