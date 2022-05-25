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
input.className="text"
qdiv.appendChild(input)
const check=document.createElement('input')
check.type="checkbox"
check.className="check"
qdiv.appendChild(check)
const p = document.createElement('p')
p.textContent=0
qdiv.appendChild(p)
for (let i = 0; i < e.length; i++) {
  const cdiv = document.createElement("div")
  cdiv.className='cdiv'
  cdiv.textContent=e[i]
  if(i%5===0){
    cdiv.classList.add("gris")
  }
  qdiv.appendChild(cdiv)
  
}
const d=document.querySelectorAll('.cdiv')
input.addEventListener("input",()=>{
  p.textContent=input.value.length
  for (let i = 0; i < e.length; i++) {
    if(input.value.includes(e[i])){
      d[i].style.display="inline-block"
    }
    else if(input.value==""){
      d[i].style.display="inline-block"
    }
    else{
      d[i].style.display="none"
    }
  }
})
const cdiv2 = document.querySelectorAll(".cdiv")
console.log(cdiv2)
check.addEventListener('change',()=>{
  if(!(cdiv2[0].classList.contains("vo"))){
    cdiv2[0].classList.add('vo')
    cdiv2[4].classList.add('vo')
    cdiv2[8].classList.add('vo')
    cdiv2[14].classList.add('vo')
    cdiv2[20].classList.add('vo')
    cdiv2[24].classList.add('vo')
    cdiv2[26].classList.add('vo')
    cdiv2[30].classList.add('vo')
    cdiv2[34].classList.add('vo')
    cdiv2[39].classList.add('vo')
    cdiv2[45].classList.add('vo')
    cdiv2[49].classList.add('vo')
  }
  else{
    cdiv2[0].classList.remove('vo')
    cdiv2[4].classList.remove('vo')
    cdiv2[8].classList.remove('vo')
    cdiv2[14].classList.remove('vo')
    cdiv2[20].classList.remove('vo')
    cdiv2[24].classList.remove('vo')
    cdiv2[26].classList.remove('vo')
    cdiv2[30].classList.remove('vo')
    cdiv2[34].classList.remove('vo')
    cdiv2[39].classList.remove('vo')
    cdiv2[45].classList.remove('vo')
    cdiv2[49].classList.remove('vo')
  }
  for (let i = 0; i < cdiv2.length; i++) {
    if(!(cdiv2[i].classList.contains('vo'))&&cdiv2[0].classList.contains('vo')){
      cdiv2[i].classList.add('green')
    }
    else{
      cdiv2[i].classList.remove('green')
    }
  }
})