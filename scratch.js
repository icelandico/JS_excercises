// Creates array that consists of max numbers from arrays

/*
function largestOfFour(arr){
    var newArray = [];
    for (i=0; i < arr.length; i++) {
        newArray.push(Math.max.apply(null, arr[i]))
    }
    console.log(newArray);
}




largestOfFour([[13,27,18,26], [4,5,1,3],[32,35,37,39], [1000,1001,857,1]]);

*/

// Checks if the string ('target') is the ending string of phrase ('str')

    function confirmEnding(str, target) {
        var last = str.substr(-(target.length));
        console.log(last);

        if (target.toLowerCase() == last.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }

    confirmEnding("This is a test string", "ing");

// Shorter version of upper one

function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
};

confirmEnding("This is a test string", "ing");

//




