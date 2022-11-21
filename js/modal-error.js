const GET_ERROR_TEXT = 'Ошибка при загрузке данных';
const POST_ERROR_TEXT = 'Ошибка отправки объявления';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

let errorClone;


const createError = (text) => {
  errorClone = errorTemplate.cloneNode(true);
  errorClone.querySelector('.error__message').textContent = text;
  errorClone.addEventListener('click', () => errorClone.remove());
  document.body.append(errorClone);
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && errorClone) {
    errorClone.remove();
    evt.preventDefault();
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

export { renderGetErrorMessage, renderPostErrorMessage };
