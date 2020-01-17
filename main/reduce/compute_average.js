"use strict";

function compute_average(collection) {
  return collection.reduce((num1, num2) => num1 + num2) / collection.length;
}

module.exports = compute_average;
