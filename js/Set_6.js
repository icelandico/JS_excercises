// 1. You are in the process of creating a chat application and want to add an anonymous name feature.
// This anonymous name feature will create an alias that consists of two capitalized words beginning with
// the same letter as the users first name.
// Create a function that determines if the array of users is mapped to an array of anonymous names correctly.

function isCorrectAliases(names, aliases) {
  const anonymousWords = aliases.map(name => name.split(" ").map(word => word.charAt(0)))
  const isCorrect = anonymousWords.map((alias, index) => {
    const firstLetter = names[index].charAt(0)
    return alias.every(letter => letter === firstLetter)
  })
  return isCorrect.every(condition => condition)
}

isCorrectAliases(['Adrian M.', 'Harriet S.', 'Mandy T.'], ['Xmazing Artichoke', 'Hopeful Hedgehog', 'Marvelous Mouse'])

// 2. Range of numbers using recursion

function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum]
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1)
    numbers.push(endNum)
    return numbers
  }
};

rangeOfNumbers(1, 5)
