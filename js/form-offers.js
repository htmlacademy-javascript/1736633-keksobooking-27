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

//цена слайдер
const sliderElement = offerForm.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 1000,
    max: 100000,
  },
  start: 1000,
  step: 500,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});

const onTypeFieldChange = (evt) => {
  priceField.min = minValueType[evt.target.value];
  priceField.value = minValueType[evt.target.value];
  sliderElement.noUiSlider.updateOptions({
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

//координаты
const addressField = offerForm.querySelector('#address');

const setAddress = ({ lat, lng }) => {
  addressField.value = `${lat.toFixed(6)} , ${lng.toFixed(6)}`;
};

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

export { addAdFormAction, setAddress };
