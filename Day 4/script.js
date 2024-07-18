console.log('jai shree ram')
//?----------------------> print 1 se 10 tak by for loop
let start = 1 , end = 10
for(;start<=end;start++){
console.log(start)
}
//?----------------------> print 1 se 10 tak by while loop
let shuru = 1 , samapt = 10
while(shuru<=samapt){
    console.log(shuru)
    shuru++
}
//?-------------------- 5 ka table
for(let table = 1;table<=10;table++){
    console.log(table*5)
}
//?-----------------pattern printing and ha ignore the color🤣😂😉
for(var i=1; i<=5; i++){
    console.log("* ".repeat(i));//-----> it is inbuld methoed
 }
 //?-------------------sum calculation 1 se 10 tak
 let sum = 0
 for(let i = 1;i<=10;i++){
    sum +=i
}
console.log(sum)
//?---------------------factorial by do-while loop
let num = 5
let fact = 1
do {
    fact*=num
    console.log(`${num} x `)
    num--
} while (num>0);
console.log(fact)