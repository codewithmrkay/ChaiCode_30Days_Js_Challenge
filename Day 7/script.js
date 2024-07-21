console.log('jai shree ram')
//?--------------------------create a object book with properties like title ,author, and year and log them
let book = {
    title: 'javascript',
    author: 'sachin',
    year: '2020'
}
console.log(book)
//?------------------------access and log titl and author
console.log(book.title,book.author)
//?-------------------add methoed to book object that return a string with the book title and author and log the result calling this methoed
book.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
}
console.log(book.getSummary())
//?-----------------------add methoed to book object that takes year parameter and update year property and log the object
book.updateYear = function (newYear) {
    this.year = newYear
}
console.log(book.updateYear(2021),book)
//?------------------create a library object properties like  name and books (books is array of object ) and log them
let library = {
    name: 'sachin library',
    books: [
        {
            title: 'javascript',
            author: 'sachin',
            year:2222
        },
        {
            title:'c++',
            author:'kumar',
            year:2020
        },
        {
            title:'java',
            author:'mukesh',
            year:2021
        }
    ]
}
console.log(library)
//?-------------------access and log the name of library and title of the books
console.log(library.name)
library.books.forEach((e)=>{
    console.log(e.title)
})
//?--------------------------write a methoed that return string with book title and year use this keyword
// library.getInfo= function(){----------------------extra masti😉
//     return library.books.forEach((e)=>{
//         console.log(e.title,e.year)
//     })
// }
// console.log(library.getInfo())
book.getInfo = function(){
    return `${this.title} released in ${this.year}`
}
console.log(book.getInfo())
//?----------------------- use for in loop to iterate properties of object and log  them
//----------this also log the methoed like getInfo , getSummary , updateyear
// for(let val in book){
//     console.log(val,book[val])
// }
//----------------if we want only original properties then 
for (let key in book) {
    if (typeof book[key] !== 'function') {
        value = book[key];
        console.log(key, value);
    }
}
//?----------------------use object.keys and object.value methoed to log all keys and values of book object
console.log(Object.keys(book),Object.values(book))
