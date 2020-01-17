function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let collectionC = [];
  let tempArr = [];
  collection_a.forEach(itemA => {
    if (-1 === tempArr.indexOf(itemA)) {
      tempArr.push(itemA);
    }
  });
  tempArr.forEach(itemTemp => {
    let countArr = collection_a.filter(function(sameItem) {
      return sameItem === itemTemp;
    });
    collectionC.push({ key: itemTemp, count: countArr.length });
  });
  object_b.value.map(itemB => {
    for (let itemC of collectionC) {
      if (itemC.key === itemB) {
        itemC.count -= parseInt(itemC.count / 3);
      }
    }
  });
  return collectionC;
}

module.exports = create_updated_collection;
