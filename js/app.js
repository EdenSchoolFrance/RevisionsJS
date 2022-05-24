//Display lowercase letters
for (let i = 97; i < 123; i++) {
    console.log(String.fromCharCode(i))
}

//Display uppercase letters
let tmp = 64;
while (tmp < 90) {
    tmp++;
    console.log(String.fromCharCode(tmp))
}

//2
function getAlphabet(tmp2) {
    for (let i = 65; i < 91; i++) {
            tmp2+=String.fromCharCode((i)) 
}
    for (let i2 = 97; i2 < 123; i2++) {
        tmp2+=String.fromCharCode((i2)) 
    }
    return tmp2
}

let result = getAlphabet("");
console.log(result)
// const car le résultat ne changera pas si le code n'est pas modifié

function useOf(result, letter) {
    (letter.charCodeAt(letter));
    
    if (letter.toUpperCase() === letter) {
        return true
    }
    if (letter.toLowerCase() === letter) {
        return false
    }
}
useOf(result, "E")

//DOM-Get div
//const divId = document.getElementById('app')
//const divClass = document.getElementsByClassName('container') //divClass[0]
//const querry1 = document.querySelector('div')
const querry2 = document.querySelector('#app')
//const querry3 = document.querySelector('.container')
//const querry4 = document.querySelector('div#app')
//const querry5 = document.querySelector('div.container')
//const querryAll = document.querySelectorAll('div') //querryAll[0]
//const divTag = document.getElementsByTagName('div') //divTag[0]

const input = document.createElement('input');
querry2.appendChild(input);
input.setAttribute('type', 'text');
querry2.innerHTML
input.placeholder="Saisissez des lettres";
const p = document.querySelector('p')
input.addEventListener('change', ()=>{
    innerHTML= input.onchange
})