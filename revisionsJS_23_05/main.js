import "./style.css";

for (let i = 97; i <= 122; i++) {
  console.log(String.fromCharCode(i));
}

let index = 65;
while (index <= 90) {
  console.log(String.fromCharCode(index));
  index++;
}

const getAlphabet = () => {
  let str = "";
  for (let i = 65; i <= 122; i++) {
    if (i == 91) {
      i = 97;
    }
    str += String.fromCharCode(i);
  }
  console.log(str);
  return str;
};

// J'ai stocker le resultat dans une constante car il ne sera jamais modifier.
const alphabet = getAlphabet();

const majmin = (str, letter) => {
  let index = str.indexOf(letter);
  let code = str.charCodeAt(index);
  if (code >= 65 && code <= 90) {
    console.log(true);
  } else {
    console.log(false);
  }
};

majmin(alphabet, "j");

// const app = document.getElementById("app");
// const app = document.getElementsByClassName("container");
// const app = document.getElementsByTagName("div");
// const app = document.querySelector("body > div");
// const app = document.querySelector("body .container");
// const app = document.querySelector("body #app");
// const app = document.querySelector("div");
// const app = document.querySelector(".container");
const app = document.querySelector("#app");
const header = document.querySelector("header");
const input = document.createElement("input");
input.placeholder = "Saisissez des lettres";
header.appendChild(input);
const p = document.createElement("p");
p.textContent = 0;
header.appendChild(p);
input.addEventListener("input", () => {
  p.textContent = input.value.length;
  changeAlphabet();
});

let filtredAlphabet = alphabet.split("");

const changeAlphabet = () => {
  let inputValue = input.value.split("");

  if (inputValue.length == 0) {
    filtredAlphabet = alphabet;
  } else {
    filtredAlphabet = alphabet.split("").filter((e) => {
      return inputValue.includes(e);
    });
  }
  showLetters();
};

const alphabetList = document.createElement("ul");
alphabetList.classList = "desktop";
app.appendChild(alphabetList);
const showLetters = () => {
  alphabetList.innerHTML = "";
  for (let i = 0; i < filtredAlphabet.length; i++) {
    const letter = document.createElement("li");
    letter.style.display = "inline-block";
    letter.style.height = "5rem";
    letter.textContent = filtredAlphabet[i];
    alphabetList.appendChild(letter);
  }
};
showLetters();
const changeDisplay = () => {
  if (window.innerWidth < 576) {
    alphabetList.classList = "smartphone";
  } else if (window.innerWidth < 992 && window.innerWidth > 576) {
    alphabetList.classList = "tablette";
  } else {
    alphabetList.classList = "desktop";
  }
};
window.addEventListener("resize", changeDisplay);
