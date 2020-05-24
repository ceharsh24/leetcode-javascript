/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const result = [];
  words.forEach((eachWord) => {
    const tempSubString = words.filter((word) => {
      if (eachWord.includes(word) && eachWord !== word) {
        return word;
      }
    });
    result.push(...tempSubString);
  });
  return [...new Set(result)];
};
