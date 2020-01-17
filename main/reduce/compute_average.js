'use strict';

function compute_average(collection) {
  /*let sum = collection.reduce((num1, num2) => {
    return num1 + num2;
  });*/
  let sum = 0;
  for (let item of collection) {
    sum += item;
  }
  let average = sum / collection.length;
  return average;
}

module.exports = compute_average;

