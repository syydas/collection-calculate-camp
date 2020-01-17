'use strict';

function calculate_elements_sum(collection) {
  var sum = 0;
  for (var item of collection) {
    sum += item;
  }
  return sum;
}

module.exports = calculate_elements_sum;

