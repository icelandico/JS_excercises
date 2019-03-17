// 1. Implement the function unique_in_order which takes as argument a sequence and returns a list
// of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = function (iterable) {
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    iterable[i] !== iterable[i+1] ? result.push(iterable[i]) : null
  }
  return result
}

uniqueInOrder('AAAABBBCCDAABBB')

// 2. Convert time to readable format

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor(((seconds / 3600) % 1) * 60);
  const secs =  Math.round(((((seconds / 3600) % 1) * 60) % 1) * 60)
  const readable = [hours, minutes, secs]
  const result = readable.map(time => time < 10 ? '0' + time : time)
  return result.join(':')
}

humanReadable(86399);

// 3. Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  const dividers = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      dividers.push(i)
    }
  }
  const sum = dividers.reduce((prev, next) => prev + next, 0);
  return sum
}

multiplesOf3and5(1000); // 233168

// 4. Sum of even Fibonacci numbers

function fiboEvenSum(n) {
  let numbers = [1, 2];
  for (let i = 2; i <= n; i++) {
    numbers.push(numbers[i-1] + numbers[i-2])
  }
  return numbers.filter(num => num % 2 === 0).reduce((prev, next) => prev + next, 0)
}

fiboEvenSum(10);

// 5. Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4]} 
// and returns an array of objects like { name: 'John', topNote: 5 }.
// If student has no notes(an empty array) then let's assume topNote: 0

function getStudentsWithNamesAndTopNotes(students) {
  const topNotesArr = students.map(student => (
    { 
      name: student.name,
      topNote: Math.max(...student.notes, 0) 
    }))
  return topNotesArr
}

const students = [
  { 
    name: 'John',
    notes: [-5, 5, 3, -1, 6, 2]
  },
  {
    name: 'Andy',
    notes: [3, -2, 5, 0, -3]
  },
  {
    name: 'Jack',
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
  filteredNotes.forEach(item => item.notes.forEach(note => counter[note] ? counter[note] += 1 : counter[note] = 1))
  return counter
}

getNotesDistribution(students)

// 7. Write a function that takes a negative or positive integer, which represents the number of minutes
// before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.

function partiallyHide(phrase) {
  const words = phrase.split(" ")
  const coded = words.map(word => word[0] + "-".repeat(word.length - 2) + word[word.length - 1])
  return coded.join(" ")
}


const strg = "skies were pretty"
partiallyHide(strg)

// 8. Create a function that takes an integer and returns an array from 1 to the given number, where:
// If the number can be divided evenly by 4, amplify it by 10(i.e.return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.

function amplify(num) {
  const numArray = Array.from(new Array(num), (x, i) => i + 1)
  const mapped = numArray.map(number => number % 4 === 0 ? number * 10 : number)
  return mapped
}

amplify(10)

// 9. Create a function that takes in an initial word and filters out an array to contain words
// that start with the same letters as the initial word.

function dictionary(initial_word, words) {
  return words.filter(word => word.startsWith(initial_word) ? word : null)
}

dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])

// 10. Write a program that will calculate the number of trailing
// zeros in a factorial of a given number.

function zeros(n) {
  let counter = 0
  for (i = 5; (n / i) >= 1; i = i * 5) {
    counter += n / i
  }
  return Math.floor(counter)
}

console.log(zeros(217883360))

