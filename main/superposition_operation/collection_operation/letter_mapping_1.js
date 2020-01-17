"use strict";

function even_to_letter(collection) {
  //在这里写入代码
  var tempArr = collection.filter(function(item) {
    return item % 2 === 0;
  });
  return tempArr.map(item => String.fromCharCode(item + 96));
}

module.exports = even_to_letter;
