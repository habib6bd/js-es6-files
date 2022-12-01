// var text = 'w3resource';

// setInterval(() => {
//     // text = text[text.length - 1] + text.substring(0, text.length - 1);
//     let textLength = text[text.length - 1];
//     let subStrRem = text.substring(0, text.length - 1);
//     text = textLength + subStrRem;
    
//     console.log(text);

// }, 1000);

//For each function
// var num = [10, 20, 30, 40];
// var newNum = [];

// num.forEach(function(x) {
// newNum.push(x*x);
// })
// console.log(newNum);

//Map function
/* var num = [10, 20, 30, 40];
var newNum = num.map(function(x) {
return x*x
})

console.log(newNum); */


//Filter function
var num = [10, 20, 30, 40, 5, 7];
var newNum = num.filter(function(x) {
return x<10
})

console.log(newNum);