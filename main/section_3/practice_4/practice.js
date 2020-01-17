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
    if (itemTemp.includes("-")) {
      let helpString = itemTemp.split("");
      let count = 0;
      for (let z = 0; z < helpString.length; z++) {
        if ("-" === helpString[z]) {
          count = z;
        }
      }
      collectionC.push({
        key: helpString[count - 1],
        count: parseInt(helpString[count + 1])
      });
    } else {
      let countArr = collection_a.filter(function(sameItem) {
        return sameItem === itemTemp;
      });
      collectionC.push({ key: itemTemp, count: countArr.length });
    }
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
