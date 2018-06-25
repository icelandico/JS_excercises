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

function isAnagram(s1, s2) {
  let letters = new RegExp(/[a-zA-Z]/gi);
  s1 = ((s1.match(letters)).map(x => x.toLowerCase())).sort();
  s2 = (s2.match(letters)).map(x => x.toLowerCase()).sort();

  return (JSON.stringify(s1) === JSON.stringify((s2)))
}

isAnagram('Dave Barry', 'Ray Adverb');