"use strict";

function median_to_letter(collection) {
  //在这里写入代码
  let sum = 0;
  for (let item of collection) {
    sum += item;
  }
  let average = Math.ceil(sum / collection.length);
  let flag = parseInt(average / 27);
  if (flag === 0) {
    return String.fromCharCode(average + 96);
  } else {
    let letter = String.fromCharCode((average % 26) + 96);
    return String.fromCharCode(flag + 96).concat(letter);
  }
}

module.exports = median_to_letter;
