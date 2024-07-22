console.log("jai shree ram")
//?-----------select html element by its id and change its text content
let text = document.getElementById("text")
text.textContent=`ye bacchi im Mr.K`
//?-----------select html element by its class and change its bg color
let textBg = document.querySelector(".btn")
textBg.style.backgroundColor='blue'
//?-------------------create a div element add some text and append it to body
let div = document.createElement("div")
div.textContent="this is a div element"
document.body.append(div)
//?----------------create li element and add it to existing Ul
let ul = document.querySelector("ul")
let li = document.createElement("li")
li.textContent="this is a li element"
ul.prepend(li)
//?-----------select html element and remove it from dom
let removeElemetn = document.querySelector(".btn")
removeElemetn.remove()
//?-------------remove last child of specific html  element
let removeLastChild = document.querySelector("ul")
removeLastChild.removeChild(removeLastChild.lastElementChild)
//?-----------------select html element and change its attribute eg: src of img tag
let img = document.querySelector("img")
img.setAttribute("src","cg2.png")
//?-------------add and remove css class from html element
let addClass = document.querySelector(".mainBtn")
addClass.addEventListener("click",()=>{
    addClass.classList.toggle('btn1')
})
//?-------------click event lister who change paragraph text
addClass.addEventListener("click",()=>{
    text.textContent='i change bcoz button ka hukum aaaya'
})
//?-------------mouseover event who change boder color
addClass.addEventListener("mouseover",()=>{
    addClass.style.borderColor='yellow'
})