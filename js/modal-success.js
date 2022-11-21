const successTemplate = document.querySelector('#success').content.querySelector('.success');

let successClone;

const createSuccess = () => {
  successClone = successTemplate.cloneNode(true);
  successClone.addEventListener('click', () => successClone.remove());
  document.body.append(successClone);
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && successClone) {
    evt.preventDefault();
    successClone.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const renderSuccessMessage = () => {
  createSuccess();
  document.addEventListener('keydown', onDocumentKeydown);
};

export { renderSuccessMessage };
