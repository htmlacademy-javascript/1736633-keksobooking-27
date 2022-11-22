import { createCard } from './create-popup.js';
import { addAdFormAction } from './form-offers.js';
import { enableAddForm, enableFilterForm } from './page-states.js';
import { getData } from './api.js';
import { renderGetErrorMessage } from './modal-error.js';
import { filterData, setDataRanking } from './filter.js';
import { debounce } from './util.js';

const START_COORDINATION = {
  lat: 35.66023,
  lng: 139.73007
};

const OFFERS_COUNT = 10;
const DECIMALS = 5;
const MAP_ZOOM = 12;
const GET_URL = 'https://27.javascript.pages.academy/keksobooking/data';
const TIME_INTERVAL = 500;

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const addressInput = document.querySelector('#address');
const formFilter = document.querySelector('.map__filters');

let interactiveMarker;

const setStartAddressValue = () => {
  addressInput.value = `${START_COORDINATION.lat}, ${START_COORDINATION.lng}`;
};

const setLocation = (target) => {
  const location = target.getLatLng();
  addressInput.value = `${location.lat.toFixed(DECIMALS)}, ${location.lng.toFixed(DECIMALS)}`;
};

const createPinMarkers = (data) => {
  markerGroup.addTo(map);
  setDataRanking(data)
    .slice()
    .filter(filterData)
    .slice(0, OFFERS_COUNT)
    .forEach((offer) => {
      const marker = L.marker(
        offer.location,
        {
          icon: L.icon({
            iconUrl: './img/pin.svg',
            iconSize: [40, 40],
            iconAnchor: [20, 40],
          }),
        },
      );
      marker.addTo(markerGroup).bindPopup(createCard(offer));
    });
};

const onMarkerMove = (evt) => setLocation(evt.target);

const resetMap = () => {
  interactiveMarker.setLatLng(START_COORDINATION);
  map.setView(START_COORDINATION, MAP_ZOOM);
  formFilter.reset();
  setTimeout(() => setStartAddressValue());
  const changeEvent = new CustomEvent('change');
  formFilter.dispatchEvent(changeEvent);
};

const activateAddForm = () => {
  setStartAddressValue();
  addAdFormAction();
  enableAddForm();
};

const setMapChange = (data) => {
  formFilter.addEventListener(
    'change',
    debounce(() => {
      markerGroup.clearLayers();
      createPinMarkers(data);
    }, TIME_INTERVAL),
  );
};

const getDataCallback = (data) => {
  createPinMarkers(data);
  enableFilterForm();
  setMapChange(data);
};

const initMap = () => {
  map.on('load', () => {
    activateAddForm();
    getData(GET_URL, getDataCallback, renderGetErrorMessage);
  })
    .setView(START_COORDINATION, MAP_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      foo: 'bar',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  interactiveMarker = L.marker(START_COORDINATION,
    {
      draggable: 'true',
      icon: L.icon({
        iconUrl: './img/main-pin.svg',
        iconSize: [52, 52],
        iconAnchor: [26, 52],
      }),
    }).addTo(map);

  interactiveMarker.on('move', onMarkerMove);
};

export { initMap, resetMap };
