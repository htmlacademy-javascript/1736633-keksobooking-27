import { minValueType } from './form-offers.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const roomsOption = {
  1: ['1'],
  2: ['2', '1'],
  3: ['3', '2', '1'],
  100: ['0'],
};

const offerForm = document.querySelector('.ad-form');
const titleField = document.querySelector('#title');
const priceField = document.querySelector('#price');
const capacityField = document.querySelector('#capacity');
const typeField = document.querySelector('#type');
const roomsField = document.querySelector('#room_number');

const pristine = new Pristine(offerForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--invalid'
});

const validateTitle = (value) => value.length >= MIN_TITLE_LENGTH && value.length <= MAX_TITLE_LENGTH;
const createTitleError = () => `Длина заголовка должна быть не менее ${MIN_TITLE_LENGTH} и не более ${MAX_TITLE_LENGTH} символов.`;

const validatePrice = () => priceField.value >= minValueType[typeField.value];
const createPriceError = () => `Цена должна быть больше ${minValueType[typeField.value]}`;

const validateRooms = () => roomsOption[roomsField.value].includes(capacityField.value);
const createRoomsError = () => {
  switch (roomsField.value) {
    case '1':
      return 'Размещение для одного гостя';
    case '2':
      return 'Размещение от одного гостя до двух гостей';
    case '3':
      return 'Размещение от одного гостя до трех гостей';
    case '100':
      return 'Не для гостей';
  }
};

const addValidator = () => {
  pristine.addValidator(titleField, validateTitle, createTitleError);
  pristine.addValidator(capacityField, validateRooms, createRoomsError);
  pristine.addValidator(priceField, validatePrice, createPriceError);
};

const validateForm = () => pristine.validate();
const resetValidation = () => pristine.reset();

export { addValidator, validateForm, resetValidation };
