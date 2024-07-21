console.log('jai shree ram')
//?--------use template literals that includes varibles for person name , age and log it
let name = 'MrK'
age = 16
console.log(`Hey im ${name} and its my ${age} birthday...!`)
//?---------- make multiline string using template literals
const multilineString = `This is line 1
This is line 2
This is line 3`;

console.log(multilineString);
//?------------use array destructuring to extract first and second number  from array and log
const arr = [1, 2, 3, 4, 5, 6]
const [first, second] = arr;
console.log(first, second);
//?---------use object destructuring to extract title author from book object and log
const book = { 
    title: 'Ego is the enemy', author: 'Ryan Holiday' 
}
const {title,author} = book;
console.log(title,author);
//?----------use spread operator to copy all the elements of arr1 to arr2 and add more additional element
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [...arr1, 6, 7, 8, 9]
console.log(arr2);
//?-----------------use rest operator in a fucntion to accept an arbitary number of arguments sum then and return the result
function sum(...args) {
    // let sum = 0;
    // for (let i = 0; i < args.length; i++) {
    //     sum += args[i]
    // }
    // return sum;
    //--------------------------OR
    return args.reduce((a, b) => a + b,0)
}
console.log(sum(1, 2, 3, 4, 5, 6))
//?----------------write function that take two parameter and second parameter has default value 1 it return product
function product(a, b = 1) {
    return a*b
}
console.log(product(5,6))
console.log(product(5))
//?------------enhanced object literals to create object with methods and properties and log object
const person = {
    name: 'MrK',
    age: 16,
    greet() {
        console.log(`Hello ${this.name}!`)
    },
    bday(){
        age+=1
console.log(`lets celebrate ${this.age}th bithday`)
    }
}
console.log(person)
person.greet();
person.bday()
//?------------------------create object with computed property names based on variable and log object
const key = 'name'
const obj = {
    [key]: 'MrK',
    age: 16,
}
console.log(obj)
