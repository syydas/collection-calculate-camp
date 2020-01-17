'use strict';

let collect_max_number = require('../../main/reduce/collect_max_number.js');

describe('collect_max_number', function () {

  let collection = [1, 2, 3, 4, 5];

  it('选出给定数字集合元素的最大值', function() {

    let result = collect_max_number(collection);
    expect(result).toEqual(5);
  });
});
