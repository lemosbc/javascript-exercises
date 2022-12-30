const repeatString = function (str, num) {
  let concatString;
  if (num >= 0) {
    concatString = str.repeat(num);
  } else {
    concatString = "ERROR";
  }
  return concatString;
};

// Alternatively an for loop could be used adding
// an instance of the word "num" number of times

// Do not edit below this line
module.exports = repeatString;
