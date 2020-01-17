'use strict';

let choose_divisible_integer = require("../../main/filter/two_collections_practice_3.js");

describe('choose_divisible_integer', function() {

  let collection_a = [4,7,9,25,16,21,64,32,35,49];
  let collection_b = [2,3,5];

  it('选出A集合中可以被B集合中整除的数', function() {
    let result = choose_divisible_integer(collection_a, collection_b);

    expect(result).toEqual([4,9,25,16,21,64,32,35])
  })

});
