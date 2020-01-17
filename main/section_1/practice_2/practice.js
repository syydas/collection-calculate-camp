function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  collection_b = collection_b.reduce(function(a, b) {
    return a.concat(b);
  });
  let res = [];
  for (let itemA of collection_a) {
    for (let itemB of collection_b) {
      if (itemA === itemB) {
        res.push(itemA);
      }
    }
  }
  return res;
}

module.exports = collect_same_elements;
