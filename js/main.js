import { createCard } from './create-popup.js';
import { createOffers } from './create-offers.js';
import { addAdFormAction } from './form-offers.js';

const map = document.querySelector('.map__canvas');
const offer = createOffers()[0];

map.append(createCard(offer));

addAdFormAction();
