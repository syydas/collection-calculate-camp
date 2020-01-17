"use strict";

function amount_even(collection) {
  //在这里写入代码
  var sum = 0;
  for (var item of collection) {
    if (0 === item % 2) {
      sum += item;
    }
  }
  return sum;
}

module.exports = amount_even;
