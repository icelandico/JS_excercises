// 1. Alternative version for PigLatin translator

function translatePigLatin(str) {
  const consonant = new RegExp(/^[^aeiou]+/gi);
  const reg = str.match(consonant);
  if (!consonant.test(str[0])) {
    return str + 'way'
  } else {
    return str.slice(reg.join('').length) + str.match(consonant) + 'ay'
  }
}

translatePigLatin('dalbert');

// 2. Given several arrays, create new array containing only unique elements for all of input arrays.

function uniteUnique(a,...arr) {
  const flattenArray = a.concat(arr.reduce((a, b) => a.concat(b)));
  return Array.from(new Set(flattenArray));
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

// 3. Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "''": "&quot;",
    '"': "&quot;",
    "'": "&apos;"
  }
  return str.split('').map(item => item.replace(item, entities[item] || item)).join('')
}

convertHTML("Schindler's List");

// 4. Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  let sequence = [0, 1];
  let sumOdds = 0;
  for (let i = 2; i <= num; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  let sum = sequence.filter(number => 
    number <= num && number % 2 !== 0 ? sumOdds += number : false)
    .reduce((a, b) => a + b);
    return sum
}

sumFibs(10);

// 5. Sum All Primes up to given number

function sumPrimes(num) {
  let primes = [];
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  function isPrime(num) {
    for(let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return num !== 1
  }
  return primes.reduce((a, b) => a + b)
}

sumPrimes(10);

// 7. Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  const stringArray = str.split(' ');
  const result = stringArray.map(number => String.fromCharCode(parseInt(number, 2))).join('')
  return result
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// 8. Given the array arr, iterate through and remove
// each element starting from the first element (the 0 index)
// until the function func returns true when the iterated element is passed through it.

function dropElements(arr, func) {
  const index = arr.map(item => func(item) ? true : false).indexOf(true)
  return index > -1 ? arr.slice(index) : [] ;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});

// 9. Flatten nested array of arrays

function steamrollArray(arr) {
  return arr.reduce((a, b) => Array.isArray(b) ? a.concat(steamrollArray(b)) : a.concat(b), [])
}

steamrollArray([1, {}, [3, [[4]]]]);

// 10. Convert string to Spinal Tap Case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  const splitChars = new RegExp(/(?=[A-Z])|[\s_-]/g);
  const stringArray = str.split(splitChars).map(item => item.toLowerCase());
  return stringArray.join('-')
}

spinalCase('thisIsSpinalTap');

// 11. Count the letters in string and present it with Object

function count (string) {
  let stringArray = string.split('');
  let result = string !== '' ? Object.assign(...stringArray.map(item => ({ [item] : 0 }))) : {};
  stringArray.forEach(item => result[item] += 1)
  return result
}

count('aaaabhyyyba')

// 12. Merge arrays with consecutive indexes from both arrays
function mergeArrays(a, b) {
  let mergedString = [];
  for(var i = 0; i < a.length || i < b.length; i++) {
    if(i < a.length)
      mergedString.push(a[i]);
    if(i < b.length)
      mergedString.push(b[i]);
   }
 return Array.from(mergedString);
}

mergeArrays([1, 2, 3, 4, 5], ["a", "b", "c"]);

// 13. Return index of value (+1) which differs from others in array (odd or even)
function iqTest(numbers){
  const numbersArray = numbers.split(' ').map(Number)
  const evens = numbersArray.filter(number => number % 2 === 0)
  const odds = numbersArray.filter(number => number % 2 !== 0)
  return evens.length > odds.length ? numbersArray.indexOf(odds[0]) + 1 : numbersArray.indexOf(evens[0]) + 1
}

iqTest("5 3 2") // 2

// 14. Find how manyletters occurs more than once in string

function duplicateCount(text){
  const textArray = text.toLowerCase().split('');
  let result = 0;
  let counts = Object.assign({}, ...textArray.map(item => ({ [item] : 0})));
  for (let i = 0; i < textArray.length; i++) {
    counts[textArray[i]] += 1
  }
  for (key in counts) {
    counts[key] > 1 ? result += 1 : false
  }
  return result
}

duplicateCount('aabcabbcxz') // 3

// 15. Find missing letters in string basing on alphabetical order

function findMissingLetter(array) {
  const letters = array.map(letter => letter.charCodeAt());
  let desiredLetters = [];
  for (let i = letters[0]; i <= letters[letters.length - 1]; i++) {
    desiredLetters.push(String.fromCharCode(i))
  }
  return desiredLetters.filter(item => array.indexOf(item) === -1).join('')
}

findMissingLetter(['O','Q','R','S'])

// 16. Deep comparison of objects 

function deepEqual(a, b){
  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (Object.keys(a).length != Object.keys(b).length) return false;
    for (var key in a) if (!deepEqual(a[key], b[key])) return false;
    return true;
  } 
  else return a === b
}

const ob1 = {
  name: "Joe",
  age: 20,
  city: "Atlanta"
}

const ob2 = {
  name: "Joe",
  age: 20,
  city: "Atlanta"
}

deepEqual(ob1, ob2)

// 17. Vowels back

function vowelBack(s){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const revertable = ['c', 'o', 'd', 'e'];
  function testChar(code) {
    if (revertable.includes(String.fromCharCode(code))) {
      return code
    } else {}
  }
  const letters = Array.from(s).map(letter => letter.charCodeAt())
  const newLetters = letters.map(function (code) {
    if (String.fromCharCode(code) === 'c' || String.fromCharCode(code) === 'o' ) {
      return code -= 1;
    }
    else if (String.fromCharCode(code) === 'd') {
      return code -= 3;
    } 
    else if(String.fromCharCode(code) === 'e') {
      return code -= 4;
    } 
    else if (vowels.includes(String.fromCharCode(code))) {
      if (code - 5 < 97) {
        return code -= 5 - 26
      } else {
        return code -= 5
      }
    } else {
      if (code + 9 > 122) {
        return code += 9 - 26
      } else {
        return code += 9
      }
    }
  })
  return String.fromCharCode(...newLetters)
}

const testcase = "testcase"
vowelBack(testcase)

// 18. Fizzbuzz challenge

/* Write a program that prints the numbers from 1 to N-number.
But for multiples of three print ‘Fizz’ instead of the number
and for the multiples of five print ‘Buzz’. For numbers which
are multiples of both three and five print ‘FizzBuzz’. */

function fizzbuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz')
    } else if (i % 3 === 0) {
      result.push('Fizz')
    } else if (i % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push(i)
    }
  }
  return result 
}

fizzbuzz(16)

// 19. Sort a String by Its Last Character

function sortByLast(str) {
	const sortedWords = str.split(' ').map(word => word).sort((a, b) => {
    if (a[a.length - 1] < b[b.length - 1]) {
      return -1
    } else if (a[a.length - 1] > b[b.length - 1]) {
      return 1
    } else {
      return 0
    }
  })
  return sortedWords.join(' ')
}

const string = "sample partner autonomy swallow trend";

sortByLast(string)

// 20. Remove Surrounding Duplicate Items

function uniqueInOrder(sequence) {
  let uniques = [];
  const seq = Array.from(sequence);
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] !== seq[i + 1]) {
      uniques.push(seq[i])
    }
  }
  return uniques
}

const str = [1, 2, 2, 3, 3] 
uniqueInOrder(str);

// 21. Sort array by string length

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

sortByLength(["Google", "Apple", "Microsoft"])

// 22. Calculate shortest path

function shortestDistance(str) {
  const [x1, y1, x2, y2] = str.split(',').map(Number);
  const distance = parseFloat((Math.hypot(x2 - x1, y2 - y1)).toFixed(2))
  return distance
}

shortestDistance('1,1,2,1')

// 23. Create a function that, given a string with at least three characters, returns an array of its:
// Length.
// First character.
// Last character.
// Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
// Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.

function allAboutStrings(str) {
  const length = str.length;
  const firstChar = str.charAt(0);
  const secondChar = str.charAt(1);
  const lastChar = str.charAt(length -1);
  const middle = function() {
    return length % 2 === 0 ? str.slice(length / 2 - 1, length / 2 + 1) : str[Math.floor(length / 2)]
  }
  const index = function() {
    const indexOfChar = str.indexOf(secondChar, 2)
    return indexOfChar > -1 ? `@ index ${indexOfChar}` : 'not found'
  }
  return [length, firstChar, lastChar, middle(), index()]
}

allAboutStrings('homework') // [8, 'h', 'k', 'ew', '@ index 5']);

// 24. Count letters in string and return most common characters

function getWordsNums(str) {
  const lettersCount = {}
  str.split('').forEach(letter => {
    if (lettersCount[letter]) {
      lettersCount[letter] += 1
    } else {
      lettersCount[letter] = 1
    }
  })
  const maxNum = Math.max.apply(null, Object.values(lettersCount))
  let mostCommonLetters = [];
  for (let letter in lettersCount) {
    if (lettersCount[letter] === maxNum) {
      mostCommonLetters.push(letter)
    }
  }
  return mostCommonLetters
}

getWordsNums('javascript')

// 25. Roman Numerals

const latinNums = ['1', '2', '3', '4', '5', '9', '10', '40', '50', '100', '400', '500', '1000', '2000', '3000']
const romanNums = ['I', 'II', 'III', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'C', 'CD', 'D', 'M', 'MM', 'MMM']

function convertToRoman(num) {
  const thousands = num / 1000 > 1 ? Math.floor(num / 1000) : null;
  const houndreds = Math.floor((num % 1000) / 100);
  const decimals = Math.floor((num % 100) / 10);
  const nums = Math.floor((num % 100) / 10);
  return [thousands, houndreds, decimals, nums]
}
 
console.log(convertToRoman(522));
