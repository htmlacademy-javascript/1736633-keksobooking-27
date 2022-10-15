const getRandomNumber = (min, max, count = 0) => {
  if (min < 0 || max < 0 || max === min) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return +((Math.random() * (max - min)) + min).toFixed(count);
};

getRandomNumber();

const typeArray = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkTimeArray = ['12:00', '13:00', '14:00'];
const featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosArray = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const offerArray = [];

const buildArray = () => {

  for (let i = 0; i < 10; i++) {

    const getPhotoNum = () => {
      let number = getRandomNumber(1, 10);

      if (number < 10) {
        number = `0${number}`;
      }
      return number;
    };

    const location = {
      lat: getRandomNumber(35.65000, 35.70000, 5),
      lng: getRandomNumber(139.70000, 139.80000, 5)
    };

    const getFeaturesArray = (curArray) => {
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

    const author = {
      avatar: `img/avatars/user${getPhotoNum()}.png`,
    };

    const offer = {
      title: 'Гостиница "у кекса"',
      addres: `${location.lat} , ${location.lng}`,
      price: getRandomNumber(1, 10000),
      type: typeArray[getRandomNumber(1, typeArray.length - 1)],
      rooms: getRandomNumber(1, 4),
      guests: getRandomNumber(1, 10),
      checkin: checkTimeArray[getRandomNumber(1, checkTimeArray.length - 1)],
      checkout: checkTimeArray[getRandomNumber(1, checkTimeArray.length - 1)],
      features: getFeaturesArray(featuresArray),
      description: 'Лучшая гостиница!',
      photos: getFeaturesArray(photosArray),
    };

    offerArray[i] = {
      offer: offer,
      author: author
    };
  }
};


buildArray();

