import "./style.css";

let div1 = document.querySelector('.container') ;
let div2 = document.querySelectorAll('.container') ;
let div3 = document.getElementById('app');
let div4 = document.getElementsByClassName('.container') ;
let div5 = document.getElementsByTagName('div') ;
let div6 = document.getElementsByClassName('.container') ;
// let div7 = document. ;
// let div8 = document. ;
// let div9 = document. ;

// for (let i = 65; i <= 90 ; i++) {
//   console.log(String.fromCharCode([i]));
// }

// for (let i = 97 ; i <= 122 ; i++) {
//   console.log(String.fromCharCode([i]));
// }

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
  return getAlphabet();
}

console.log(dyn(getAlphabet));