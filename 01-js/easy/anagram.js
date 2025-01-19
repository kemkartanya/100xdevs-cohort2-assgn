/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const mp = new Map();
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let char of str1) {
    mp.set(char, (mp.get(char) || 0) + 1);
  }

  for (let char of str2) {
    if (!mp.has(char)) return false;
    mp.set(char, mp.get(char) - 1);

    if (mp.get(char) === 0) {
      mp.delete(char);
    }
  }

  return mp.size === 0;
}

module.exports = isAnagram;
