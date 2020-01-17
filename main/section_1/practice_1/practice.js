function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
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
