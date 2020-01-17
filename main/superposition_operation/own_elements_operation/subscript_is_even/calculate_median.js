"use strict";
let calculate_median = function(collection) {
  let arr = collection.filter((value, index) => index % 2);
  let flag = 0;
  if (arr.length % 2) {
    flag = parseInt(arr.length / 2);
    return Math.ceil(arr[flag]);
  } else {
    flag = arr.length / 2;
    return Math.ceil((arr[flag - 1] + arr[flag]) / 2);
  }
};
module.exports = calculate_median;
