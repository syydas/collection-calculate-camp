"use strict";

function double_to_one(collection) {
  var res = [];
  for (var item of collection) {
    for (var itemIn of item) {
      if (-1 === res.indexOf(itemIn)) {
        res.push(itemIn);
      }
    }
  }
  return res;
}

module.exports = double_to_one;
