"use strict";
let calculate_average = function(collection) {
  let sum = 0;
  let count = 0;
  for (let key = 1; key < collection.length; key++) {
      if (0 === key % 2) {
        sum += collection[key];
        count++;
      }
  }
  let average = sum / count;
  return average;
};

module.exports = calculate_average;
