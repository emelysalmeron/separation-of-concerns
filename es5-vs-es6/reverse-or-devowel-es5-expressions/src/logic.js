'use strict';

debugger; // once when the script is loaded

/**
 * reverses a string
 * @param {string} text - the string to reverse
 * @returns {string} the reversed text
 */
var reverseString = function (text) {
  debugger; // each time the function is called

  var reversedText = '';
  var i;
  var nextCharacter;

  for (i = text.length - 1; i > -1; i--) {
    nextCharacter = text[i];
    reversedText = reversedText + nextCharacter;
  }
  return reversedText;
};
// console.assert(reverseString('abc') === 'cba', 'Test 1: reverse');
// console.assert(reverseString('aaa') === 'aaa', 'Test 2: reverse');
// console.assert(reverseString('_ _ ') === ' _ _', 'Test 3: reverse');

/**
 * removes all the vowels from a string
 * @param {string} text - the text to filter
 * @returns {string} a new string with no vowels
 */
var removeVowels = function (text) {
  debugger; // each time the function is called

  var vowels = 'AEIOUaeiou';
  var devoweled = '';
  var i;
  var character;

  for (i = 0; i < text.length; i++) {
    character = text[i];
    if (!vowels.includes(character)) {
      devoweled = devoweled + character;
    }
  }
  return devoweled;
};
// console.assert(removeVowels('bAnanA') === 'bnn', 'Test 1: removeVowels');
// console.assert(removeVowels('yogurt!') === 'ygrt!', 'Test 2: removeVowels');
// console.assert(removeVowels('xkcd') === 'xkcd', 'Test 3: removeVowels');
// console.assert(removeVowels('123') === '123', 'Test 4: removeVowels');

debugger;
