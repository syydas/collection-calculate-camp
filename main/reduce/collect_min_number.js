'use strict';

function collect_min_number(collection) {
  return collection.reduce((pre, cur) => (cur > pre ? pre : cur));
}

module.exports = collect_min_number;

