"use strict";

function average_uneven(collection) {
  let arr = collection.filter(item => item % 2);
  return arr.reduce((num1, num2) => num1 + num2) / arr.length;
}

module.exports = average_uneven;
