const hands = document.querySelectorAll(".hands");
const lofts = document.querySelectorAll(".lofts");
const flex = document.querySelectorAll(".flex");
const shafts = document.querySelectorAll(".shafts");

const handleHandClick = (event) => {
    if (event.target.classList === "clicked") {
      event.target.classList.remove("clicked");
    } 
    else {
        for(const btn of hands){
            btn.classList.remove("clicked");
        }
      event.target.classList.add("clicked");
    }
};

const handleLoftClick = (event) => {
    if (event.target.classList === "clicked") {
      event.target.classList.remove("clicked");
    } 
    else {
        for(const btn of lofts){
            btn.classList.remove("clicked");
        }
      event.target.classList.add("clicked");
    }
};

const handleFlexClick = (event) => {
    if (event.target.classList === "clicked") {
      event.target.classList.remove("clicked");
    } 
    else {
        for(const btn of flex){
            btn.classList.remove("clicked");
        }
      event.target.classList.add("clicked");
    }
};

const handleShaftClick = (event) => {
    console.log(event.target);

    if (event.target.classList === "clicked") {
      event.target.classList.remove("clicked");
    } 
    else {
        for(const btn of shafts){
            btn.classList.remove("clicked");
        }
      event.target.classList.add("clicked");
    }
};


for(const btn of hands){
    btn.addEventListener("click", handleHandClick);
}

for(const btn of lofts){
    btn.addEventListener("click", handleLoftClick);
}

for(const btn of flex){
    btn.addEventListener("click", handleFlexClick);
}

for(const btn of shafts){
    btn.addEventListener("click", handleShaftClick);
}
