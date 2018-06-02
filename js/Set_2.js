// 1. Sort numbers in ascending order

function sortNumsAscending(arr) {
    return arr !== null ? (arr.sort((a,b) => a-b)) : [];
}

sortNumsAscending([10,1,50,4]);

// 2. Maskify the string

function maskify(str) {
    var strTwo = str.split("");
    for (var i = 0; i < strTwo.length - 4; i++) {
        strTwo[i] = '#'
    }
    return strTwo.join("")
}

maskify("1078398712");

// 3. Return the factorial

function factorial(int) {
    var result = 1;
    for (var i = 1; i <= int; i++) {
        result *= i;
    }
    return result
}

factorial(3);

// 4. Create a function that takes an array of numbers and returns the following statistics:
    // Minimum Value
    // Maximum Value
    // Sequence Length
    // Average Value

function minMaxLengthAverage(arr) {
    var result = [];
    result.push(Math.min(...arr));
    result.push(Math.max(...arr));
    result.push(arr.length);
    result.push(arr.reduce((a,b) => a+b) / arr.length);
    return result;
}


minMaxLengthAverage([30, 43, 20, 92, 3, 74]);

// 5. Find the missing number in array

function missingNums(arr) {
    for (var i = 1;  i <= 10; i++) {
        if (arr.indexOf(i) === -1) {
            return i
        }
    }
}

missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]);

// 6. Remove duplicates from array. Without "SET" method.

function removeDups(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

removeDups(["John", "Taylor", "John", "John"]);
