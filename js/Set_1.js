// 1. Checks if the string ('target') is the ending string of phrase ('str')

function confirmEnding(str, target) {
  let last = str.substr(-(target.length));
  if (target.toLowerCase() === last.toLowerCase()) {
    return true;
  }
}

confirmEnding("This is a test string", "ing");

// Shorthand version:

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

// 2. Repeats the string given times ('num') - no .repeat() method used!

function repeatStringNumTimes(str, num) {
  let i = num;
  let result = "";
  while (i > 0) {
    result += str;
    i--;
  }
  return (result);
}

repeatStringNumTimes("SuDo", 7);


// 3. Calculates letYears to get desired sum of money

function calculateYears(principal, interest, tax, desired) {
  let result = 0;
  if (principal !== desired) {
    while (principal <= desired) {
      principal += ((interest * principal) - (tax * interest * principal));
      y++;
    }
  }
  return result;
}

calculateYears(1000, 0.05, 0.18, 1000);

// 4. Truncates a string by given number (num) and adds ("...")

function truncateString(str, num) {
  if (str.length > num) {
    return (str.slice(0, num - 3)) + "...";
  } else if (num <= 3) {
    return (str.slice(0, num)) + "...";
  } else {
    return (str);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

// 5. Creates new array that consist of arrays basing on size

function chunkArrayInGroups(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 4);


// 6. Return the remaining elements of an array after chopping off 'n' elements from the head (beginning)

function slasher(arr, howMany) {
  return (arr.splice(0, howMany));
}

slasher([1, 2, 3], 2);

// 7. Returns true if the string in the first element of the array contains all of the letters from second array element

function mutation(arr) {
  let result = arr[1].toLowerCase().split("");
  for (let i = 0; i < result.length; i++) {
    if (arr[0].toLowerCase().indexOf(result[i]) < 0) {
      return true
    }
  }
}

mutation(["hello", "hey"]);

// 8. Remove all falsy values from an array

function bouncer(arr) {
  return arr.filter(val => Boolean(val))
}

bouncer([7, "ate", "", false, 9, 0, 1, undefined]);

// 9. Uncipher the text! Using ROT13 cipher code

function rot13(str) {
  let a = Array.prototype.map.call(str, function (x) {
    return x.charCodeAt(0);
  });
  let b = a.map(function (y) {
    if (y < 77 && y >= 65 || (y >= 97 && y < 110)) {
      return y + 13;
    }
    else if (y > 77 && y <= 90 || (y <= 122 && y >= 110)) {
      return y - 13;
    }
    else if (y < 65) {
      return y;
    }
    else {
      return 32;
    }
  });
  return (String.fromCharCode.apply(null, b));
}

rot13('11qbwwnaalkvaemi');

// 10. Build a tower using "*" !

function towerBuilder(nFloors) {
  let result = [];
  i = 1;
  a = 1;
  while (i <= (nFloors * 2) - 1) {
    result.push(" ".repeat(nFloors - a) + "*".repeat(i) + " ".repeat(nFloors - a));
    i += 2;
    a += 1;
  }
  return result;
}

towerBuilder(2);

// 11. Capitalize first letter of word in given string

String.prototype.toJadenCase = function () {
  return (str.split(" ").map(x => x[0].toUpperCase() + x.substr(1).toLowerCase()).join(" "));
};

let str = "bla bla nanan eee aere re qwqe";
str.toJadenCase();

// 12. First argument (required): the original string to be converted.
//    Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first
//    word in the string.

function titleCase(title, minorWords) {
  let abc = String(minorWords).split(' ');
  let b = abc.map(x => x.toUpperCase());
  let a = title.split(' ').map(x => x.toUpperCase());
  for (let i = 0; i < a.length; i++) {
    if (i === 0) {
      a[0] = String(a[0][0]).toUpperCase() + a[0].substring(1).toLowerCase()
    } else {
      if (b.indexOf(a[i]) > -1) {
        a[i] = a[i].toLowerCase();
      } else {
        a[i] = String(a[i][0].toUpperCase() + a[i].substring(1).toLowerCase())
      }
    }
  }
  return a.join(" ")
}

titleCase('');

// 13. How many times to fold a piece of paper to reach a given distance in meters? Paper has a thickness of 0.0001 m.

function foldTo(distance) {
  let s = 0.0001;
  let fold = 0;
  while (s <= distance) {
    s *= 2;
    fold++;
  }
  return fold
}

foldTo(384000000);

// 14. You need to write regex that will validate a password to make sure it meets the following criteria:

// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.
// At least 6 characters

function validate(password) {
  return (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password));
}

validate('12eeeTzz');

// 15. Your goal in this kata is to implement a difference function, which subtracts one list from another and
// returns the result. It should remove all values from list a, which are present in list b.

function array_diff(a, b) {
  let x = [];
  if (b.length > 0) {
    for (i = 0; i < a.length; i++) {
      for (z = 0; z < b.length; z++) {
        if (a[i] !== b[z]) {
          x.push(a[i])
        }
      }
    }
  } else {
    return a
  }
  return x;
}

Shorthand:

  function array_diff(a, b) {
    return (a.filter(element => b.indexOf(element) === -1));
  }

array_diff([1, 2, 2, 3], [1,3]);

// 16. Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

function oddOrEven(array) {
  let x = 0;
  array.forEach(num => num += x)
  return x % 2 === 0 ? 'even' : 'odd';
}

// Using reduce();

function oddsOrEvens(x) {
  const sum = x.reduce((x, y) => (x + y), 0);
  return sum % 2 === 0 ? 'even' : 'odd';
}

console.log(oddsOrEvens([1, 2, 4, 88]));

// 17. Given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long
//    will it take B to catch A? The result will be an array [hour, min, sec] which is the time needed in hours,
//    minutes and seconds (don't worry for fractions of second).

function race(v1, v2, g) {
  let time = [];
  let t = (g / (v2 - v1) * 3600);
  let hours = Math.floor(t / 3600);
  let minutes = Math.floor(t % 3600 / 60);
  let seconds = Math.floor(t % 3600 % 60);
  time.push(hours, minutes, seconds);
  return time
}

race(80, 91, 37);

// 18. "Given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat". This is one of the
//     'Koans' exercise.

let products = [
  {name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false},
  {
    name: "Pizza Primavera",
    ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"],
    containsNuts: false
  },
  {name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false},
  {name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true},
  {name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true}
];

let productsICanEat = [];

let abc = products.filter(function (x) {
  return !x.containsNuts && !x.ingredients.some(function (a) {
    return a === 'mushrooms'
  })
});

abc;

// 19. Detect Pangram sentence. Ignore signs different than letters.

function pangram(sentence) {
  const newSentence = Array.from(new Set(sentence.toLowerCase().split("").filter(x => x.match(/[a-zA-Z]/))));
  const sentenceLength = newSentence.length;
  return sentenceLength === 26 ? 'This is a pangram' : 'It\'s not a pangram';
}

pangram("The quick brown fox jumps over the lazy dog.!?");

// 20. The goal of this exercise is to convert a string to a new string where each character in the new string is '('
// if that character appears only once in the original string, or ')' if that character appears more than once in the
// original string.

function duplicateEncode(word) {
  const wordToUse = word.toLowerCase().split("");
  let count = {};
  wordToUse.map(x => count[x] = (count[x] || 0) + 1);
  let result = wordToUse.map(function (y) {
    if (count[y] > 1) {
      return ')';
    } else {
      return '('
    }
  });
  return result.join("")
}

duplicateEncode("Aaa b cc n");

// 21. Transform given string to Nato phonetic standard

let natoAlphabet = {
  "A": "Alfa",
  "B": "Bravo",
  "C": "Charlie",
  "D": "Delta",
  "E": "Echo",
  "F": "Foxtrot",
  "G": "Golf",
  "H": "Hotel",
  "I": "India",
  "J": "Juliett",
  "K": "Kilo",
  "L": "Lima",
  "M": "Mike",
  "N": "November",
  "O": "Oscar",
  "P": "Papa",
  "Q": "Quebec",
  "R": "Romeo",
  "S": "Sierra",
  "T": "Tango",
  "U": "Uniform",
  "V": "Victor",
  "W": "Whiskey",
  "X": "Xray",
  "Y": "Yankee",
  "Z": "Zulu"
};

function to_nato(words) {
  words = words.toUpperCase().split("").filter(x => x.match(/[\S]/));
  let result = (words.map(function (x) {
    if (x in natoAlphabet) {
      return natoAlphabet[x]
    } else {
      return x;
    }
  }));
  return result.join(" ");
}

to_nato("If You can read!");

// 22. Replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and
//    on't return it.

function alphabetPosition(text) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split("");
  let abc = text.split("").filter(x => x.match(/^[A-Za-z]+$/));
  let result = [];
  for (let i = 0; i < abc.length; i++) {
    result.push(alpha.indexOf(abc[i]) + 1);
  }
  return result.join(" ");
}

alphabetPosition("p@-k_}.5");

// 23. Find unique number. There is an array with some numbers. All numbers are equal except for one. Try to find it.

function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i]) {
      return arr[i + 1];
    }
  }
}

findUniq([4, 3, 3, 3]);

// Not completed, doesn't work when unique val is at position "0";

// 24. Given: an array containing hashes of names Return: a string formatted as a list of names separated by commas
//    except for the last two names, which should be separated by an ampersand.

function list(names) {
  let arr = names.map(x => x.name);
  if (arr.length > 1) {
    return arr.slice(0, arr.length - 1).join(", ") + " & " + arr[arr.length - 1]
  } else if (arr.length === 1) {
    return names[0].name;
  } else {
    return '';
  }
}

let lista = [{name: 'Bart'},
  {name: 'Lisa'},
  {name: 'Maggie'},
  {name: 'Homer'},
  {name: 'Marge'}
];

list(lista);

// 25. Your task is to sort a given string. Each word in the String will contain a single number.
// This number is the position the word should have in the result.

function order(words) {
  let arr = words.split(" ");
  let result = [];
  arr.forEach(function (x) {
    for (let i = 0; i < x.length; i++) {
      if (/\d/.test(x[i])) {
        result[x[i] - 1] = x;
      }
    }
  });
  return result.join(" ")
}

order("is2 Thi1s T4est 3a");

// 26. Return final grade

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 50;
  } else {
    return 0;
  }
}

// 27. Return given string in alphabetical order

function alphabetSoup(str) {
  return str.split("").sort().join("")
}

alphabetSoup("this string needs to be sorted");

// 28. Return sum of array with absolute value

function getAbsSum(arr) {
  let result = 0;
  arr.forEach(function (x) {
    result += Math.abs(x)
  });
  return result;
}

getAbsSum([-1, -2, -3, 4, 5, -7]);

// Shorthand

function getAbsSum(arr) {
  return arr.reduce((count, num) => count + Math.abs(num), 0)
}

// 29. Count vowels (no RegExp)

function countVowels(str) {
  let counter = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        counter += 1;
      }
    }
  }
  return counter;
}

// With RegExp

function countVowels(str) {
  return str.match(/[aeiou]/g).length;
}

// 30. Capitalize first letter only

function capMe(arr) {
  return arr.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())
}

capMe(["samuel", "MABELLE", "letitia", "meridith"]);

// 31. Find the largest number in set of arrays

function findLargestNums(arr) {
  let result = [];
  arr.forEach(x => result.push(Math.max.apply(null, x)));
  return result;
}

findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);

// 32. Phone number formatting

function formatPhoneNumber(numbers) {
  let numbersStr = numbers.join("");
  return "(" + numbersStr.slice(0, 3) + ")" + " " + numbersStr.slice(3, 6) + "-" + numbersStr.slice(6)
}

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]);

// 33. Function that takes three input values (a, b, c) and returns the number of equal values.

function equal(a, b, c) {
  let equalSet = new Set([a, b, c]);
  if (equalSet.size === 1) {
    return 3
  } else if (equalSet.size === 2) {
    return 2
  } else {
    return 0
  }
}

equal(1,2,3);