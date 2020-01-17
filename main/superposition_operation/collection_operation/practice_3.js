"use strict";

function hybrid_operation_to_uneven(collection) {
  return collection
    .filter(item => item % 2)
    .map(item => item * 3 + 5)
    .reduce((num1, num2) => num1 + num2);
}

module.exports = hybrid_operation_to_uneven;
