// Creates array that consists of max numbers from arrays


function largestOfFour(arr){
    var newArray = [];
    for (i=0; i < arr.length; i++) {
        newArray.push(Math.max.apply(null, arr[i]))
    }
    console.log(newArray);
}




largestOfFour([[13,27,18,26], [4,5,1,3],[32,35,37,39], [1000,1001,857,1]]);

/*
var arr2 = [[13,27,18,26],[4,5,1,3],[32,35,37,39], [1000,1001,857,1]]
console.log(arr2.length);





*/
