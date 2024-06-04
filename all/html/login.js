//متغيرات لاستدعاء العناصر من ال(html)
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

//فنكشن خاص للساين ان بتن 
signinBtn.onclick = function(){
    nameField.style.maxHeight = "0px";
    title.innerHTML = "Sign in";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

//فنكشن خاص للساين اب بتن
signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}