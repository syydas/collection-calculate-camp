"use strict";

function even_to_letter(collection) {
  //在这里写入代码
  return collection
    .filter(item => !(item % 2))
    .map(item => String.fromCharCode(item + 96));
}

module.exports = even_to_letter;
