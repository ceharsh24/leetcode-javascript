/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  const result = [];
  let startColumn = 0;
  let endCoulmn = matrix[0].length - 1;
  let startRow = 0;
  let endRow = matrix.length - 1;
  while (startColumn <= endCoulmn && startRow <= endRow) {
    for (let i = startColumn; i <= endCoulmn; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endCoulmn]);
    }
    endCoulmn--;
    if (startColumn <= endCoulmn && startRow <= endRow) {
      for (let i = endCoulmn; i >= startColumn; i--) {
        result.push(matrix[endRow][i]);
      }
      endRow--;
      for (let i = endRow; i >= startRow; i--) {
        result.push(matrix[i][startColumn]);
      }
      startColumn++;
    }
  }
  return result;
};
