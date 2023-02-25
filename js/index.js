btnNavOpen = document.getElementById("nav-btn-open");
btnNavClose = document.getElementById("nav-btn-close");
navPhone = document.getElementById("nav");


btnNavOpen.addEventListener("click", ()=>{
    navPhone.classList.remove("Hidden")
})

btnNavClose.addEventListener("click", ()=>{
    navPhone.classList.add("Hidden")
})
