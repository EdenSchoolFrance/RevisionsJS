import "./style.css";

// De "a" à "z" en minuscule
// dans la consignes vous avez dit afficher donc j'ai décider de faire avec des consoles log
for (let i = 97; i <= 122; i++) {
  console.log(String.fromCharCode(i));
}

// De "A" à "Z" en majuscule
// dans la consignes vous avez dit afficher donc j'ai décider de faire avec des consoles log
let index = 65;
while (index <= 90) {
  console.log(String.fromCharCode(index));
  index++;
}

// function getALphabet

let getAlphabet = () => {
  // j'ai mit let en pour la varianle finalword car a chaque tour finalword change donc elle ne peut pas être une constante cue qu'une constante ne peut pas changer
  let finalword = "";
  let i = 65;
  while (i <= 122) {
    if (i === 91) {
      i += 6;
    }
    finalword += String.fromCharCode(i);
    i++;
  }
  return finalword;
};

// Je n'ai pas compris si il fallait trouver la lettre donner avec charCodeAt et avec indexof ou si il fallait en chosir un des deux.
let searchAlphabet = (alphabet, letter) => {
  alphabet.indexOf(letter);
  let ascii = letter.charCodeAt();
  if (ascii <= 90 && ascii >= 65) {
    return true;
  } else if (ascii <= 122 && ascii >= 97) {
    return false;
  }
};

// const div = document.querySelector('div')
// const div = document.body.childNodes[1]
// const div = document.getElementsByClassName('container')
// const div = document.getElementsByTagName("div")
// const div = document.querySelector('.container')
// const div = document.querySelectorAll('div')
// const div = document.body.children[0]
// const div = document.body.firstElementChild
const alletter = getAlphabet();

const div = document.getElementById("app");
const input = document.createElement("input");
const span = document.createElement("span");
const check = document.createElement("input");
check.type = "checkbox";
check.style.left = "75%";
span.textContent = "0";
span.style.textAlign = "right";
span.style.display = "block";
span.style.width = "65%";
span.style.marginTop = "50px";
input.type = "text";
input.placeholder = "Saisissez des lettres";
div.appendChild(input);
div.appendChild(check);
div.appendChild(span);

input.addEventListener("input", () => {
  span.textContent = input.value.length;
});

for (let i = 0; i < alletter.length; i++) {
  const p = document.createElement("p");
  p.textContent = alletter[i];
  p.style.display = "inline-block";
  p.style.padding = "10px";
  p.style.margin = "10px 20px";
  div.appendChild(p);
}

window.addEventListener("resize", (reportWindowSize) => {
  if (window.innerWidth <= 1224) {
    div.style.maxWidth = "900px";
  }
  if (window.innerWidth <= 900) {
    div.style.maxWidth = "450px";
  }
  if (window.innerWidth <= 480) {
    div.style.maxWidth = "200px";
  }
});

const ptohave = document.querySelectorAll("p");
for (let i = 0; i < ptohave.length; i++) {
  if (i % 5 === 0 && i !== 0) {
    ptohave[i - 1].style.background = "rgba(57, 56, 55, 0.5)";
  }
}

input.addEventListener("input", () => {
  const allp = document.querySelectorAll("p");
  for (let i = 0; i < allp.length; i++) {
    if (input.value.length === 0) {
      allp[i].style.display = "inline-block";
    } else if (input.value.indexOf(allp[i].textContent) === -1) {
      allp[i].style.display = "none";
    } else {
      allp[i].style.display = "inline-block";
    }
  }
});

check.addEventListener("click", () => {
  const allp = document.querySelectorAll("p");
  let voyelle = "AEIOUYaeiouy";
  if (check.checked) {
    for (let i = 0; i < allp.length; i++) {
      allp[i].style.background = "none";
      if (voyelle.indexOf(allp[i].textContent) !== -1) {
        allp[i].style.background = "red";
      }
    }
  } else {
    for (let i = 0; i < allp.length; i++) {
      allp[i].style.background = "none";
      if (voyelle.indexOf(allp[i].textContent) === -1) {
        allp[i].style.background = "green";
      }
    }
  }
});

let tb = [];
input.addEventListener("input", () => {
  tb = [];
  for (let i = 0; i < input.value.length; i++) {
    if (!tb.includes(input.value[i])) {
      tb.push(input.value[i]);
    } else {
      alert("double");
      input.value = "";
      for (let a = 0; a < tb.length; a++) {
        input.value += tb[a];
      }
      tb = [];
    }
  }
  console.log(tb);
});
