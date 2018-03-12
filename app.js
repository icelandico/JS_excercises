function func(str) {
    var arr = str.split(" ");
    var arr2 = [];

    for (i=0; i < arr.length; i++) {
        arr2.push(arr[i][0].toUpperCase()+(arr[i].slice(1)).toLowerCase());

    }
    var arr3 = arr2.join(" ");
    console.log(arr2);
    console.log(arr3);


}



func("WHATS wRONG with ME");
