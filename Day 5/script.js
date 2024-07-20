console.log("jai shree ram")
//?--------------------------> Number is even or odd function
function evenOdd(num) {
    console.log((num % 2 == 0) ? 'even' : 'odd')
}
evenOdd(5)
//?-------------------------- Square of number
function square(num) {
    console.log(`squre of ${num} is ${num * num}`)
}
square(5)
//?----------------------------max of two numbers
function minmax(a, b) {
    if (a > b) {
        console.log(`${a} is max`)
    }
    else if (a < b) {
        console.log(`${b} is max`)
    }
    else {
        console.log('both are equal')
    }
}
minmax(5, 5)
//?------------------------------- concate two string
function join(str1, str2) {
    console.log(str1.concat(" ", str2))
}
join('hellow', 'moto')
//?-------------------- sum of two num by arrow function
let sum = (a, b) => {
    return a + b
}
console.log(sum(4, 9))
//?---------------------- check character is present or not
let checkChar = (str, ch) => {
    if (str.indexOf(ch) > -1) {
        console.log("yes na gagadi");
    }
    else{
        console.log('nahi mila babadi')
    }
    //*-------------------OR
    return str.includes(ch)
}
console.log(checkChar('hellow moto', 'b'))
//?---------------------------- function return product and with second paremeter is default
function product(a,b=5){
console.log(a*b)
}
product(2,4)// 8 
product(2)// bcoz we set default value for b which is 5 so 2*5 is 10😉
//?--------------------------- funtion return greeting message and age has be default value
function greet(name,age=20){
    console.log(`welcome ${name} Boss , now your age is ${age}`)
}
greet('moye',45)
//?--------- Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
// let hof1 = function f1(n, f) { 
//     for (let i = 0; i < n; i++) {
//         f();
//     }
// }
// function test() {
//     console.log("test");
// }
// hof1(5, test);
  let demo = function(f1,n){
    for (let index = 0; index < n; index++) {
        f1()
    }
}
function moye(){
    console.log('moye')
}
console.log(demo(moye,3))
//?--- Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
let Finalresult = function demo(f1,f2,num){
    let result = f1(num)
    return f2(result)
}
function f1(num){
 return num + 5
}
function f2(result){
    return result-5
}
console.log(Finalresult(f1,f2,5))