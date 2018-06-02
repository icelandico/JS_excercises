// 1. Sort numbers in ascending order

// function sortNumsAscending(arr) {
//     return arr !== null ? (arr.sort((a,b) => a-b)) : [];
// }
//
// sortNumsAscending([10,1,50,4]);

// 2. Maskify the string

function maskify(str) {
    var strTwo = str.split("");
    for (var i = 0; i < strTwo.length - 4; i++) {
        strTwo[i] = '#'
    }
    return strTwo.join("")
}

maskify("1078398712");