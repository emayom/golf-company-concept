const checkbox = document.getElementById("chk-box");
const logoImg = document.getElementById("logo-img");
const navs = document.querySelectorAll(".nav");

if(checkbox) {
    checkbox.addEventListener("click", handleMode);
}

function handleMode(){

    if(document.body.className === "light-mode") {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        logoImg.src = "/img/Logo-dark.png";

        navs.forEach((el)=> el.classList.add("dark-mode"));
        
        
    } else if (document.body.className === "dark-mode") {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        logoImg.src = "https://emayom.github.io/golf-company-concept/img/Logo-dark.png";

        navs.forEach((el)=> el.classList.remove("dark-mode"));
    }
}
