// function square(num1, num2) {
// var result = num1 * num2;
// document.write("result = " + result);
// }
// square(8, 5);

// function multiply(num1, num2) {
//     var result = num1 * num2;
//     document.write("Result = " + result);
// }
// multiply(4, 5);

// function multiply(num1, num2) {
//     var result = num1 * num2;
//     return result;
// }
// // var x = multiply(5,6);
// document.write(multiply(5,7));

// Addition function
// function addition(num1, num2) {
//     var result = num1 + num2;
//     return result;
// }
// var x = addition(120, 30);
// document.write(x)

// Subtraction
// function subtraction(x,y) {
//     var result = x-y
//     return result;
// }
// document.write("Result is =",subtraction(120, 20));


// function division(num1, num2) {
//    var result = num1 / num2
//     return result;
// }
// result = division(50, 10);
// document.write(result);

// function checkLeapYear() {
//     var leapyear = document.getElementById("year").value;
//     // console.log(leapyear);
//     if (leapyear % 4 == 0 && leapyear % 100 != 0) {
// alert(leapyear + " is a leapyear")
//     }else {
//         alert(leapyear + " is not a leapyear")
//     }
// }

// var numbers = [20, 25, 50, -200, 60];
// var largest = numbers[0];
// for (var i = 0; i < numbers.length; i++) {
//     if (largest < numbers[i]) {
//         largest = numbers[i];
//     }
// }
// console.log(largest);

// var num = [20, 50, 100, 5, -40];
// var biggest = num[0];

// for (var i = 0; i < num.length; i++) {
//     if (biggest < num[i]) {
//         biggest = num[i];
//     }
// }
// console.log(biggest);

// function checkLeapYear() {
//     var leapyear = document.getElementById("year").value;
//     console.log(leapyear);
//     if (leapyear % 4 == 0 && leapyear % 100 != 0) {
//         alert(leapyear + " is a LeapYear")
//     } else {
//         alert(leapyear + "is not a LeapYear");
//     }
// }

// var count = [30, 20, 50, 35, 500, 300];
// var largest = 0;
// function largestNum(count) {
//     for (var i = 0; i < count.length; i++) {
//         const element = count[i];
//         if (element > largest) {
//             largest = element;
//             return largest;
//         }
//     }
// }
// var large = largestNum(count);
// console.log(large);

// var numbers = [20, 50, 10, 500, 60, 80];
// var largest = 0;
// function largestNum(numbers) {
//     for(var i = 0; i < numbers.length; i++) {
//         var element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// var result = largestNum(numbers);
// console.log(result);

/* const students = ['abul', 'kasem', 'mannan', 'saddam', 'noyon', 'opurbo', 'nasir', 'sakib', 'opurbo', 'opurbo', 'noyon', 'mannan'];

const unique = [];

function removeDublicates() {
    const unique = [];
    for (const student of students) {
        // console.log(students.indexOf(student));
        if (unique.indexOf(student) == -1) {
            unique.push(student);
        }
        
    }
   
    // console.log(unique);
    return unique;
}
const uniqueStudent = removeDublicates(students);
console.log(uniqueStudent); */

// const students = ['rahim', 'karim', 'jabbar', 'karim', 'abdul', 'kuddus', 'boyatee', 'karim', 'rahim', 'jabbar'];

// let unique = [];
// function duplicateRemove(students) {
//     for (var student of students) {
//         // console.log(students.indexOf(student));
//         if (unique.indexOf(student) == -1) {
//             // console.log(unique);
//             unique.push(student);
//         }
//     }
//     return unique;
// }
// var result = duplicateRemove(students);
// console.log(result);

// const students = ['rahim', 'karim', 'jabbar', 'karim', 'abdul', 'kuddus', 'boyatee', 'karim', 'rahim', 'jabbar'];

// let unique = [];

// function removeDublicates() {

//     for (var student of students) {
//         if (unique.indexOf(student) == -1) {
//             unique.push(student);
//         }

//     }
//     return unique;

// }
// var result = removeDublicates();
// console.log(result);

// var numbers = [200, 50, 400, 500, 700, 10, 30];
// let large = 0;
// function largestNum() {
//     for (i = 0; i < numbers.length; i++) {
//         let element = numbers[i];
//         if(element > large) {
//             large = element;
//         }
//     }
//     return large;
// }
// var result = largestNum();
// console.log(result);

/* const workers = ['Rahim', 'Karim', 'Jasim', 'Jabbar', 'Karim', 'Nasir', 'Foysal', 'Jasim', 'Rahim', 'Jabbar'];

const uniqueWorker = [];

function remDupWorker() {
    for(worker of workers) {

        if(uniqueWorker.indexOf(worker) == -1) {
            uniqueWorker.push(worker);
        }
        
    } return uniqueWorker;
}

var uniqueWorkerResult = remDupWorker();
console.log(uniqueWorkerResult);
 */
// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
// }

// var num1, num2;

// function div(num1, num2) {
//     console.log(num1 / num2);
// }
// div(5000, 25);

