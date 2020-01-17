"use strict";
let even_asc_odd_desc = function(collection) {
  let odd = [];
  let even = [];
  let res = [];
  for (let item of collection) {
    if (item % 2 == 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  }
  res = [
    even.sort(function(a, b) {
      return a - b;
    }),
    odd.sort(function(a, b) {
        return b - a;
      })
  ];
  res = res.reduce(function(a, b) {
    return a.concat(b);
  });
  return res;
};
module.exports = even_asc_odd_desc;
