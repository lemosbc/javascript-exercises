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

// Alternative but similar answer:
// var removeFromArray = function(...args) {
//    const array = args[0] // args[0] is the original array
//    return array.filter(val => !args.includes(val)) // subsequent args are items to remove
//}

// Do not edit below this line
module.exports = removeFromArray;
