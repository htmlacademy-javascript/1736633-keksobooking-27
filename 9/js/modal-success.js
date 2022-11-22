const successTemplate = document.querySelector('#success').content.querySelector('.success');

let successClone = null;

const createSuccess = () => {
  successClone = successTemplate.cloneNode(true);
  document.body.append(successClone);
  successClone.addEventListener('click', closeSuccess);
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && successClone) {
    closeSuccess(evt);
  }
};

function closeSuccess(evt) {
  evt.preventDefault();
  document.removeEventListener('keydown', onDocumentKeydown);
  successClone.remove();
  successClone = null;
}

const renderSuccessMessage = () => {
  createSuccess();
  document.addEventListener('keydown', onDocumentKeydown);
};

export { renderSuccessMessage };
