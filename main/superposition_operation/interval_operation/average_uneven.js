"use strict";

function average_uneven(collection) {
  //在这里写入代码
  var sum = 0;
  var count = 0;
  for (var item of collection) {
    if (0 !== item % 2) {
      sum += item;
      count++;
    }
  }
  var average = sum / count;
  return average;
}

module.exports = average_uneven;
