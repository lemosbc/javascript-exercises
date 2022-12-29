const sumAll = function (i, j) {
  let sum = 0;
  if (typeof i != "number" || typeof j != "number") {
    return "ERROR";
  } else if (i < 0 || j < 0) {
    return "ERROR";
  } else if (i > j) {
    for (k = j; k <= i; k++) {
      sum = sum + k;
    }
  } else if (i < j) {
    for (m = i; m <= j; m++) {
      sum = sum + m;
    }
  } else {
    return "ERROR";
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
