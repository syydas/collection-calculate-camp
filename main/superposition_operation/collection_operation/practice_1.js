'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var sum = 0;
  for (var item of collection) {
    sum += item * 3 + 2;
  }
  return sum;
}

module.exports = hybrid_operation;

