const repeatString = function (str, num) {
  let concatString;
  if (num >= 0) {
    concatString = str.repeat(num);
  } else {
    concatString = "ERROR";
  }
  return concatString;
};

// Do not edit below this line
module.exports = repeatString;
