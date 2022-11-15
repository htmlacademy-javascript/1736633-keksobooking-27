const offerForm = document.querySelector('.ad-form');

const pristine = new Pristine(offerForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
});

// const minValueType = {
//   bungalow: 0,
//   flat: 1000,
//   hotel: 3000,
//   house: 5000,
//   palace: 10000
// };

const roomField = document.querySelector('[name="rooms"]');
const capacityField = document.querySelector('[name="capacity"]');
const roomOption = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0']
};

function validateRoom() {
  return roomOption[roomField.value].includes(capacityField.value);
}

pristine.addValidator(roomField, validateRoom);
pristine.addValidator(capacityField, validateRoom);

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
