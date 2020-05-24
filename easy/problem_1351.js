/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  var negnum = 0;

  for (i = 0; i < grid.length; i++) {
    negnum += grid[i].filter((grid) => grid < 0).length;
  }

  return negnum;
};
