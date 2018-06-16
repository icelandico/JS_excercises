// 1. Create a function that takes a string and returns a new string with its first and last characters swapped.

function flipEndChars(str) {
    if (typeof(str) !== "string" || str.length < 3 ) {
        return 'Incompatible';
    } else if (str[0] === str[str.length - 1]) {
        return 'Two\'s a pair.';
    } else {
        return ((str[0] = str[str.length - 1]) + str.slice(1, -1) + (str[str.length - 1] = str[0]))
    }
}

flipEndChars('switcharoo');

// 2. Pig Latin. Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

function pigIt(str){
    let punctuation = new RegExp(/[.,\/#!$%\^&\*;:]/);
    str = str.split(" ");
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (punctuation.test(str[i])) {
            result.push(str[i])
        } else {
            result.push(str[i].slice(1) + str[i][0] + 'ay')
        }
    }
    return result.join(" ")
}


pigIt("Hello world !");

