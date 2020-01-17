"use strict";

function amount_even(collection) {
  return collection
    .filter(item => !(item % 2))
    .reduce((num1, num2) => num1 + num2);
}

module.exports = amount_even;
