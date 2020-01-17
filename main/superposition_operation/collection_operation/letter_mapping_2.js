"use strict";

function average_to_letter(collection) {
  let average = Math.ceil(
    collection.reduce((num1, num2) => num1 + num2) / collection.length
  );
  return String.fromCharCode(average + 96);
}

module.exports = average_to_letter;
