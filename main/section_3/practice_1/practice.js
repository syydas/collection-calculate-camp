function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collectionB = object_b.value;
  for (var itemA of collection_a) {
    for (var itemB of collectionB) {
      if (itemA.key === itemB) {
        itemA.count -= 1;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
