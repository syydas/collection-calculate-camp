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
