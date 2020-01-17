"use strict";

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(itemA =>
    collection_b.some(itemB => !(itemA % itemB))
  );
}

module.exports = choose_divisible_integer;
