/* 
Fahrenheit to Celsius formula: (Fahrenheit - 32) / 1.8; 
Celsius to Fahrenheit formula: Celsius * 1.8 + 32;
Use Math.round(x * 10) / 10 to round to 1 decimal, but only if there is a decimal. 
*/
const ftoc = function(fahrenheit) {
  return Math.round(((fahrenheit - 32) / 1.8) *10) / 10;
};

const ctof = function(celsius) {
  return Math.round((celsius * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};