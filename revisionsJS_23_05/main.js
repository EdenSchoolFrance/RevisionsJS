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