"use strict";

function get_letter_interval_2(number_a, number_b) {
  let res = [];
  if (number_b > number_a) {
    for (let item = number_a; item <= number_b; item++) {
      res.push(numberMapToLetter(item));
    }
  } else {
    for (let item = number_a; item >= number_b; item--) {
      res.push(numberMapToLetter(item));
    }
  }
  return res;
}

function numberMapToLetter(num) {
  if (num <= 26) {
    return String.fromCharCode(num + 96);
  } else {
    let letter = String.fromCharCode((num - 1) % 26 + 97);
    return String.fromCharCode((num - 1) / 26 + 96).concat(letter); 
  }
}

module.exports = get_letter_interval_2;
