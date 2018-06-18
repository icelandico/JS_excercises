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
