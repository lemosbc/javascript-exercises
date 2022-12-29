const reverseString = function (str) {
  let charcArray = str.split("");
  charcArray.reverse();
  let reverseString = charcArray.join("");
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
