// var
// var can be redeclared and reassigned 
// It has local and global scope
// var does'nt have a block scope, it has function scope
var a =10;
a= 30
console.log("global a",a);


function localVar(){
    var  a = 20;
    console.log("local a:",a);
    if(true){
        var b = 40;
    }
    console.log("b",b);
}
localVar()
console.log("===============================");


for(var i=1;i<=5;i++){
    console.log("i:",i);
    
}
console.log(i);//6
console.log(i);//6
console.log("===============================");

//let
// let can't be redeclared, but it can be reassigned
//let has global and local scope
//it has block scope
let c=45;
// let c = 50;//Uncaught SyntaxError: Identifier 'c' has already been declared (at scopes.js:35:5)
c=50;
console.log("global let",c);
console.log("===============================");

function localLet(){
    let  c = 55;
    console.log("local c:",c);
    if(true){
        let d = 23
    
    console.log("d",d );
    } 

//  console.log("d",d); //scopes.js:49 Uncaught ReferenceError: d is not defined at localLet

}
localLet()

console.log("===============================");
for(let j=1;j<=5;j++){
    console.log("j:",j);  
}
// console.log("j:",j);//Uncaught ReferenceError: j is not defined
console.log("===============================");



//const
// const cannot be re-declared , or re-assigned
//it has global and local scope
//it has block scope

const d = 100;
    // d=200
    console.log("global const",d);

function localConst(){
    const d = 200;
    console.log(d);
    if(true){
        const e = 232
        console.log("e:",e );
    } 
    // console.log("e",e );// error Uncaught ReferenceError: e is not defined at localConst
    
}
localConst()

//Uncaught TypeError: Assignment to constant variable.  
// for(const k=10;k<=20;k++){
//     console.log("k",k);
// }
