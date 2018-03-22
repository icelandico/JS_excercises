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
/*
    function confirmEnding(str, target) {
        var last = str.substr(-(target.length));
        console.log(last);

        if (target.toLowerCase() == last.toLowerCase()) {
            return true;
        } else {
            return false;
        }

    }

    confirmEnding("This is a test string", "ing");

// Shorter version of upper one

function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
};

confirmEnding("This is a test string", "ing");
*/

// Repeats the string given times ('num') - no .repeat() method used!
/*
function repeatStringNumTimes(str, num) {
    var i = num;
    var str2 = "";
    while (i > 0) {
        str2 += str;
        i--;
    }
    console.log(str2);
}

repeatStringNumTimes("SuDo", 7);
*/
// Truncates the string by number ('num') and adds ("...") in place of truncated string

// Calculates Years to get desired sum of money
/*
function calculateYears(principal, interest, tax, desired) {
    var Y = 0;
    if (principal != desired) {
        while (principal <= desired) {
            principal += ((interest * principal) - (tax * interest * principal));
            Y++;
        }
    } console.log(Y);

}

calculateYears(1000, 0.05, 0.18, 1000);

// Truncates a string by given number (num) and adds ("...")

function truncateString(str, num) {
    if (str.length > num) {
        console.log(str.slice(0,num-3)) + "...";
    } else if (num<=3) {
        console.log(str.slice(0, num)) + "...";

    } else {
        console.log(str);
    }


}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

*/
// Creates new array that consist of arrays basing on size
/*
function chunkArrayInGroups(arr, size) {
    var arr2 = [];
    for (i=0; i < arr.length; i+=size) {
        arr2.push(arr.slice(i, i+size));
    }
    console.log(arr2);

}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 4);

*/

// Return the remaining elements of an array after chopping off 'n' elements from the head (beginning)
/*
function slasher(arr, howMany) {
    console.log(arr.splice(0,howMany);

}

slasher([1,2,3], 2);

*/

// Returns true if the string in the first element of the array contains all of the letters from second array element
/*
function mutation(arr) {
    var newArr = arr[1].toLowerCase().split("");

    for (i=0; i<newArr.length; i++) {
        if (arr[0].toLowerCase().indexOf(newArr[i]) < 0) {
            console.log(false);
        }
        console.log(true);

    } console.log(newArr);

}

mutation(["hello", "hey"]);
*/

// Remove all falsy values from an array
/*
function bouncer(arr) {
    var newFalsy = arr.filter(function (val) {
        return Boolean(val) === true;

    });
    console.log(newFalsy);

}

bouncer([7, "ate", "", false, 9]);
*/

//Uncipher the text! Using ROT13 cipher code

function rot13(str) {
    var a = Array.prototype.map.call(str,function (x) {
        return x.charCodeAt(x);
    });

    console.log(a);
    var b = a.map(function (y) {
        if (y !== 32 && y < 77 && y >= 65) {
            return y+13;
        }
        else if (y !== 32 && y > 77 && y <=90) {
            return y-13;
        }
         else if(y < 65 || y > 90 ) {
            return y;
        }
        else {
            return 32;
        }

    });
    console.log(b);

    console.log(String.fromCharCode.apply(null, b));

    }


    rot13("SERR YBIR!");
