"use strict";
var calculate_average = function(collection) {
  var sum = 0;
  var count = 0;
  for (var key = 1; key < collection.length; key++) {
      if (0 === key % 2) {
        sum += collection[key];
        count++;
      }
  }
  var average = sum / count;
  return average;
};

module.exports = calculate_average;
