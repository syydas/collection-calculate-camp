'use strict';

let collect_min_number = require('../../main/reduce/collect_min_number.js');

describe('collect_min_number', function () {

  let collection = [1, 8, 9, 21, 5];

  it('选出给定数字集合元素的最小值', function() {

    let result = collect_min_number(collection);
    expect(result).toEqual(1);
  });
});
