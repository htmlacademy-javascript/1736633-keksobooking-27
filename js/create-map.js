import { createCard } from './create-popup.js';

const OFFERS_COUNT = 10;
const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const mainPin = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const itemPin = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 0,
    lng: 0,
  },
  {
    draggable: true,
    icon: mainPin,
  }
);

const initMap = (latLng) => {
  map.setView(latLng, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
    },
  ).addTo(map);

  mainPinMarker.setLatLng(latLng);
  mainPinMarker.addTo(map);
};

const createPinMarkers = (offers) => {
  offers.forEach((offer) => {
    const marker = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        icon: itemPin,
      }
    );

    marker.addTo(markerGroup).bindPopup(createCard(offer));
  });
};

const setPins = (offers) => {
  markerGroup.clearLayers();
  createPinMarkers(offers.slice(0, OFFERS_COUNT));
};

const setOnMapLoad = (cb) => {
  map.on('load', cb);
};

const setOnPinMove = (cb) => {
  mainPinMarker.on('move', (evt) => cb(evt.target.getLatLng()));
};

export { initMap, setOnMapLoad, setOnPinMove, setPins };
