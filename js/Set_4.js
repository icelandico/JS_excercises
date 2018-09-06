// 1. Alternative version for PigLatin translator

function translatePigLatin(str) {
  const consonant = new RegExp(/^[^aeiou]+/gi);
  const reg = str.match(consonant)
  if (!consonant.test(str[0])) {
    return str + 'way'
  } else {
    return str.slice(reg.join('').length) + str.match(consonant) + 'ay'
  }
}

translatePigLatin('dalbert')

// 2. Given several arrays, create new array containing only unique elements for all of input arrays.

function uniteUnique(a,...arr) {
  const flattenArray = a.concat(arr.reduce((a, b) => a.concat(b)));
  return Array.from(new Set(flattenArray))
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

