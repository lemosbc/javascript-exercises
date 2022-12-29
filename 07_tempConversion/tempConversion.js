const convertToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  let roundCelsius = celsius.toFixed(1);
  return +roundCelsius;
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  let roundFahrenheit = fahrenheit.toFixed(1);
  return +roundFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
