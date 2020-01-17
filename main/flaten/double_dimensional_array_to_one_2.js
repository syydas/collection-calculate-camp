"use strict";

function double_to_one(collection) {
  let res = [];
  for (let item of collection) {
    for (let itemIn of item) {
      if (-1 === res.indexOf(itemIn)) {
        res.push(itemIn);
      }
    }
  }
  return res;
}

module.exports = double_to_one;
