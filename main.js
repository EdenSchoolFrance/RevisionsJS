import './style.css'


for (let i = 97; i < 123; i++) {
  console.log(String.fromCharCode(i))
}
let n = 65
while(n<91){
  console.log(String.fromCharCode(n))
  n++
}
function getAlphabet(){
  const tmb = []
  for (let i = 65; i < 123; i++) {
    if(i===91){
      i=97
    }
    tmb.push(String.fromCharCode(i))
  }
  return tmb.join("")
}
//const parce que je ne pense pas la modifier
const e = getAlphabet()
function findLetter(a,b){
  for(let i=0;i<a.length;i++){
    if(a[i]===b){
      const r=a.charCodeAt(i)
      return String.fromCharCode(r)===b.toUpperCase()
    }
  }
}
findLetter(e,"M")
const container = document.getElementsByClassName('container')
const contain = document.querySelectorAll('.container')
const app = document.querySelectorAll('#app')
const div = document.querySelectorAll('div')
const tag =document.getElementsByTagName("div")

console.log(document.getElementById('app'))
console.log(container[0])
console.log(document.querySelector('div'))
console.log(document.querySelector('.container'))
console.log(document.querySelector('#app'))
console.log(contain[0])
console.log(div[0])
console.log(app[0])
console.log(tag[0])