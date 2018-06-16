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