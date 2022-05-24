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
};
getAlphabet();
