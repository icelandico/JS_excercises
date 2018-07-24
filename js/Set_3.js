// 1. Create a function that takes a string and returns a new string with its first and last characters swapped.

function flipEndChars(str) {
  if (typeof(str) !== "string" || str.length < 3) {
    return 'Incompatible';
  } else if (str[0] === str[str.length - 1]) {
    return 'Two\'s a pair.';
  } else {
    return ((str[0] = str[str.length - 1]) + str.slice(1, -1) + (str[str.length - 1] = str[0]))
  }
}

flipEndChars('switcharoo');

// 2. Pig Latin. Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

function pigIt(str) {
  let punctuation = new RegExp(/[.,\/#!$%\^&\*;:]/);
  str = str.split(" ");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (punctuation.test(str[i])) {
      result.push(str[i])
    } else {
      result.push(str[i].slice(1) + str[i][0] + 'ay')
    }
  }
  return result.join(" ")
}

pigIt("Hello world !");

// 3. Retsec. You're given a single word. Your task is to swap the halves. If the word has an uneven length,
// leave the character in the middle at that position and swap the chunks around it.

function reverseByCenter(s) {
  let middle = s.length / 2;
  if (s.length % 2 === 0) {
    return s.slice(s.length / 2) + s.slice(0, s.length / 2)
  } else {
    return (s.slice(Math.ceil(middle)) + (s[Math.floor(middle)]) + s.slice(0, Math.floor(middle)))
  }
}

reverseByCenter('Copacabana');

// 4. Reverse letters in sentence

function rev(sentence) {
  return (sentence.split(" ")).map(x => x.split("").reverse().join("")).join(" ");
}

rev("String to reverse");

// 5. Reverse a number

function reverseNumber(n) {
  n = (n.toString()).split("");
  return (n.indexOf('-') > -1) ? parseInt('-' + n.reverse().join("")) : parseInt(n.reverse().join(""))
}

reverseNumber(-123);

// 6. Check if the date is "Magic", so it returns true when:
// mm * dd is a 1-digit number that matches the last digit of yyyy
// mm * dd is a 2-digit number that matches the last 2 digits of yyyy
// mm * dd is a 3-digit number that matches the last 3 digits of yyyy

function Magic(str) {
  str = (str.split(" ")).map(x => parseInt(x));
  if ((str[0] * str[1] === parseInt((str[2].toString()).slice(3))) && (str[0] * str[1]).toString().length === 1) {
    return true
  } else if ((str[0] * str[1] === parseInt((str[2].toString()).slice(2))) && (str[0] * str[1]).toString().length === 2) {
    return true
  } else if ((str[0] * str[1] === parseInt((str[2].toString()).slice(1))) && (str[0] * str[1]).toString().length === 3) {
    return true
  } else {
    return false
  }
}

Magic('1 2 2011');

// 7. Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences
// the 2nd argument is found in the first one.

function strCount(str, letter){
  return (str.split("").filter(x => x === letter)).length
}

strCount('Hello', 'l');

// 8. Merge arrays and display in ascending order unique numbers

function mergeArrays(arr1, arr2) {
  var b = (arr1.concat(arr2)).sort((a,b) => a-b);
  let result = [];
  for (let i = 0; i < b.length; i++) {
    if (result.indexOf(b[i]) === -1) {
      result.push(b[i])
    }
  }
  return result
}

mergeArrays([1,3,5,7,9,11,2,3], [10,8,4,1,7,6,4,2]);

// 9.Replace all polish letters from string

const polish = {
  'ą' : 'a',
  'ć' : 'c',
  'ę' : 'e',
  'ł' : 'l',
  'ń' : 'n',
  'ó' : 'o',
  'ś' : 's',
  'ź' : 'z',
  'ż' : 'z'
};

function correctPolish(str) {
  let result = str
    .split('')
    .map(letter => polish[letter] || letter);
  return result.join("")
}

correctPolish('Jędrzej Błądziński');


function movie(card, ticket, perc) {
  let priceRegular = 0;
  let pricePerk = card;
  let i = 1;
  while (priceRegular <= Math.ceil(pricePerk)){
    priceRegular += ticket;
    pricePerk += (ticket * Math.pow(perc, i)) * perc;
    i++
  }
  return i;
};

movie(100, 10, 0.95);

// 10. Check if given string is an anagram

function isAnagram(s1, s2) {
  let letters = new RegExp(/[a-zA-Z]/gi);
  s1 = ((s1.match(letters)).map(x => x.toLowerCase())).sort();
  s2 = (s2.match(letters)).map(x => x.toLowerCase()).sort();

  return (JSON.stringify(s1) === JSON.stringify((s2)))
}

isAnagram('Dave Barry', 'Ray Adverb');

// 11. Sort elements in array. Put *** between every word of the first word in sorted array

function twoSort(s) {
  s = (s.sort()[0]).split("");
  return s.map(function (item, index) {
    if (index < s.length - 1) {
      return item + '***'
    } else { return item}
  }).join("")
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);

// 12. Return the maximum number that can be formed from integers in number given

function maxNumber(n){
  return parseInt((n.toString().split("")).map(x => parseInt(x)).sort((a,b) => b - a).join(""));}

maxNumber(566797);

// 13. Given an array of words, return an array of the number of letters that occupy their positions in the alphabet
// for each word. For example, solve(["abode","ABc","xyzD"]) = [4,3,1].

function solve(arr){
  let alphaPos = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16,
    q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };
  arr = (arr.map(word => word.toLowerCase())).map(word => word.split(""));
  result = arr.map(word => word.map(function(letter, index) {
    return (index + 1 === alphaPos[letter])? 1 : 0;
  }));
  return (result.length === 0 )? [0] : result.map(element => element.reduce((a,b) => a +b ))
}

solve(['aata', 'ybad', 'ooc']);

// 14. In array two insert copied element from array one in order, at given position (n)

function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice(0);
  for (let i = 0 ; i < arr1.length; i++) {
    result.splice(n + i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2], ["a", "b"], 1); // should return ["a", 1, 2, "b"].

// 15. Check if numbers given in array are in ascending order

function inAscOrder(arr) {
  let i = 0;
  while (i <= arr.length-1) {
    if (arr[i+1] - arr[i] <= 0) {
      return false
    }
    i++
  } return true
}

inAscOrder([1, 2, 4, 7, 19]);

// 16. Return array with all combinations with letters in string. Combination means that each string has 'shifted' order
// letters by one.

function scrollingText(text){
  let result = [];
  for (let i = 0 ; i < text.length; i++) {
    var expression = text.substring(i) + text.substring(0, i);
    result.push(expression.toUpperCase())
  }
  return result;
}

scrollingText('codewars');

// 17. You need to return the highest scoring word as a string

let letterPositions = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16,
  q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };

function high(x){
  let string = x.split(" ").map(x => x.split(""));
  let stringToPoints = string.map(word => word.map(letter => letter = letterPositions[letter]));
  stringToPoints.forEach(function (pointsArray, index) {
    return stringToPoints[index] = pointsArray.reduce((a,b) => a + b)
  });
  let indexOfHighest = stringToPoints.indexOf(Math.max.apply(null, stringToPoints))
  return string[indexOfHighest].join("")
}

high('man i need a taxi up to ubud');

// 18. Reverse words that consists of 5 or more letters

function spinWords(str){
  let string = str.split(" ");
  return string.map(word => word.length >= 5 ? word.split("").reverse().join("") : word).join(" ");
}

spinWords('Hey fellow warriors');

// 19. Digital Root calculation

function digital_root(n) {
  let digitArray = n.toString().split("").map(Number);
  let digitArraySum = n.toString().split("").map(Number).reduce((a,b) => a + b);
  return digitArray.join(' + ') + ' = ' + digitArraySum;
}

digital_root(942);

// 20. Reorder string with given positions in array. For example "sequence" should return 'encqusee'

function remix(str, arr) {
  let stringArray = str.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = stringArray[i]
  }
  return result.join("")
}

remix("sequence", [5, 7, 3, 4, 0, 1, 2, 6]);

// 21. Find the Shortest Word(s) in a Sentence. Don't consider digits and special signs.

function findShortestWords(str) {
  let regularExpr = new RegExp(/[a-zA-Z'’]+/g);
  let validString =  str.toLowerCase().match(regularExpr);
  let minWordLength = Math.min(...validString.map(word => word.length));
  let result = validString.filter(word => word.length === minWordLength);
  return result.sort();
}

findShortestWords("You miss 100% of the shots you don’t take.");

// 22. Find the sum of all numbers divisable by 3 or 5 below the given numbers

function solution(number){
  let nums = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      nums.push(i)
    }
  }
  return nums.reduce((a,b) => a + b);
}

solution(10);

// 23. Return string in given format. Input: 'Sjklz', Output: 'S-Jj-Kkk-Llll-Zzzzz'

function accum(s) {
  let string = s.split("");
  let result =  string.map((letter, index) => letter = letter.toUpperCase() + letter.repeat(index).toLowerCase());
  return result.join("-")
}

accum("ZpglnRxqenU");

// 24. Find the number that does not match the rest of array elements (even or odd values)

function findOutlier(integers){
  let odds = integers.filter(number => number % 2 !== 0);
  let evens = integers.filter(number => number % 2 === 0);
  return odds.length > evens.length ? evens.join("") : odds.join("");
}

findOutlier([2,2,2,3]);

