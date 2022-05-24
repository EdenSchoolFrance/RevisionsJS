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
const id=document.getElementById('app')
const qdiv=document.querySelector('div')
const qclass=document.querySelector('.container')
const qid=document.querySelector('#app')
const label=document.createElement("label")
label.textContent='lorem impsum'
qdiv.appendChild(label)
const input=document.createElement("input")
input.placeholder='"Saisissez des lettres"'
qdiv.appendChild(input)
const p = document.createElement('p')
p.textContent=0
qdiv.appendChild(p)
input.addEventListener("input",()=>{
  p.textContent=input.value.length
})
for (let i = 0; i < e.length; i++) {
  const cdiv = document.createElement("div")
  cdiv.className='cdiv'
  cdiv.textContent=e[i]
  qdiv.appendChild(cdiv)
  
}