import { getRandomNumber } from './util.js';

const OFFER_COUNTER = 10;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const createOffer = () => {

  const location = {
    lat: getRandomNumber(35.65000, 35.70000, 5),
    lng: getRandomNumber(139.70000, 139.80000, 5)
  };

  const createAvatarSrc = () => {
    let number = getRandomNumber(1, 10);

    if (number < 10) {
      number = `0${number}`;
    }
    return `img/avatars/user${number}.png`;
  };

  const getRandomArray = (curArray) => {
    const lengthOfArray = getRandomNumber(1, curArray.length);
    const array = [];

    while (array.length < lengthOfArray) {
      const indexOfEl = getRandomNumber(0, curArray.length - 1);
      const el = curArray[indexOfEl];

      if (!array.includes(el)) {
        array.push(el);
      }
    }
    return array;
  };

  return {
    author: {
      avatar: createAvatarSrc(),
    },
    offer: {
      title: 'Гостиница "у кекса"',
      address: `${location.lat} , ${location.lng}`,
      price: getRandomNumber(1, 10000),
      type: TYPES[getRandomNumber(1, TYPES.length - 1)],
      rooms: getRandomNumber(1, 4),
      guests: getRandomNumber(1, 10),
      checkin: TIMES[getRandomNumber(1, TIMES.length - 1)],
      checkout: TIMES[getRandomNumber(1, TIMES.length - 1)],
      features: getRandomArray(FEATURES),
      description: 'Лучшая гостиница!',
      photos: getRandomArray(PHOTOS),
    },
    location,
  };
};

const createOffers = () => Array.from({ length: OFFER_COUNTER }, createOffer);

export { createOffers };
