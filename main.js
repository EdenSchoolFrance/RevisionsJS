import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
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
console.log(findLetter(e,"a"))