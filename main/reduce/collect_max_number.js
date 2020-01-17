"use strict";

function collect_max_number(collection) {
  return collection.reduce((pre, cur) => (cur > pre ? cur : pre));
}

module.exports = collect_max_number;
