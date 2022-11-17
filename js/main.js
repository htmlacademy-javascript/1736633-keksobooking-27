import { createOffers } from './create-offers.js';
import { setAddress, addAdFormAction } from './form-offers.js';
import { initMap, setOnMapLoad, setOnPinMove, setPins } from './create-map.js';

const START_COORDINATION = {
  lat: 35.66023,
  lng: 139.73007
};

const offers = createOffers();

setOnMapLoad(() => {
  setPins(offers);
  setAddress(START_COORDINATION);
  setOnPinMove(setAddress);
});

initMap(START_COORDINATION);

addAdFormAction();
