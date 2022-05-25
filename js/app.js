//Display lowercase letters
let pStringLowercase = document.getElementById('string-Lowercase'); //1st p
for (let i = 97; i < 123; i++) {
   pStringLowercase.innerHTML+=(String.fromCharCode(i));
}

//Display uppercase letters
let pStringUppercase = document.getElementById('string-Uppercase'); //2nd p
let tmp = 64;
while (tmp < 90) {
    tmp++;
    pStringUppercase.innerHTML+=(String.fromCharCode(tmp));
}

//getAlphabet function
function getAlphabet(tmp2) {
    for (let i = 65; i < 91; i++) {
            tmp2+=String.fromCharCode((i));
}
    for (let i2 = 97; i2 < 123; i2++) {
        tmp2+=String.fromCharCode((i2));
    }
    return tmp2;
}
let result = getAlphabet("");
const getAlphabetResult = document.getElementById('getAlphabet-Result').innerHTML=result;

// const car le résultat ne changera pas si le code n'est pas modifié

function useOf(result, letter) {
    (letter.charCodeAt(letter));
    
    if (letter.toUpperCase() === letter) {
        return true;
    }
    if (letter.toLowerCase() === letter) {
        return false;
    }
}
useOf(result, "E");

//DOM-Get div
//const divId = document.getElementById('app');
//const divClass = document.getElementsByClassName('container') //divClass[0];
//const querry1 = document.querySelector('div');
const querry2 = document.querySelector('#app');
//const querry3 = document.querySelector('.container');
//const querry4 = document.querySelector('div#app');
//const querry5 = document.querySelector('div.container');
//const querryAll = document.querySelectorAll('div'); //querryAll[0]
//const divTag = document.getElementsByTagName('div'); //divTag[0]

const input = document.createElement('input');
querry2.appendChild(input);
input.setAttribute('type', 'text');
querry2.innerHTML;
input.placeholder="Saisissez des lettres";
const pInputValue = document.getElementById('input-Value');

input.addEventListener('change', (e)=>{
    pInputValue.innerHTML=e.target.value.length;
})

//Style

