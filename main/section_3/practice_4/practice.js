function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collectionC = [];
  var tempArr = [];
  for (var itemA of collection_a) {
    if (-1 === tempArr.indexOf(itemA)) {
      tempArr.push(itemA);
    }
  }
  for (var itemTemp of tempArr) {
    if (itemTemp.includes("-")) {
      var helpString = itemTemp.split("");
      var count = 0;
      for (var z = 0; z < helpString.length; z++) {
        if ("-" === helpString[z]) {
          count = z;
        }
      }
      collectionC.push({
        key: helpString[count - 1],
        count: parseInt(helpString[count + 1])
      });
    } else {
      var countArr = collection_a.filter(function(sameItem) {
        return sameItem === itemTemp;
      });
      collectionC.push({ key: itemTemp, count: countArr.length });
    }
  }

  var collectionB = object_b.value;
  for (var itemC of collectionC) {
    for (var itemB of collectionB) {
      if (itemC.key === itemB) {
        itemC.count -= parseInt(itemC.count / 3);
      }
    }
  }
  return collectionC;
}

module.exports = create_updated_collection;
