/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let startingLocation = paths[0][0];
  let destination = paths[0][1];
  let i = 1;

  while (i < paths.length) {
    if (paths[i][0] === destination) {
      destination = paths[i][1];
      i = 1;
    } else {
      i++;
    }
  }

  return destination;
};
