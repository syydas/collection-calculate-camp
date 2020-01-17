"use strict";
let even_group_calculate_average = function(collection) {
  let res = collection.filter(function(num, index) {
    return index % 2 === 1 && num % 2 === 0; 
  });
  if (res.length == 0) {
    return [0];
  } else {
    let single = res.filter(function(num) {
      return num / 10 < 1;
    });
    let ten = res.filter(function(num) {
      return num / 10 >= 1 && num / 100 < 1;
    });
    let hundred = res.filter(function(num) {
      return num / 100 >= 1;
    });
    if (single.length == 0 && ten.length == 0) {
      return [
        hundred.reduce(function(num1, num2) {
          return num1 + num2;
        }) / hundred.length
      ];
    } else {
      return [
        single.reduce(function(a, b) {
          return a + b;
        }) / single.length,
        ten.reduce(function(a, b) {
          return a + b;
        }) / ten.length,
        hundred.reduce(function(a, b) {
          return a + b;
        }) / hundred.length
      ];
    }
  }
};
module.exports = even_group_calculate_average;
