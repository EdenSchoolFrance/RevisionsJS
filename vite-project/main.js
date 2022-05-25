import "./style.css";

/*for (let i = 97; i <= 122; i++) {
  console.log(String.fromCharCode(i));
}

let i = 65;

while (i <= 90) {
  console.log(String.fromCharCode(i));
  i++;
}*/

function getAlphabet() {
  let tmp = [];
  for (let i = 65; i <= 122; i++) {
    if (i === 91) {
      i = 97;
    }
    tmp.push(String.fromCharCode(i));
  }
  return tmp;
}

getAlphabet();

/*const wayOne = document.querySelector(".container");
const wayTwo = document.getElementById("#app");
const wayFour = document.querySelector("div#app");
const wayFive = document.querySelector("div#app.container");
const waySix = document.querySelector("div.container#app");
const waySeven = document.querySelector(".container#app");
const wayHeight = document.querySelector("#app.container");
const wayNine = document.querySelector("div");*/

const wayThree = document.querySelector("div.container");

const input = document.createElement("input");
input.setAttribute("type", "text");
input.placeholder = "Saisissez des lettres";

wayThree.appendChild(input);

const div = document.createElement("div");
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.justifyContent = "center"

wayThree.appendChild(div);

const lengthOfInput = document.createElement("p");
lengthOfInput.setAttribute("class", "numberOfLetter");
lengthOfInput.style.textAlign = "right";

div.appendChild(lengthOfInput);

input.addEventListener("input", () => {
  lengthOfInput.innerHTML = input.value.split("").length;
});

for (let getAlphabets of getAlphabet()) {
  const showAlphabet = document.createElement("p");
  showAlphabet.setAttribute("class", "allLetter");
  div.appendChild(showAlphabet);
  if (input.value === "") {
    showAlphabet.innerHTML = getAlphabets;
  } 

  function getInputValue () {
    const allLetter = document.querySelectorAll(".allLetter");
    let tmp = [];
    tmp.push(getAlphabet())
    let a = [];
    a.push(input.value.split(""))

    for (let i = 0; i < allLetter.length; i++) {

    }
  }
  
  input.addEventListener("input", getInputValue);
}

const allLetter = document.querySelectorAll(".allLetter");

for (let i = 0; i < allLetter.length; i++) {
  allLetter[i].style.border = "1px solid black";
  allLetter[i].style.display = "inline";
  allLetter[i].style.margin = "1rem";
  allLetter[i].style.width = "5rem";
  allLetter[i].style.padding = "2rem 0";
  if (i % 5 === 0) {
    allLetter[i].style.backgroundColor = "rgba(128, 128, 128, .5)";
  }
}

