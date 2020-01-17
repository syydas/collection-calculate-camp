function count_same_elements(collection) {
  let res = [];
  let obj = {};
  collection.forEach(element => {
    let ele = element.split(/[:\-\[\]]/);
    if (obj[ele[0]] == null) {
      obj[ele[0]] = ele.length === 1 ? 1 : parseInt(ele[1]);
    } else {
      obj[ele[0]] += ele.length === 1 ? 1 : parseInt(ele[1]);
    }
  });
  for (let item in obj) {
    res.push({ name: item, summary: obj[item] });
  } 
  return res;
}

module.exports = count_same_elements;
