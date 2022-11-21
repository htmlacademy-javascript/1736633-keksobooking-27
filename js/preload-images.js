const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'webp'];
const DEFAULT_AVATAR_IMAGE = 'img/muffin-grey.svg';
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const avatarInput = document.querySelector('#avatar');
const photoInput = document.querySelector('#images');
const photoContainer = document.querySelector('.ad-form__photo');
let img;

const onPhotoInputChange = (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const result = reader.result;
      if (evt.target === avatarInput) {
        previewAvatar.src = result;
        return;
      }
      if (evt.target === photoInput) {
        if (!img) {
          img = document.createElement('img');
          img.src = result;
          img.style.width = '70px';
          img.style.height = '70px';
          photoContainer.appendChild(img);
          return;
        }
        img.src = result;
      }
    });
    reader.readAsDataURL(file);
  }
};

const clearImageBlocks = () => {
  previewAvatar.src = DEFAULT_AVATAR_IMAGE;
  photoContainer.innerHTML = '';
};

const addPhotoInputsListeners = () => {
  avatarInput.addEventListener('change', onPhotoInputChange);
  photoInput.addEventListener('change', onPhotoInputChange);
};

export { clearImageBlocks, addPhotoInputsListeners };
