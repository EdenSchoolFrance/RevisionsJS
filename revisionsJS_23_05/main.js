const div1 = document.querySelector("#app");

import "./style.css";

// for (let i = 97; i <= 122; i++) {
//   console.log(String.fromCharCode([i]));
// }

// let count = 64;

// while (count < 90) {
//   count++;
//   console.log(String.fromCharCode(count));
// }

const divcontainer = document.createElement("div");
divcontainer.style.display = "flex";
divcontainer.style.flexWrap = "wrap";
divcontainer.style.justifyContent = "center";

const getAlphabet = (str) => {
  for (let i = 65; i <= 122; i++) {
    if (i === 91) {
      i = 97;
    }
    let divltr = document.createElement("div");
    divltr.classList.add("ltr-div");
    divltr.textContent = String.fromCharCode([i]);
    divltr.style.width = "80px";
    divltr.style.alignItems = "center";
    divltr.style.lineHeight = "80px";
    divltr.style.height = "80px";
    divltr.style.border = "1px solid green";
    divltr.style.margin = "10px";
    divcontainer.appendChild(divltr);
    str += String.fromCharCode([i]);
  }
  return str;
};

// console.log(div1, "1");

// const div2 = document.getElementById("app");
// console.log(div2, "2");

// const div3 = document.getElementsByTagName("div")[0];
// console.log(div3, "3");

// const div4 = document.querySelector(".container");
// console.log(div4, "4");

// const div5 = document.getElementsByClassName("container")[0];
// console.log(div5, "5");

// const div6 = document.querySelector("div#app");
// console.log(div6, "6");

// const div7 = document.querySelector("div.container");
// console.log(div7, "7");

// const div8 = document.querySelectorAll("div#app")[0];
// console.log(div8, "8");

// const div9 = document.querySelectorAll(".container")[0];
// console.log(div9, "9");
let input = document.createElement("input");
input.placeholder = "Saisissez des lettres";
div1.appendChild(input);

let p = document.createElement("p");
p.style.margin = "10px 0px 0px 100px";
div1.appendChild(p);

div1.appendChild(divcontainer);

setInterval(() => {
  p.textContent = `Length : ${input.value.length}`;
});

console.log(getAlphabet(""));
