"use strict";

function median_to_letter(collection) {
  let average = Math.ceil(
    collection.reduce((num1, num2) => num1 + num2) / collection.length
  );
  let flag = parseInt(average / 27);
  if (flag === 0) {
    return String.fromCharCode(average + 96);
  } else {
    let letter = String.fromCharCode((average % 26) + 96);
    return String.fromCharCode(flag + 96).concat(letter);
  }
}

module.exports = median_to_letter;
