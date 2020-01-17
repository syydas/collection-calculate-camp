'use strict';

function get_letter_interval(number_a, number_b) {
  let res = [];
  if (number_b > number_a) {
    for (let item = number_a; item <= number_b; item++) {
      res.push(String.fromCharCode(item + 96));
    }
  } else {
    for (let item = number_a; item >= number_b; item--) {
      res.push(String.fromCharCode(item + 96));
    }
  }
  return res;
}

module.exports = get_letter_interval;
