const textarea = document.querySelector(".use-keyboard-input");
let capsCheck = false;
const keyLayout = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "back",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
    "space"
];

const keyboard = document.createElement("div");
const keys = document.createElement("div")
keyboard.classList.add("keyboard");
keys.classList.add("keys")

const  keyLayout2 =() => {
    keys.innerHTML = ""
keyLayout.forEach(key=>{
    
    const button =  document.createElement("button");
    button.setAttribute("type", "button");
if(key === "space"){
    button.classList.add("space")
}
    button.innerText = key ;
    keys.appendChild(button);
    
button.addEventListener("click", (e)=>{
   
   
if(e.target.innerText == "space"){
  
    textarea.value +=  " ";
   
}
else if(e.target.innerText == "done"){


keyboard.classList.add("keyboard-hidden");

}
else if (e.target.innerText == "enter"){
    textarea.value += "\n";

}
else if (e.target.innerText == "caps"){
    
    toggleCaps()
    
}

else if (e.target.innerText == "back"){
  
    let ele = textarea.value.split("")
  
ele =  ele.splice(0, ele.indexOf(ele[ele.length - 1])).join("");


 textarea.value = ele ;
}
else{
    
textarea.value += e.target.innerText;
}
})
})
keyboard.appendChild(keys);
document.body.appendChild(keyboard);

}

textarea.addEventListener("focus", ()=>{
    keyboard.classList.remove("keyboard-hidden");
keyLayout2()


})

const  toggleCaps =() =>{
    
    capsCheck = !capsCheck;
    
   const allBtns = document.querySelectorAll(".keys button");
   
   for (const btn of allBtns) {
    
    if ( btn.innerText == "back" || btn.innerText == "enter" || btn.innerText == "done"  || btn.innerText == "space" || btn.innerText == "caps") {

        btn.innerText = btn.innerText
} else{
  
    capsCheck === true ? btn.innerText =   btn.innerText.toUpperCase() :  btn.innerText =  btn.innerText.toLowerCase();

}
}   
}





