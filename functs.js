//1. Function Declaration

function add(a,b){
    return a+b
}
console.log(add(5,6))

//2. Function Expression
const mult=function(a,b){
    return a*b
}
console.log(mult(5,6))
//3. Arrow Function - Annoymous Function

const div=(c,d)=>{
    return c/d
}
console.log(div(10,5))

//4. Function Constructor
//new Function('a','b','return a+b;')(5,6)
const sb = new Function('e','f','return e-f;')
console.log(sb(10,2))

//IIFE function

// (function(){
//     //console.log("IIFE :The server is running");
//     console.log(666);
// })();

//6. Generator fucntion: function* and  yield keywords
function* generateNumber(){
    yield 1
    yield 2
    yield 3
    yield 4
}

const generator = generateNumber();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//7. Annonymous function
 
const nums= [1,2,3,4,5]
const sqrNums=nums.map(function(e){return e*e})
// nums.forEach(function(num){
//     console.log(num);
// }) 
console.log(sqrNums) 