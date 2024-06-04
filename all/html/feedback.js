let textareaElm = document.getElementById("textarea")
let totalCounterElm = document.getElementById("total-counter")
let remainingCounterElm = document.getElementById("remaining-counter")

textareaElm.addEventListener("keyup", ()=>{
    updateCounter();
});

function updateCounter(){
    totalCounterElm.innerText = textareaElm.value.length;
    remainingCounterElm.innerText = textareaElm.getAttribute("maxlength") - textareaElm.value.length;}