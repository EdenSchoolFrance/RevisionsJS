import "./style.css";

/*for (let i = 97; i <= 122; i++) {
  console.log(String.fromCharCode(i));
}

let i = 65;

while (i <= 90) {
  console.log(String.fromCharCode(i));
  i++;
}*/

function getAlphabet () {
  for (let i = 97; i <= 122; i++) {
    for (let o = 65; o <= 90; o++) {
      console.log(String.fromCharCode(i), String.fromCharCode(o));
    }
  }
}

getAlphabet();