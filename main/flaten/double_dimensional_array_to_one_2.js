"use strict";

function double_to_one(collection) {
  let res = new Set(collection.flat());
  return [...res];
}

module.exports = double_to_one;
