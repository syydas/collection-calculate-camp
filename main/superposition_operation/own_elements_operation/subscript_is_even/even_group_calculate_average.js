"use strict";
let even_group_calculate_average = function(collection) {
  let res = collection.filter((num, index) => index % 2 === 1 && num % 2 === 0);
  if (res.length == 0) {
    return [0];
  } else {
    let single = res.filter(num => num / 10 < 1);
    let ten = res.filter(num => num / 10 >= 1 && num / 100 < 1);
    let hundred = res.filter(num => num / 100 >= 1);
    if (single.length == 0 && ten.length == 0) {
      return [hundred.reduce((num1, num2) => num1 + num2) / hundred.length];
    } else {
      return [
        single.reduce((a, b) => a + b) / single.length,
        ten.reduce((a, b) => a + b) / ten.length,
        hundred.reduce((a, b) => a + b) / hundred.length
      ];
    }
  }
};
module.exports = even_group_calculate_average;
