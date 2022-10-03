function randomNumber (min, max) {
  if ((min > max) && ((min >= 0) && (max >= 0))) {
    swapMinMax(min, max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // mdm web docs
  }

  else if ((min >= 0) && (max >= 0)){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return NaN;
}

function swapMinMax (min, max){
  const temp = min;
  min = max;
  max = temp;
}

randomNumber(4, 6);


function randomPosition (min, max, decimalPoint) {
  if ((min > max) && ((min >= 0) && (max >= 0))){
    swapMinMax(min, max);
    return ((Math.random() * (max - min)) + min).toFixed(decimalPoint);
  }

  else if ((min >= 0) && (max >= 0)){
    return ((Math.random() * (max - min)) + min).toFixed(decimalPoint);
  }

  return NaN;
}

randomPosition(7, 10, 4);
