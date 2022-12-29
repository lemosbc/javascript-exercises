const removeFromArray = function (arr, itemToRemove) {
  if (arguments.length == 2) {
    arr = arr.filter((value) => value !== itemToRemove);
  } else {
    for (let i = 0; i < arguments.length; i++) {
      arr = arr.filter((value) => value !== arguments[i]);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
