/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let keyRow = {
    1: [
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      'Q',
      'W',
      'E',
      'R',
      'T',
      'Y',
      'U',
      'I',
      'O',
      'P',
    ],
    2: [
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
    ],
    3: ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  };
  const result = [];
  words.forEach((eachWord) => {
    const splitWord = eachWord.split('');
    let row = 0;
    const firstLetter = splitWord.shift().toLowerCase();

    if (keyRow['1'].includes(firstLetter)) row = 1;
    else if (keyRow['2'].includes(firstLetter)) row = 2;
    else row = 3;

    let checkOtherLetter = true;
    let i = 0;

    while (i < splitWord.length) {
      if (!keyRow[row].includes(splitWord[i])) {
        checkOtherLetter = false;
        break;
      }
      i++;
    }
    if (checkOtherLetter) result.push(eachWord);
  });
  return result;
};

// Regular Expression Approach
// var findWords = function (words) {
//   return words.filter((w) => {
//     // remove word from array if it fails matching all three rows
//     if (
//       !/^[qwertyuiop]*$/i.test(w) &&
//       !/^[asdfghjkl]*$/i.test(w) &&
//       !/^[zxcvbnm]*$/i.test(w)
//     )
//       return false;

//     return true;
//   });
// };
