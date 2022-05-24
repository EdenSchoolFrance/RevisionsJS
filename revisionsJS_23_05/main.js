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

const input = document.createElement("input");
input.placeholder = "Saisissez des lettres";
app.appendChild(input);
const p = document.createElement("p");
p.textContent = 0;
app.appendChild(p);
input.addEventListener("input", () => {
  p.textContent = input.value.length;
});
