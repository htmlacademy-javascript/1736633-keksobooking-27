import { addValidator, validateForm, resetValidation } from './form-validation.js';

const offerForm = document.querySelector('.ad-form');

//тип жилья
const priceField = document.querySelector('#price');
const selectType = offerForm.querySelector('#type');
const minValueType = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const onTypeFieldChange = (evt) => {
  priceField.min = minValueType[evt.target.value];
  priceField.placeholder = minValueType[evt.target.value];
};

// время
const timeIn = offerForm.querySelector('#timein');
const timeOut = offerForm.querySelector('#timeout');

const onTimeInChange = () => (timeOut.value = timeIn.value);
const onTimeOutChange = () => (timeIn.value = timeOut.value);

const onFormSubmit = (evt) => {
  evt.preventDefault();

  validateForm();
};

const onFormReset = () => {
  resetValidation();
};

const addListeners = () => {
  timeIn.addEventListener('change', onTimeInChange);
  timeOut.addEventListener('change', onTimeOutChange);
  selectType.addEventListener('change', onTypeFieldChange);
  offerForm.addEventListener('submit', onFormSubmit);
  offerForm.addEventListener('reset', onFormReset);
};

const addAdFormAction = () => {
  addListeners();
  addValidator();
};

export { addAdFormAction };
