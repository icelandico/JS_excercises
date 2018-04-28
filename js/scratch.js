// 1. Checks if the string ('target') is the ending string of phrase ('str')

// function confirmEnding(str, target) {
//     var last = str.substr(-(target.length));
//     console.log(last);
//
//     if (target.toLowerCase() == last.toLowerCase()) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// confirmEnding("This is a test string", "ing");

// Shorthand version:

// function confirmEnding(str, target) {
//     return str.substr(-target.length) === target;
// };

// 2. Repeats the string given times ('num') - no .repeat() method used!

// function repeatStringNumTimes(str, num) {
//     var i = num;
//     var str2 = "";
//     while (i > 0) {
//         str2 += str;
//         i--;
//     }
//     console.log(str2);
// }
//
// repeatStringNumTimes("SuDo", 7);


// 3. Calculates Years to get desired sum of money

// function calculateYears(principal, interest, tax, desired) {
//     var Y = 0;
//     if (principal != desired) {
//         while (principal <= desired) {
//             principal += ((interest * principal) - (tax * interest * principal));
//             Y++;
//         }
//     } console.log(Y);
// }
//
// calculateYears(1000, 0.05, 0.18, 1000);

// 4. Truncates a string by given number (num) and adds ("...")

// function truncateString(str, num) {
//     if (str.length > num) {
//         console.log(str.slice(0,num-3)) + "...";
//     } else if (num<=3) {
//         console.log(str.slice(0, num)) + "...";
//
//     } else {
//         console.log(str);
//     }
// }
//
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

// 5. Creates new array that consist of arrays basing on size

// function chunkArrayInGroups(arr, size) {
//     var arr2 = [];
//     for (i=0; i < arr.length; i+=size) {
//         arr2.push(arr.slice(i, i+size));
//     }
//     console.log(arr2);
// }
//
// chunkArrayInGroups(["a", "b", "c", "d", "e"], 4);


// 6. Return the remaining elements of an array after chopping off 'n' elements from the head (beginning)

// function slasher(arr, howMany) {
//     console.log(arr.splice(0,howMany);
// }
//
// slasher([1,2,3], 2);

// 7. Returns true if the string in the first element of the array contains all of the letters from second array element

// function mutation(arr) {
//     var newArr = arr[1].toLowerCase().split("");
//
//     for (i=0; i<newArr.length; i++) {
//         if (arr[0].toLowerCase().indexOf(newArr[i]) < 0) {
//             console.log(false);
//         }
//         console.log(true);
//
//     } console.log(newArr);
// }
//
// mutation(["hello", "hey"]);

// 8. Remove all falsy values from an array

// function bouncer(arr) {
//     var newFalsy = arr.filter(function (val) {
//         return Boolean(val) === true;
//     });
//     console.log(newFalsy);
// }
//
// bouncer([7, "ate", "", false, 9]);

// 9. Uncipher the text! Using ROT13 cipher code

// function rot13(str) {
//     var a = Array.prototype.map.call(str,function (x) {
//         return x.charCodeAt(0);
//     });
//     var b = a.map(function (y) {
//         if (y < 77 && y >= 65 || (y >= 97 && y < 110)) {
//             return y+13;
//         }
//         else if (y > 77 && y <=90 || (y <= 122 && y >= 110)) {
//             return y-13;
//         }
//          else if (y < 65) {
//             return y;
//         }
//         else {
//             return 32;
//         }
//     });
//     return(String.fromCharCode.apply(null, b));
// }
//     console.log(rot13('11qbwwnaalkvaemi'));

// 10. Build a tower using "*" !

// function towerBuilder(nFloors) {
//     var arr = [];
//     i = 1;
//     a = 1;
//     while (i <= (nFloors*2)-1) {
//         arr.push(" ".repeat(nFloors-a) + "*".repeat(i) + " ".repeat(nFloors-a));
//         i += 2;
//         a += 1;
//     }
//     console.log(arr);
// }
// towerBuilder(2);

// 11. Capitalize first letter of word in given string

// String.prototype.toJadenCase = function () {
//     console.log(str.split(" ").map(x => x[0].toUpperCase() + x.substr(1).toLowerCase()).join(" "));
//     };
//
// var str = "bla bla nanan eee aere re qwqe";
// str.toJadenCase();

// 12. First argument (required): the original string to be converted.
//     Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first
//     word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused

// function titleCase(title, minorWords) {
//     var b = minorWords.split(" ").map(x => x.toUpperCase());
//     var a = title.split(" ").map(x => x.toUpperCase());
//
//     // var c = (title.split(" ").map(x => x[0][0].toUpperCase() + x.substr(1).toLowerCase()).join(' '));
//     // var a = (title.split(" ").map(x => x.substr(1).toLowerCase()).join(' '));
//     console.log(a, b);
//     for(i = 0; i < a.length; i++) {
//         for(y = 1; y < b.length; y++){
//             if(a[i] === b[y]) {
//                 a[i] =  a[i].toLowerCase();
//             }
//         }
//     }
//
//     console.log(a.join(' '));
// }
//
// titleCase('a clash of KINGS', 'a an the of');

// 13. How many times to fold a piece of paper to reach a given distance in meters? Paper has a thickness of 0.0001 m.

// function foldTo(distance) {
//     var s = 0.0001;
//     var fold = 0;
//     while (s <= distance) {
//         s *= 2;
//         fold ++;
//     }
//     console.log(fold)
// }

// foldTo(384000000);

//  14. You need to write regex that will validate a password to make sure it meets the following criteria:
//
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// function validate(password) {
//     console.log(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password));
// }
//
// validate('12eeeTzz');

// 15. Your goal in this kata is to implement a difference function, which subtracts one list from another and
// returns the result. It should remove all values from list a, which are present in list b.

// function array_diff(a, b) {
//     var x = [];
//     if (b.length > 0) {
//         for(i = 0; i < a.length; i++) {
//             for(z = 0; z < b.length; z++) {
//                 if (a[i] != b[z]) {
//                     x.push(a[i])
//                 }
//             }
//         }
//     } else {
//         console.log(a)
//     }
//     console.log(x);
// }

// Shorthand:
//
// function array_diff(a, b) {
//     console.log(a.filter(function(x) {
//         return b.indexOf(x) == -1; }));
// }
//
// array_diff([1,2,2], []);

// 16. Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

// function oddOrEven(array) {
//     var x = 0;
//     for (i=0; i < array.length; i++) {
//         x += array[i];
//     }
//     if (x%2 == 0 ) {
//         return 'even'
//     } else {
//         return 'odd'
//     }
// }

// Using reduce();

// function oddOrEven(x) {
//     console.log(x.reduce(function(x, y) {return x + y}));
//     }
//
// oddOrEven([1,2,3,98]);

// 17. Given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long
//     will it take B to catch A? The result will be an array [hour, min, sec] which is the time needed in hours,
//     minutes and seconds (don't worry for fractions of second).

// function race(v1, v2, g) {
//     var time = [];
//     var t = (g/(v2-v1)*3600);
//
//     var hours = Math.floor(t/ 3600);
//     var minutes = Math.floor(t%3600/60);
//     var seconds = Math.floor(t%3600%60);
//     console.log(t);
//     time.push(hours, minutes, seconds);
//     console.log(time)
// }
//
// race(80,91,37);

/// 18. "Given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)"

//     var products = [
//         { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
//         { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
//         { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
//         { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
//         { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
//     ];
//
// var productsICanEat = [];
//
// var abc = products.filter(function (x) {
//     return !x.containsNuts && !x.ingredients.some(function (a) {
//         return a === 'mushrooms'
//     })
// })
//
// console.log(abc);

// 19. Detect Pangram sentence. Ignore signs different than letters.

// function pangram(sentence) {
//     sentence = Array.from(new Set(sentence.toLowerCase().split("").filter(x => x.match(/[a-zA-Z]/))));
//     if (sentence.length === 26) {
//         return ("This is a pangram!!")
//     } else {
//         return "It's not a pangram"
//     }
// }
//
// console.log(pangram("The quick brown fox jumps over the lazy dog.!?"));



