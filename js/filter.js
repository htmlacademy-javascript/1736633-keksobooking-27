const DEFAULT_VALUE = 'any';
const PriceTypes = {
  LOW: 10000,
  HIGH: 50000,
};

const filterTypeField = document.querySelector('#housing-type');
const filterPriceField = document.querySelector('#housing-price');
const filterRoomsField = document.querySelector('#housing-rooms');
const filterGuestsField = document.querySelector('#housing-guests');

const filterByType = ({ type }) => filterTypeField.value === type || filterTypeField.value === DEFAULT_VALUE;
const filterByRooms = ({ rooms }) => +filterRoomsField.value === rooms || filterRoomsField.value === DEFAULT_VALUE;
const filterByGuests = ({ guests }) => +filterGuestsField.value === guests || filterGuestsField.value === DEFAULT_VALUE;


const filterByPrice = ({ price }) => {
  switch (filterPriceField.value) {
    case 'low':
      return price <= PriceTypes['LOW'];

    case 'middle':
      return price > PriceTypes['LOW'] && price <= PriceTypes['HIGH'];

    case 'high':
      return price > PriceTypes['HIGH'];

    default:
      return true;
  }
};


const filterByFeatures = ({ features }) => {
  const currentFeatures = document.querySelectorAll('.map__checkbox:checked');

  if (features) {
    return Array.from(currentFeatures).every((item) => features.includes(item.value));
  }

  return false;
};

const setDataRanking = (data) =>
  data
    .reduce((rankedData, item) => {
      const rank = item.offer.features && item.offer.features.length ? item.offer.features.length : 0;
      item.offer.rank = rank;
      rankedData.push(item);
      return rankedData;
    }, [])
    .sort((a, b) => b.offer.rank - a.offer.rank);

const filterData = ({ offer }) =>
  filterByType(offer) &&
  filterByPrice(offer) &&
  filterByRooms(offer) &&
  filterByGuests(offer) &&
  filterByFeatures(offer);

export { setDataRanking, filterData };
