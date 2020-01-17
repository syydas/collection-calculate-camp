'use strict';

function collect_all_even(collection) {
  return collection.filter(item => (0 === item % 2));
}

module.exports = collect_all_even;

