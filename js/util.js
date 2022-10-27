const getRandomNumber = (min, max, count = 0) => {
  if (min < 0 || max < 0 || max === min) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (count) {
    return +((Math.random() * (max - min)) + min).toFixed(count);
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { getRandomNumber };
