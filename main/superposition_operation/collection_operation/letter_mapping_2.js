'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let sum = 0;
  for (let item of collection) {
    sum += item;
  }
  let average = Math.ceil(sum / collection.length);
  return String.fromCharCode(average +96);
}

module.exports = average_to_letter;

