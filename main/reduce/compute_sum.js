"use strict";

function calculate_elements_sum(collection) {
  return collection.reduce((num1, num2) => num1 + num2);
}

module.exports = calculate_elements_sum;
