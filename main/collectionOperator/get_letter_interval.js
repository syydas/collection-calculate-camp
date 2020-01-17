'use strict';

function get_letter_interval(number_a, number_b) {
  var res = [];
  if (number_b > number_a) {
    for (var item = number_a; item <= number_b; item++) {
      res.push(String.fromCharCode(item + 96));
    }
  } else if (number_a > number_b) {
    for (var item = number_a; item >= number_b; item--) {
      res.push(String.fromCharCode(item + 96));
    }
  } else if (number_a === number_b) {
    res.push(String.fromCharCode(number_a + 96));
  }
  return res;
}

module.exports = get_letter_interval;
