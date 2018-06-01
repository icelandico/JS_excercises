// 1. Sort numbers in ascending order

function sortNumsAscending(arr) {
    return arr !== null ? (arr.sort((a,b) => a-b)) : [];
}

sortNumsAscending([10,1,50,4]);

