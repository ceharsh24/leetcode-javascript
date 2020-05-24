/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxValue = Math.max(...candies);
  const result = candies.map((candy) => candy + extraCandies >= maxValue);
  return result;
};
