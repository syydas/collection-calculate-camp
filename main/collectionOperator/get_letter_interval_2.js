"use strict";

function get_letter_interval_2(number_a, number_b) {
  var res = [];
  if (number_b > number_a) {
    for (var item = number_a; item <= number_b; item++) {
      res.push(numberMapToLetter(item));
    }
  } else if (number_a > number_b) {
    for (var item = number_a; item >= number_b; item--) {
      res.push(numberMapToLetter(item));
    }
  } else if (number_a === number_b) {
    res.push(numberMapToLetter(number_a));
  }
  return res;
}

function numberMapToLetter(num) {
  if (num <= 26) {
    return String.fromCharCode(num + 96);
  } else {
    var letter = String.fromCharCode((num - 1) % 26 + 97);
    return String.fromCharCode((num - 1) / 26 + 96).concat(letter); 
  }
}

module.exports = get_letter_interval_2;
