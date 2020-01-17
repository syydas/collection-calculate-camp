"use strict";

function average_uneven(collection) {
  //在这里写入代码
  let sum = 0;
  let count = 0;
  for (let item of collection) {
    if (0 !== item % 2) {
      sum += item;
      count++;
    }
  }
  let average = sum / count;
  return average;
}

module.exports = average_uneven;
