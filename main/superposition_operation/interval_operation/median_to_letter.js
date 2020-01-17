"use strict";

function median_to_letter(collection) {
  //在这里写入代码
  var sum = 0;
  for (var item of collection) {
    sum += item;
  }
  var average = Math.ceil(sum / collection.length);
  var flag = parseInt(average / 27);
  if (flag === 0) {
    return String.fromCharCode(average + 96);
  } else {
    var letter = String.fromCharCode((average % 26) + 96);
    return String.fromCharCode(flag + 96).concat(letter);
  }
}

module.exports = median_to_letter;
