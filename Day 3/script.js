console.log('jai shree ram')
//?----------------------------number is positive or negative
let num = -5
if(num===0){
    console.log('numbe is zero')
}
else if(num>0){
    console.log('given num is positive')
}
else{
    console.log('given num is negative')
}
//?----------------------------- voting eligibility
let age = 20
console.log((age>=18)?'eligible':'not eligible')
//?------------------------------- day of wick
let day = 1
switch (day) {
    case 1:
        console.log('monday')
        break;
    case 2:
        console.log('tuesday')
        break;
    case 3:
        console.log('thirsday')
        break;
    case 4:
        console.log('wendsday')
        break;
    case 5:
        console.log('friday')
        break;
    case 6:
        console.log('saturday')
        break;
    case 7:
        console.log('sunday')
        break;

    default:
        console.log('yesa day nahi hota nalley')
        break;
}
//note ------- [ if any spelling mistakes then its a feature 🤡 ]
let marks =50
switch (true) {
    case marks>=100:
        console.log('WT**F')
        break;
    case marks>=90 && marks<=100:
        console.log('A')
        break;
    case marks>=80 && marks<=90:
        console.log('B')
        break;
    case marks>=70 && marks<=80:
        console.log('C')
        break;
    case marks>=60 && marks<=70:
        console.log('D')
        break;
    default:
        console.log('padh le beta')
        break;
}
//?-----------------------------leap year checking
let year = 2000
if(year%100==0){
    console.log('not leap year')
}
else if(year%400==0 && year%4){
    console.log('leap year na bacchi...!')
}
else{
    console.log('not leap year')
}