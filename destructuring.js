//array destructure

let numbers = [10, 20, 30, 40, 50];
let [num1, num2, num3, ...x] = numbers;
// console.log(num1, num2, num3, x);

//Swap variable
let a=10, b= 20;
[a,b] = [b,a];
// console.log(a,b);

//Object destructuring
const studentInfo = {
    id: 101,
    name: 'Habib',
    gpa: 4.94,
    languages: {
        native: 'bangla',
        begginer: 'english'     
    }
}
// console.log(studentInfo.gpa);
const {id, name, languages} = studentInfo;
// console.log(id, name);
// console.log(name, languages);
// console.log(name, languages.native);


//destructuring function parameter
 const studentDetail = ({id, fullName}) => {
    // console.log(`${student.id}, ${student.fullName}`);
    console.log(`${id}, ${fullName}`);

 } 

 const student = {
    id: 102,
    fullName: 'Habibur Rahaman'
 }

 studentDetail(student);



