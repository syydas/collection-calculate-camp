'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum = 0;
  for (var item of collection) {
    sum += item;
  }
  var average = Math.ceil(sum / collection.length);
  return String.fromCharCode(average +96);
}

module.exports = average_to_letter;

