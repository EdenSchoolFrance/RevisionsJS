import "./style.css";

// for (let i = 97; i <= 122; i++) {
//   console.log(String.fromCharCode([i]));
// }

// let count = 64;

// while (count < 90) {
//   count++;
//   console.log(String.fromCharCode(count));
// }

const getAlphabet = (str) => {
  for (let i = 65; i <= 122; i++) {
    if (i === 91) {
      i = 97;
    }
    str += String.fromCharCode([i]);
  }
  return str;
};

console.log(getAlphabet(""));
