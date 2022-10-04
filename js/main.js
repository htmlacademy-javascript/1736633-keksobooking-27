const getRandomNumber = (min, max, count = 0) => {
  if (min < 0 || max < 0 || max === min) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max , min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return +((Math.random() * (max - min)) + min).toFixed(count);
};

getRandomNumber();
