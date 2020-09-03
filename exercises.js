(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
function max(num1, num2){
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(max(5,9));

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

function maxOfThree(num1, num2, num3){
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(maxOfThree(8, 5, 9));

//const maxOfThree = (num1, num2, num3) => Math.max (num1, num2, num3);

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
function isVowel(argument) {
  var text;
  var argument = argument.toLowerCase();
  var vowels = (['a', 'e', 'i', 'o', 'u']);

  for (var i = 0; i <= vowels.length; i++){
    if (argument != vowels [i]) {
      continue;
    }
    return true;
  }
  return false;
}

var char = "A";
if (isVowel(char)){
  console.log(char + " is a vowel");
} else{
  console.log(char + " is not a vowel");
}


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
var translate = function (text){
  var string = text.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u", " "];
  var y ="";
  for (i = 0; i < string.length; i++) {
    var current = string.charAt(i);
    if (vowels.indexOf(current) != -1){
      y = (y + (current));
    } else {
      y = (y + (current + "o" + current));
    }
  }
  return y;
}

console.log(translate("this is fun"));

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
var sum = function(array) {
  var length = array.length;
  var total = 0;
  for (i = 0; i < length; i++){
    total += array [i];
  }
  return total;
};

console.log(sum([1,2,3,4]));

var multiply = function(array){
  var length = array.length;
  var total = 1;
  for (i = 0; i < length; i++) {
  total *= array[i];
  }
  return total;
};

console.log(multiply([1,2,3,4]));
  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  function reverse(string) {
      var text = '';

      for (var i = string.length - 1; i >= 0; i--) {
      	text += string[i];
      	continue
      }
      return text.toLowerCase();
  }
  console.log(reverse("gnidoc"));

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
var findLongestWord = function (array){
  var elements = array.length;
  var count = 0;
  for (i = 0; i < elements; i++) {
    if (array[i].length > count)
      count = array[i].length;
  }
return count;
}

console.log(findLongestWord(['carolina', 'coding', 'school', 'javascript']));

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
var filterLongWords  = function (array, int) {
  var length = array.length;
  var longestWords = [];
  for (i = 0; i < length; i++){
    if (array[i].length > int) {
      longestWords[longestWords.length] = array[i];
    }
  }
  return longestWords;
}


  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
var charFreq = function(string){
  var list = {};
  var length = string.length;
  for (var i=0; i < length; i++) {
    if (string.charAt(i) in list)
    list[string.charAt(i)] += +1;
    else
    list[string.charAt(i)] = 1;
    }
    return list;
  }

  console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'function findLongestWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
