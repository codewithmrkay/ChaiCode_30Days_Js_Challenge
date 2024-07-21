console.log('jai shree ram')
//?----------- create a array and log them
let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
//?------------- create a array and log fist and last element
let arr2 = [1,2,3,4,5]
console.log(arr2[0],arr2[arr2.length-1])
//?------------- create a array and push new number at end and log new array
let beforepush = [10,20,30]
console.log(beforepush)
beforepush.push(9)
console.log(beforepush)
//?------------------- use pop method to remove element from end and log array 
let beforepop = [10,20,30]
console.log(beforepop)
beforepop.pop()
console.log(beforepop)
//?------------------- use shift method to remove first element from array and log array 
let beforeshipt = [5,4,3]
console.log(beforeshipt)
beforeshipt.shift()
console.log(beforeshipt)
//?------------------- use unshift method to add element at first and log array 
let beforeunshift = [9,8,7]
console.log(beforeunshift)
beforeunshift.unshift(5)
console.log(beforeunshift)
//?------------------- use map method to change all element to double and log array 
let mapArr = [2,3,4]
let newMapArr = mapArr.map((e)=>{
    return e*2
})
console.log(newMapArr)
//?------------------ use filter method to create array  with only even number and log array 
let filterArr = [1,2,3,4,5,6,7,8]
let newFilterArr = filterArr.filter((e)=>{
    return e%2==0
})
console.log(newFilterArr)
//?------------------ use reduce method to add all element and log array
let reduceArr = [1,2,3,4,5,6,7,8]
let newReduceArr = reduceArr.reduce((acc,curr)=>{
    return acc+curr
})
console.log(newReduceArr)
//?-------------------------- use for loop over the array and log each element
let forArr = [1,2,3,4,5,6,7]
for (let i = 0; i < forArr.length; i++){
    console.log("Element by forLoop",forArr[i])
}
//?-------------------------- use foreach loop over the array and log each element
let forEachArr = [1,2,3,4,5,6,7]
forEachArr.forEach((e)=>{
    console.log("Element by forEach",e)
})
//?-------------------------- create multidimentional array and log the entire array
let multiArr = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(multiArr)
//extra 😉--------------> log each element of array
for(let i = 0;i<multiArr.length;i++){
    for(let j = 0;j<multiArr.length;j++){
        console.log(multiArr[i][j])
    }
}
//?-------------------------------------access and log the specific element of 2D array
console.log("specific element is ",multiArr[2][1])