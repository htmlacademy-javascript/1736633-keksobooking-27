const GET_ERROR_TEXT = 'Ошибка при загрузке данных';
const POST_ERROR_TEXT = 'Ошибка отправки объявления';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
let errorClone;
let successClone;

const createError = (text) => {
  errorClone = errorTemplate.cloneNode(true);
  errorClone.querySelector('.error__message').textContent = text;
  errorClone.addEventListener('click', () => errorClone.remove());
  document.body.append(errorClone);
};

const onDocumentKeydown = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Escape' && errorClone) {
    errorClone.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
  if (evt.key === 'Escape' && successClone) {
    successClone.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const renderGetErrorMessage = () => {
  createError(GET_ERROR_TEXT);
  document.addEventListener('keydown', onDocumentKeydown);
};

const renderPostErrorMessage = () => {
  createError(POST_ERROR_TEXT);
  document.addEventListener('keydown', onDocumentKeydown);
};

const createSuccess = () => {
  successClone = successTemplate.cloneNode(true);
  successClone.addEventListener('click', () => successClone.remove());
  document.body.append(successClone);
};

const renderSuccessMessage = () => {
  createSuccess();
  document.addEventListener('keydown', onDocumentKeydown);
};

export { renderGetErrorMessage, renderPostErrorMessage, renderSuccessMessage };
