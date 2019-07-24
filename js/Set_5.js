// 1. Implement the function unique_in_order which takes as argument a sequence and returns a list
// of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = function(iterable) {
  let result = []
  for (let i = 0; i < iterable.length; i++) {
    iterable[i] !== iterable[i + 1] ? result.push(iterable[i]) : null
  }
  return result
}

uniqueInOrder("AAAABBBCCDAABBB")

// 2. Convert time to readable format

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor(((seconds / 3600) % 1) * 60)
  const secs = Math.round(((((seconds / 3600) % 1) * 60) % 1) * 60)
  const readable = [hours, minutes, secs]
  const result = readable.map(time => (time < 10 ? "0" + time : time))
  return result.join(":")
}

humanReadable(86399)

// 3. Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  const dividers = []
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      dividers.push(i)
    }
  }
  const sum = dividers.reduce((prev, next) => prev + next, 0)
  return sum
}

multiplesOf3and5(1000) // 233168

// 4. Sum of even Fibonacci numbers

function fiboEvenSum(n) {
  let numbers = [1, 2]
  for (let i = 2; i <= n; i++) {
    numbers.push(numbers[i - 1] + numbers[i - 2])
  }
  return numbers
    .filter(num => num % 2 === 0)
    .reduce((prev, next) => prev + next, 0)
}

fiboEvenSum(10)

// 5. Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4]}
// and returns an array of objects like { name: 'John', topNote: 5 }.
// If student has no notes(an empty array) then let's assume topNote: 0

function getStudentsWithNamesAndTopNotes(students) {
  const topNotesArr = students.map(student => ({
    name: student.name,
    topNote: Math.max(...student.notes, 0)
  }))
  return topNotesArr
}

const students = [
  {
    name: "John",
    notes: [-5, 5, 3, -1, 6, 2]
  },
  {
    name: "Andy",
    notes: [3, -2, 5, 0, -3]
  },
  {
    name: "Jack",
    notes: [4, 6, 3, 1, 5, -10]
  }
]

getStudentsWithNamesAndTopNotes(students)

// 6. Create a function that takes an array of students and returns an object
// representing their notes distribution. Have in mind that all invalid notes
// should not be count in the distribution. Valid notes are: 1, 2, 3, 4, 5

function getNotesDistribution(students) {
  const validNotes = [1, 2, 3, 4, 5]
  const counter = {}
  const filteredNotes = students.map(student => ({
    name: student.name,
    notes: student.notes.filter(note => validNotes.includes(note))
  }))
  filteredNotes.forEach(item =>
    item.notes.forEach(note =>
      counter[note] ? (counter[note] += 1) : (counter[note] = 1)
    )
  )
  return counter
}

getNotesDistribution(students)

// 7. Write a function that takes a negative or positive integer, which represents the number of minutes
// before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.

function partiallyHide(phrase) {
  const words = phrase.split(" ")
  const coded = words.map(
    word => word[0] + "-".repeat(word.length - 2) + word[word.length - 1]
  )
  return coded.join(" ")
}

const strg = "skies were pretty"
partiallyHide(strg)

// 8. Create a function that takes an integer and returns an array from 1 to the given number, where:
// If the number can be divided evenly by 4, amplify it by 10(i.e.return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.

function amplify(num) {
  const numArray = Array.from(new Array(num), (x, i) => i + 1)
  const mapped = numArray.map(number =>
    number % 4 === 0 ? number * 10 : number
  )
  return mapped
}

amplify(10)

// 9. Create a function that takes in an initial word and filters out an array to contain words
// that start with the same letters as the initial word.

function dictionary(initial_word, words) {
  return words.filter(word => (word.startsWith(initial_word) ? word : null))
}

dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])

// 10. Write a program that will calculate the number of trailing
// zeros in a factorial of a given number.

function zeros(n) {
  let counter = 0
  for (i = 5; n / i >= 1; i = i * 5) {
    counter += n / i
  }
  return Math.floor(counter)
}

zeros(217883360)

// 11. Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.

const word = "A wise old owl lived in an oak"

const encryptThis = function(text) {
  const words = text.split(" ")
  const encrypted = words.map(w => {
    if (w.length > 2) {
      const firstLetter = w.charCodeAt(0)
      const secondLetter = w[1]
      const lastLetter = w[w.length - 1]
      return (
        firstLetter + lastLetter + w.substring(2, w.length - 1) + secondLetter
      )
    } else if (w.length == 2) {
      const firstLetter = w.charCodeAt(0)
      const lastLetter = w[1]
      return firstLetter + lastLetter
    } else {
      return w.charCodeAt(0)
    }
  })
  return encrypted.join(" ")
}

// Very dirty solution, first take

encryptThis(word)

// 12. Nth Smallest Element

function nthSmallest(arr, n) {
  const sortedArray = arr.sort((a, b) => a - b)
  return sortedArray[n - 1]
}

nthSmallest([7, 3, 5, 1], 2)

// 13. Given a word, write a function that returns the first index and the last index of a character.

function charIndex(word, char) {
  const firstIndex = word.indexOf(char)
  const lastIndex = word.lastIndexOf(char)
  return firstIndex < 0 ? undefined : [firstIndex, lastIndex]
}

charIndex("happy", "e")

// 14. Extract parameters index

const firstArg = (...args) => args[0]

const lastArg = (...args) => args[args.length - 1]

firstArg(1, 2, 3)
lastArg(1, 2, 3, 4)

// 15. Given your friend's unfortunate taste preferences,
// you decide to split the bill only for non-spicy items. You will pay in full for the spicy dishes.

function billSplit(spicy, cost) {
  const myBill = spicy
    .map((d, i) => (d === "N" ? cost[i] / 2 : cost[i]))
    .reduce((a, b) => a + b)
  const hisBill = spicy
    .map((d, i) => (d === "N" ? cost[i] / 2 : 0))
    .reduce((a, b) => a + b)
  return [myBill, hisBill]
}

billSplit(["N", "N", "N", "S"], [40, 20, 20, 10])

// 16. Create a function that filters out an array to include numbers who only have a certain number of digits.

function filterDigitLength(arr, num) {
  const stringNumbers = arr.map(num => num.toString())
  return stringNumbers.filter(n => n.length === num).map(Number)
}

filterDigitLength([88, 232, 4, 9721, 555], 3)

// 17. Write a function that reorders the digits in an array based on ascending (asc) or descending (desc) order.

function reorderDigits(arr, direction) {
  const strNums = arr.map(n => n.toString())
  if (direction === "asc") {
    const ascending = strNums.map(n =>
      n
        .split("")
        .sort((a, b) => a - b)
        .join("")
    )
    return ascending.map(Number)
  } else {
    const descending = strNums.map(n =>
      n
        .split("")
        .sort((a, b) => b - a)
        .join("")
    )
    return descending.map(Number)
  }
}

reorderDigits([515, 341, 98, 44, 211], "asc")

// 18. Create a function that takes in an array of miles run every
// day and returns total number of progress values. i.e. 3 -> 4 is progress.

function progressDays(runs) {
  let progress = 0
  runs.forEach((num, i) => (num < runs[i + 1] ? progress++ : null))
  return progress
}

const days = [3, 4, 1, 2]

progressDays(days)

// 19. Write a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.

function countIdentical(arr) {
  const identical = arr => {
    const filtered = Array.from(new Set(arr))
    return arr.length > 1 ? filtered.length < 2 : true
  }
  const result = arr.filter(a => (identical(a) ? a : null))
  return result.length
}

const subs = [[33, 33], [5], ["a", "a"], [2, 2, 2], [1, 2, 2], [3, 1]]

countIdentical(subs)

// 20. Grab the city name which is inside the brackets

function grabCity(str) {
  const cityRegexp = /\[(.*?)\]/g
  let matched = cityRegexp.exec(str)
  let matches = []
  matches.push(matched[1])
  while ((matched = cityRegexp.exec(str))) {
    matches.push(matched[1])
  }
  return matches[matches.length - 1]
}

// shorter version

function grabCity(str) {
  const string = str.split("[").pop()
  return string.slice(0, string.length - 1)
}

grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]")

// 21. Function that creates the comparison of sum of two sets of nested arrays with numbers

function testFairness(agatha, bertha) {
  const sum_a = agatha
    .map(el => el.reduce((a, b) => a * b))
    .reduce((c, d) => c + d, 0)
  const sum_b = bertha
    .map(el => el.reduce((a, b) => a * b))
    .reduce((c, d) => c + d, 0)
  return [sum_a, sum_b]
}

testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]])

// 22. Adds two (+2) to each odd integer.
// Subtracts two(-2) to each even integer. Perform task n times

function evenOddTransform(arr, n) {
  let count = 0
  let newArray = [...arr]
  while (count < n) {
    newArray = newArray.map(elem => (elem % 2 === 0 ? elem - 2 : elem + 2))
    count += 1
  }
  return newArray
}

const params = [[3, 4, 9], [3]]
evenOddTransform(params[0], params[1])

// 23. Re-order the characters of a string, so that they are concatenated
// into a new string in "case-insensitively-alphabetical-order-of-appearance" order.
// Whitespace and punctuation shall simply be removed.

function alphabetized(s) {
  const regex = /[a-zA-Z]/g
  if (s.match(regex)) {
    const letters = s.match(regex).map((l, i) => ({
      letter: l,
      upper: l.toUpperCase().charCodeAt(),
      index: i
    }))
    const sorted = letters.sort((a, b) =>
      b.upper < a.upper
        ? 1
        : b.upper === a.upper
        ? b.index > a.index
          ? -1
          : 1
        : -1
    )
    return sorted.map(el => el.letter).join("")
  } else {
    return ""
  }
}

alphabetized("The Holy Bible")

// 24. Check if elements from two arrays gives same result for all array elements. If two arrays have different length
// return false

function puzzlePieces(a1, a2) {
  if (a1.length === a2.length) {
    const sumArray = a1.map((elem, idx) => elem + a2[idx])
    return Array.from(new Set(sumArray)).length === 1
  }
  return false
}

puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])

// 25. Given two integers a and b, return how many times a can be halved while still being greater than b.

function halveCount(a, b) {
  let counter = 0
  while (a / 2 > b) {
    a = a / 2
    counter++
  }
  return counter
}

halveCount(1324, 98)

// 26. Sort names by length. If length of names is equal, sort it in reverse alphabetical order (Z->A)

const names = `
  Rokuro Shoji Yoshiaki Tsuneo Yuji Naoki Mikio Tsuyoshi Tadashi Yasuo Ryuu Rafu Tsutomu
  Shinichi Yuki Yuichi Naoko Tamotsu Teruo Shiro Takeo Senichi Tetsuya Toru Yoshihiro Yoichi
  Shuichi Shig Nori Tomio Takahiro Shoichi Yasushi Takashi Toyo Nobuyuki Toshiyuki Tomi Yoshiro Michio
   `

function lineupStudents(students) {
  const studentsArray = students.trim().split(" ")
  studentsArray.sort((a, b) =>
    a.length === b.length ? (a > b ? -1 : 1) : b.length - a.length
  )
  return studentsArray
}

lineupStudents(names)

// 27. Count items, put them into arrays in format [number, item]. Disregard items that are not in "veggies" array

const veggies = [
  "cabbage",
  "carrot",
  "celery",
  "cucumber",
  "mushroom",
  "onion",
  "pepper",
  "potato",
  "tofu",
  "turnip"
]

const items = `mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber 
 mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber 
 onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper 
 onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot 
 potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip 
 mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`

function countVegetables(string) {
  const itemsArray = Array.from(new Set(string.trim().split(" ")))
    .filter(el => veggies.includes(el))
    .map(el => [0, el])
  const originalArray = string.split(" ")
  for (let i = 0; i < originalArray.length; i++) {
    for (let k = 0; k < itemsArray.length; k++) {
      originalArray[i] === itemsArray[k][1] ? (itemsArray[k][0] += 1) : 0
    }
  }
  itemsArray.sort((a, b) =>
    a[0] === b[0] ? (a[1] > b[1] ? -1 : 1) : b[0] - a[0]
  )
  return itemsArray
}

countVegetables(items)

// 28. Sort through the items in the box finding the coins and putting aside anything else.
// "mon" value is 1, "monme" value is 60
// Determine the minimum number of coins to pay for tofu. You must pay with exact change and if you do not have the correct change return “leaving the market”.
// If the cost of tofu is higher than your total amount of money also return “leaving the market”.

const coinBox = `monme mon mon monme`

function buyTofu(cost, box) {
  const coinsArray = box.split(" ")
  const monCount = coinsArray.filter(coin => coin === "mon").length
  const monMeCount = coinsArray.filter(coin => coin === "monme").length
  const coinsSum = monCount * 1 + monMeCount * 60
  const coinsMonMeNumber =
    Math.floor(cost / 60) <= monMeCount
      ? Math.floor(cost / 60)
      : Math.floor(cost / 60) - monMeCount
  const coinsMonNumber = cost - coinsMonMeNumber * 60
  const coinsOverall = coinsMonMeNumber + coinsMonNumber
  if (coinsMonMeNumber > monMeCount || coinsMonNumber > monCount) {
    return "leaving the market"
  } else if (coinsSum < cost) {
    return "leaving the market"
  }
  return [monCount, monMeCount, coinsSum, coinsOverall]
}

buyTofu(122, coinBox)

// 29. Find the position of second occurence of "zip" in string

const str = `Zip is a file format used for data compression and archiving. A zip file contains one or more files that have been compressed, to reduce file size, or stored as is. The zip file format permits a number of compression algorithms.`

function findZip(str) {
  const zipWord = /\b\w*zip\w*\b/gi
  const matchedZip = str.match(zipWord)
  return str.lastIndexOf(matchedZip[matchedZip.length - 1])
}

findZip(str)

// 30. Check which of given words in array are the anagrams of the Word.

function anagrams(word, words) {
  const wordSet = word.split("").sort().join("")
  return words.filter(w => wordSet === Array.from(w).sort().join(""))
}

anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])
