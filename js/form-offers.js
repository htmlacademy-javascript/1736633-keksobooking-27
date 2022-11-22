import { addValidator, validateForm, resetValidation } from './form-validation.js';
import { resetMap } from './create-map.js';
import { sendData } from './api.js';
import { renderPostErrorMessage } from './modal-error.js';
import { renderSuccessMessage } from './modal-success.js';
import { clearImageBlocks, addPhotoInputsListeners } from './preload-images.js';

const POST_URL = 'https://27.javascript.pages.academy/keksobooking';

const offerForm = document.querySelector('.ad-form');
const adFormSubmitBtn = document.querySelector('.ad-form__submit');

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

//цена слайдер
const slider = offerForm.querySelector('.ad-form__slider');
noUiSlider.create(slider, {
  range: {
    min: 1000,
    max: 100000,
  },
  start: 1000,
  step: 500,
  connect: 'lower',
});

slider.noUiSlider.on('update', () => {
  priceField.value = slider.noUiSlider.get();
});

const onTypeFieldChange = (evt) => {
  priceField.min = minValueType[evt.target.value];
  priceField.value = minValueType[evt.target.value];
  slider.noUiSlider.updateOptions({
    range: {
      min: minValueType[evt.target.value],
      max: 100000
    },
    start: minValueType[evt.target.value]
  });
};

// время
const timeIn = offerForm.querySelector('#timein');
const timeOut = offerForm.querySelector('#timeout');

const onTimeInChange = () => (timeOut.value = timeIn.value);
const onTimeOutChange = () => (timeIn.value = timeOut.value);

const clearForms = () => {
  offerForm.reset();
  resetValidation();
  resetMap();
  clearImageBlocks();
  slider.noUiSlider.reset();
};

const sendDataSuccessCallback = () => {
  renderSuccessMessage();
  adFormSubmitBtn.disabled = false;
  clearForms();
};

const sendDataErrorCallback = () => {
  renderPostErrorMessage();
  adFormSubmitBtn.disabled = false;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    adFormSubmitBtn.disabled = true;
    sendData(POST_URL, sendDataSuccessCallback, sendDataErrorCallback, new FormData(evt.target));
  }
};

const onFormReset = () => clearForms();

const addListeners = () => {
  addPhotoInputsListeners();
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

export { addAdFormAction, minValueType };
