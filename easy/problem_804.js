/**
 * @param {string[]} words
 * @return {number}
 */
var map = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
];

var uniqueMorseRepresentations = function (words) {
  let result = [];
  words.forEach((word) => {
    let str = '';
    for (let i = 0; i < word.length; i++) {
      str += map[word.charCodeAt(i) - 97];
    }
    result.push(str);
  });
  const transformation = [...new Set(result)];
  return transformation.length;
};
