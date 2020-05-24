/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const result = arr.filter(
    (eachNum) => arr.includes(eachNum * 2) && eachNum !== 0
  );
  console.log(result);
  if (result.length > 0) {
    return true;
  } else {
    return false;
  }
};
