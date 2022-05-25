import "./style.css";
let resp1 = "";
let resp2 = "";
// const div1 = document.querySelector('.container') ;
// const div2 = document.querySelectorAll('.container') ;
const div = document.getElementById("app");
// const div4 = document.getElementsByClassName('.container') ;
// const div5 = document.getElementsByTagName('div') ;
// const div6 = document.getElementsByClassName('.container') ;
// const body = document.body;
// const div7 = body.lastChild ;
// const div8 = document.nodeName ;
// const div9 = document. ;
const input = document.createElement("input");

for (let i = 65; i <= 90; i++) {
  resp1 += String.fromCharCode([i]);
}

for (let i = 97; i <= 122; i++) {
  resp2 += String.fromCharCode([i]);
}

const getAlphabet = () => {
  let tmp = "";
  for (let i = 65; i <= 90; i++) {
    tmp += String.fromCharCode([i]);
  }

  for (let i = 97; i <= 122; i++) {
    tmp += String.fromCharCode([i]);
  }
  return tmp;
};

// Pour stocker une variable, une constante est appropriée parce qu'on ne changera rien dans celle-ci.

const dyn = (getAlphabet) => {
  let respM;
  for (let i = 0; i < getAlphabet.length; i++) {
    respM = getAlphabet([i]);
  }
  return respM;
};

// DOM

div.appendChild(input);

const numberOfLetter = document.createElement("div");
numberOfLetter.classList.add("letterss");
div.appendChild(numberOfLetter);
input.type = "text";

input.placeholder = "Saisissez des lettres";

// FIN DOM
let counter = 0;
input.addEventListener("keypress", () => {
  numberOfLetter.innerHTML = `${input.value.length + 1}`;
  const underInput = document.createElement("p");
  div.appendChild(underInput);
  underInput.style.display = "inline";
  underInput.style.margin = "25px";
  underInput.style.padding = "20px";
  underInput.style.border = "solid 1px";
  underInput.innerHTML = `${getAlphabet()[counter]}`;
  if (counter < 51) {
  counter ++;
   } else {
     counter = 0;
   }
});

