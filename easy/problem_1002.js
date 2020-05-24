/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  if (A.length === 1) {
    return A[0].split('');
  }

  const word = A.shift().split('');
  const result = [];
  for (j of word) {
    let i;
    for (i = 0; i < A.length; i++) {
      if (!A[i].includes(j)) {
        break;
      } else {
        A[i] = A[i].replace(j, '');
      }
    }
    if (i === A.length) {
      result.push(j);
    }
  }
  return result;
};
