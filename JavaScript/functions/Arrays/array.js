var fruits = ["apple","mango","grapes","Kiwi"]
for(var i = 0;i <=fruits.length - 1; i++){
    // console.log("the fruits are:", fruits[i]);
    console.log(`fruit in index ${i} is ${fruits[i]}`);
    
}

// reverse loop A for loop in JavaScript is a control flow statement used to repeatedly execute a block of code as long as a specified condition is met.
for(var i = fruits.length - 1;i >=0; i--){
    // console.log("the fruits are:", fruits[i]);
    console.log(`fruit in index ${i} is ${fruits[i]}`);
    
}
console.log("=================================================");


var books=[
    {
    bookName: "The Night Circus",
    bookPrice: 1300,
    bookAuthor: "Erin Morgenstern"
    },
    {
    bookName: "The Shadow of the Wind",
    bookPrice: 1400,
    bookAuthor: "Carlos Ruiz Zafón"
    },
    {
    bookName: "A Court of Thorns and Roses",
    bookPrice: 1500,
    bookAuthor: "Sarah J. Maas"
    },
    {
    bookName: "The Name of the Wind",
    bookPrice: 1600,
    bookAuthor: "Patrick Rothfuss"
    },
    {
    bookName: "Gone Girl",
    bookPrice: 1000,
    bookAuthor: "Michelle Obama"
    },
    {
    bookName: "Big Little Lies",
    bookPrice: 700,
    bookAuthor: "Liane Moriarty"
    },
    {
    bookName: "Becoming",
    bookPrice: 500,
    bookAuthor: "Michelle Obama"
    }
]

//1.WAP to print book names having price >1000 

console.log("=================================================");
for (var i = 0; i <= books.length -1; i++) {
    // console.log(books[i].bookName);

    if (books[i].bookPrice > 1000) {
        // console.log("Books with price greater than 1000 :",books[i].bookName);
        console.log(`Books with price greater than 1000 :${books[i].bookName}`);
    }   
}
console.log("=================================================");
// 2.WAP to print book names whose author is Michelle Obama

for (var i = 0; i <= books.length -1; i++) {
    if (books[i].bookAuthor === "Michelle Obama") {
        console.log(`Books written by Michelle Obama: ${books[i].bookName}`);
    }   
}
console.log("=================================================");
// 3.WAP to print book name having more than 9 characters
for (var i = 0; i < books.length; i++) {
if (books[i].bookName.length  > 9) {
    console.log(`Book Name having more than 9 characters: ${books[i].bookName}`);
}   
}

function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedSentence = [];

    for (let i = 0; i < words.length; i++) {
        let reversedWord = "";
        
        for (let j = words[i].length - 1; j >= 0; j--) {
            reversedWord += words[i][j];
        }
        
        reversedSentence.push(reversedWord);
    }

    return reversedSentence.join(" ");
}   

let input = "Hello my name is Raju";
let output = reverseWords(input);
console.log(output);


// for of loop
// IT WORKS well with arrays 
//  it will provide the elements of an array 
//  for empty elements you will be getting undefined
var bikes = ["ktm", "z900",,"gt650","splender","ducati"]
for(var bike of bikes){
    console.log(bike);

    
}
console.log("===========================");


// var person ={
//     fName:"Raju",
//     lName:"K S",
//     age :18,
//     eyeColor:"green"

// }
// for(var per of person){
//     console.log(per);
    
// }
// Uncaught TypeError: person is not iterable

// for in array 
//works well with array and objects 
//it will provide index values 
//empty  elements in an array will be ignored
//for objects we will get the key and then we can get the value also
//array
var bikes = ["ktm", "z900",,,,,"gt650","splender","ducati"]
for(var index in bikes){
    console.log(`bike in ${index} is ${bikes[index]}`);

    
}
var person = {
    fName:"Raju",
    lName:"K S",
    age :18,
    eyeColor:"green"

}
for(var key in person){
    // console.log(person[key]);
    console.log(`key is ${key} and value ${person[key]}`);
    
}

var employee = [
{
    empId : 1,
    empName: "Raju",
    dept:"IT",
    salary:11000
},
{
    empId : 2,
    empName: "John Cena",
    dept:"Fitness",
    salary:8000
},
{
    empId : 3,
    empName: "James Bond",
    dept:"Fitness",
    salary:8000
},
{
    empId : 4,
    empName: "MSD",
    dept:"Sports",
    salary:12000
}
]
// WAP to print emp names whose salary >10000
for (var sal of employee) {
    if (sal.salary > 10000) {
        console.log(`Employee with salary greater than 10000 is ${sal.empName}`);
    }
}
console.log("===========================================================");

// WAP to print emp names whose dept has more than 6 characters
for(var empl of employee){
    if (empl.dept.length  > 6) {
        console.log(`Employee with chars greater than 6 is ${empl.empName}`);
    }

}
console.log("==========================================================");

//WAP to print employee names whose dept is Fitness
for(var empl of employee){
    if (empl.dept === "Fitness") {
        console.log(`Employee with dept fitness :${empl.empName}`);
    }

}
console.log("==========================================================");

for(var key of employee){
    if (empl.dept.length  > 6) {
        console.log(`Employee dept with chars greater than 6 is ${empl.empName}`);
    }

}

for(var empl of employee){
console.log(`Employee names are ${empl.empName}`);
}

for (var key in employee) {
    if (employee[key].salary > 10000) {
        console.log(`Employee with salary greater than 10000 is ${employee[key].empName}`);
    }
}

    for(var key in employee){
    if(employee[key].dept === "Fitness"){
        console.log(`Employee with dept fitness :${employee[key].empName}`);
    }
}
    for(var key in employee){
    if(employee[key].dept.length > 2){
        console.log(`Employee with dept of char 2 :${employee[key].empName}`);
    }
    }

 // Objects => solve using for in loop

//1.WAP to Count the Number of Properties
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue"
};
let prop = 0 ;
for (let key in car) {
    prop++;
}

console.log(`The total number of properties are: ${prop}`);


//2. WAP to calculate the Sum All Numeric Properties
const scores = {
    math: 85,
    science: 90,
    english: 78,
    history: "A",
    geography: 88
};
let sum = 0;
for(let key in scores){
if(typeof scores[key] === "number"){
    sum += scores[key];
    }

    }

console.log(`The total sum of properties are: ${sum}`);


//O/P => 341

//3. WAP to Check for Empty Object
const obj1 = {};                //o/p=> true
const obj2 = { name: "Emma" };	//o/p=> false

let isEmpty1 = true;
for (let key in obj1) {
    isEmpty1 = false;
    break;// can be used so the loop can be immediately stopped after finding one property  
}
console.log(isEmpty1); // try using count *

let isEmpty2 = true;
for (let key in obj2) {
    isEmpty2 = false;
break;
}
console.log(isEmpty2);







