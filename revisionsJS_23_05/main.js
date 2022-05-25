import "./style.css";
let resp1 = "";
let resp2 = "";
// const div1 = document.querySelector('.container')[0];
// const div2 = document.querySelectorAll('.container');
const div = document.getElementById("app");
// const div4 = document.getElementsByClassName('.container');
// const div5 = document.getElementsByTagName('div')[0];
// const div6 = document.getElementsByClassName('.container');
// const body = document.body;
// const div7 = body.lastChild;
// const div8 = document.querySelectorAll('.container')[0];
// const div9 = document.querySelectorAll('div')[0];

for (let i = 65; i <= 90; i++) {
  resp1 += String.fromCharCode([i]);
}

// let i = 65;
// while (i < 91) {
  //   i++;
  // }
  
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
  
  const UpperCase = (a, letter)=>{
    const index = a.indexOf(letter);
    const code = a.fromCharCode(index);
    return code < 91;
  };
  console.log(UpperCase(getAlphabet, "r"));
  
  const dyn = (getAlphabet) => {
    let respM;
    for (let i = 0; i < getAlphabet.length; i++) {
      respM = getAlphabet([i]);
    }
    return respM;
  };

  // DOM
  
  const input = document.createElement("input");
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
    counter++;
  } else {
    counter = 0;
  }
});
