import "./style.css";
let resp1 = "";
let resp2 = "";
// let div1 = document.querySelector('.container') ;
// let div2 = document.querySelectorAll('.container') ;
let div = document.getElementById('app');
// let div4 = document.getElementsByClassName('.container') ;
// let div5 = document.getElementsByTagName('div') ;
// let div6 = document.getElementsByClassName('.container') ;
// let body = document.body;
// let div7 = body.lastChild ;
// let div8 = document.nodeName ;
// let div9 = document. ;
const input = document.createElement('input');




for (let i = 65; i <= 90 ; i++) {
  resp1 += String.fromCharCode([i]);
 }

 for (let i = 97 ; i <= 122 ; i++) {
   resp2 += String.fromCharCode([i]);
 }
console.log (resp1);
console.log (resp2);



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
console.log(getAlphabet());
// Pour stocker une variable, une constante est appropriée parce qu'on ne changera rien dans celle-ci.



const dyn = (getAlphabet) => {
  let respM;
  for (let i = 0; i < getAlphabet.length; i++) {
    respM = getAlphabet([i]);
  }
  return respM;
}


// DOM
div.appendChild(input);
const numberOfLetter = document.createElement('div');
numberOfLetter.classList.add('letterss');

input.type = "text";
input.placeholder = "Saisissez des lettres";

// FIN DOM