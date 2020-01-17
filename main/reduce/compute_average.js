'use strict';

function compute_average(collection) {
  /*var sum = collection.reduce((num1, num2) => {
    return num1 + num2;
  });*/
  var sum = 0;
  for (var item of collection) {
    sum += item;
  }
  var average = sum / collection.length;
  return average;
}

module.exports = compute_average;

