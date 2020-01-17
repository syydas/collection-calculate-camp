'use strict';

let choose_even = require("../../main/filter/choose_even.js");

describe('choose_even', function() {

  let collection = [0, 1, 2, 3, 4, 6];

  it('从collection中选出偶数', function() {
    let result = choose_even(collection);

    expect(result).toEqual([0, 2, 4, 6]);
  })
});
