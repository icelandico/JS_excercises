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

// 7. Pi to N Decimal Places

function myPi(n) {
    return parseFloat((Math.PI).toFixed(n))
}

myPi(3);

// 8. Remove Every Vowel from a String

function silenceTrump(str) {
    var result = str.split("");
    for (x in result) {
        if (result[x].match(/[aeiouAEIOU]/g)) {
            result[x] = ""
        }
    }
    return result.join("");
}

silenceTrump("Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please " +
             "don’t feel so stupid or insecure,it’s not your fault");

// 9. Sort Numbers in Descending Order

function sortDecending(num) {
    return parseInt(num.toString().split("").sort((a,b) => b-a).join(""));
}

sortDecending(73065);

// 10. Write a function that takes four string arguments. You will be comparing the first string to the three
//     next strings. Verify if the first string starts with the second string, includes the third string, and ends
//     with the fourth string.

function verifySubstrs(mainStr, head, body, tail) {
    if (mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail)) {
        return "My head, body, and tail."
    } else {
        return "Incomplete"
    }
}

verifySubstrs("Centipede", "Cent", "tip", "pede");

// 11. Calculate the mean of array elements

function mean(arr) {
    return parseFloat((arr.reduce((a,b) => a+b) / arr.length).toFixed(2))
}

mean([1,2,3]);

// 12. Count Ones in Binary Representation of Integer

function countOnes(i) {
    i = i.toString(2);
    var counter = 0;
    for (x in i) {
        if (i[x] === '1') {
            counter += 1;
        }
    }
    return counter;
}

countOnes(3);

// 13. Modify the object collection (JSON)

// var collection = {
//     "2548": {
//         "album": "Slippery When Wet",
//         "artist": "Bon Jovi",
//         "tracks": [
//             "Let It Rock",
//             "You Give Love a Bad Name"
//         ]
//     },
//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245": {
//         "artist": "Robert Palmer",
//         "tracks": [ ]
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }
// };
//
// function updateRecords(id, prop, value) {
//     if (value === "") {
//         delete collection[id][prop];
//     } else {
//         if (!collection[id].hasOwnProperty(prop)) {
//             if (prop === "tracks") {
//                 collection[id][prop] = [];
//                 collection[id][prop].push(value);
//             } else {
//                 collection[id][prop] = value;
//             }
//         } else {
//             if (prop === "tracks") {
//                 collection[id]["tracks"].push(value);
//                 console.log("HEEE")
//             } else {
//                 collection[id][prop] = value;
//             }
//         }
//     }
//     return collection
// }
//
// updateRecords(5439, "album", "New album Title");

// 14. Given an array, find the int that appears an odd number of times.

// function findOdd(A) {
//     //happy coding!
//     return 0;
// }

// 15. Basic email validation

// function validateEmail(str) {
//     let chars = new RegExp(/@./);
//     if (chars.test(str)) {
//         if (str[str.indexOf('@') - 1] !== undefined && (str.slice(str.indexOf('@'))).indexOf('.') > -1) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// }
//
// validateEmail("@edabit.com");

// 16. Str is a string give. "sp" is a separator. For example:
//     splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n";

// function splitAndMerge(str,sp){
// //     str = (str.split(" ")).map(x => x.split(""));
// //     return (str.map(x => x.join(sp))).join(" ");
// // }
// //
// // console.log(splitAndMerge("My name is John","."));

// 17. Find maximal divisor. Result is: divisible by divisor, less than or equal to bound and is greater than 0.

// function maxMultiple(divisor, bound){
//     i = 0;
//     result = 0;
//     while (i <= bound) {
//         if (i % divisor === 0) {
//             result = i;
//         }
//         i++
//     }
//     return result
// }
//
// maxMultiple(10,50);

// 18. Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.Given an array
// of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is
// the total weight of team 1, and the second one is the total weight of team 2.

// function rowWeights(array){
//     let result = [0,0];
//     for (let i = 0; i < array.length; i++) {
//         if(i % 2 === 0) {
//             result[0] += (array[i])
//         } else {
//             result[1] += (array[i])
//         }
//     }
//     return result;
// }
//
// rowWeights([100, 50, 100, 50]);


