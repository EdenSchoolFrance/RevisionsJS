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
const alphabet = getAlphabet();
// J'ai stocker le resultat dans une constante car il ne sera jamais modifier.
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
