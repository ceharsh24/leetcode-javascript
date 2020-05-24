/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const result = [];
  if (nums.length === 1) {
    result.push(0);
    return result;
  } else {
    nums.forEach((eachNum) => {
      const smallerNumberCount = nums.filter(
        (filterEachNum) => filterEachNum < eachNum
      );
      result.push(smallerNumberCount.length);
    });
    return result;
  }
};
