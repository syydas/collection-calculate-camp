"use strict";

function choose_no_repeat_number(collection) {
  let res = [collection[0]];
  for (let i = 1; i < collection.length; i++) {
    if (i === collection.indexOf(collection[i])) {
      res.push(collection[i]);
    }
  }
  return res;
}

module.exports = choose_no_repeat_number;
