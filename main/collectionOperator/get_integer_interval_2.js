'use strict';

function get_integer_interval_2(number_a, number_b) {
  let res = [];
  if (number_b > number_a) {
    let i = 0;
    while (number_b >= number_a) {
      if (0 === number_a % 2) {
        res[i] = number_a;
        i++;
        number_a++;
      } else {
        number_a++;
      }
    }
  } else if (number_a > number_b) {
    let i = 0;
    while (number_a >= number_b) {
      if (0 === number_a % 2) {
        res[i] = number_a;
        i++;
        number_a--;
      } else {
        number_a--;
      }
    }
  } else {
    if(!(number_a % 2)) {
      res.push(number_a);
    }
  }
  return res;  
}

module.exports = get_integer_interval_2;
