"use strict";
let calculate_average = function(collection) {
  let arr = collection.filter((value, index) => index % 2);
  return arr.reduce((num1, num2) => num1 + num2) / arr.length;
};

module.exports = calculate_average;
