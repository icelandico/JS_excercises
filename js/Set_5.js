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





