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



