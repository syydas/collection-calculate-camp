function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let collectionC = [];
  let tempArr = [];
  for (let itemA of collection_a) {
    if (-1 === tempArr.indexOf(itemA)) {
      tempArr.push(itemA);
    }
  }
  for (let itemTemp of tempArr) {
    let countArr = collection_a.filter(function(sameItem) {
      return sameItem === itemTemp;
    });
    collectionC.push({ key: itemTemp, count: countArr.length });
  }
  let collectionB = object_b.value;
  for (let itemC of collectionC) {
    for (let itemB of collectionB) {
      if (itemC.key === itemB) {
        itemC.count -= parseInt(itemC.count / 3);
      }
    }
  }
  return collectionC;
}

module.exports = create_updated_collection;
