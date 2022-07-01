function setActive(){
    document.querySelector(".burgerContainer").classList.toggle("active");
    document.body.classList.toggle("lock");
    console.log('ping');
}

console.log(document.querySelector(".burgerContainer p"));
document.querySelector(".burgerContainer p").addEventListener("click", setActive);
console.log(document.querySelector(".burgerContainer .burgerIcon"));
document.querySelector(".burgerContainer .burgerIcon").addEventListener("click", setActive);


