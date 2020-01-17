function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  collection_b = collection_b.reduce(function(a, b) {
    return a.concat(b);
  });
  var res = [];
  for (var itemA of collection_a) {
    for (var itemB of collection_b) {
      if (itemA === itemB) {
        res.push(itemA);
      }
    }
  }
  return res;
}

module.exports = collect_same_elements;
