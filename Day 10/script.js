console.log('jai shree ram')
//?----------------------- add event that change text in paragraph
let p = document.querySelector("p")
document.querySelector(".chP").addEventListener("click", () => {
    p.textContent = `le change kar dala`
})
//?-------------------- add double click event to toggle visibility of img
let img = document.querySelector("img")
img.addEventListener("dblclick", () => {
    img.style.opacity = img.style.opacity == 0.5 ? 1 : 0.5
})
//?---------------add mouseover event that change background color
let box = document.querySelector(".box")
box.addEventListener("mouseover", () => {
    box.style.cssText = "background:linear-gradient(0deg,red,blue);"
})
//?---------- add mouseout event that reset background color
box.addEventListener("mouseout", () => {
    box.style.cssText = "background:linear-gradient(0deg,yellow,orangered);"
})
//?----------------------key down event that log  key pressed
document.addEventListener("keydown", (e) => {
    // console.log(e.code)
})
//?---------------- key up event to input field that displays current value in paragraph
let input = document.querySelector("input")
let inputPara = document.querySelector(".inp")
input.addEventListener("keyup", () => {
    inputPara.textContent = input.value
})
//?--------------------------------add a submit event to form that prevent defalut submition and log form data in console
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data)
})
//?---------------------add a change event listner that display  current value in paragraph
let select = document.querySelector("select")
select.addEventListener("change", () => {
    let option = select.options[select.selectedIndex].textContent
    document.querySelector(".sel").textContent = option
})
//?----------------------add click event to list that log text of clicked list item using event delegation
let ul = document.querySelector("ul")
ul.addEventListener("click", (e) => {
    console.log(e.target.textContent)
})
//?---------------add event listner to parent element that listen for event from dynamically added child elements
let parent = document.querySelector(".parent")
let add = document.querySelector(".add")
parent.addEventListener("click", (e) => {
    if(e.target==`${add}`){
        let div = document.createElement('div')
    div.textContent = "new div"
    div.setAttribute('class', 'child')
    parent.appendChild(div)
    }
    else{
console.log(`press add not parent`)
    }
})