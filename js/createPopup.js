import { createOffers } from './createOffers.js';

const createPopup = () => {
  const OFFERS = createOffers();

  const OFFERS_LIST = document.querySelector('#map-canvas');
  const TEMPLATE_CARD = document.querySelector('#card').content.querySelector('.popup');
  const TEMPLATE_PIC = TEMPLATE_CARD.querySelector('.popup__photo');

  const ROOM_TYPES = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель'
  };

  OFFERS.forEach((offer) => {
    const OFFER_ITEM = TEMPLATE_CARD.cloneNode(true);
    OFFER_ITEM.querySelector('.popup__title').textContent = offer.offer.title;
    OFFER_ITEM.querySelector('.popup__text--address').textContent = offer.offer.addres;
    OFFER_ITEM.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь`;
    OFFER_ITEM.querySelector('.popup__type').textContent = ROOM_TYPES[offer.offer.type];
    OFFER_ITEM.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;
    OFFER_ITEM.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;

    //Удобства
    const FEATURES_CONTAINER = OFFER_ITEM.querySelector('.popup__features');
    const FEATURES_LIST = FEATURES_CONTAINER.querySelectorAll('.popup__feature');
    const CUR_FEATURES = offer.offer.features;
    FEATURES_LIST.forEach((featuresListItem) => {
      const isNecessary = CUR_FEATURES.some(
        (feature) => featuresListItem.classList.contains(`popup__feature--${feature}`),
      );

      if (!isNecessary) {
        featuresListItem.remove();
      }
    });

    //Описание
    OFFER_ITEM.querySelector('.popup__description').textContent = offer.offer.description;

    //Фотокарточки
    const PHOTOS_SOURCES = offer.offer.photos;
    const IMG_LIST = OFFER_ITEM.querySelector('.popup__photos');
    IMG_LIST.textContent = '';
    PHOTOS_SOURCES.forEach((source) => {
      const PHOTO_ITEM = TEMPLATE_PIC.cloneNode(true);
      PHOTO_ITEM.src = source;
      IMG_LIST.appendChild(PHOTO_ITEM);
    });

    //Аватар
    OFFER_ITEM.querySelector('.popup__avatar').src = offer.author.avatar;

    //Добавление в список
    OFFERS_LIST.appendChild(OFFER_ITEM);
  });
};


export { createPopup };
