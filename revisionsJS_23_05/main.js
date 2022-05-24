import './style.css'

// De "a" à "z" en minuscule
for(let i = 97 ; i <= 122; i++){
  console.log(String.fromCharCode(i))
}

// De "A" à "Z" en majuscule

let index = 65;
while(index <= 90){
  console.log(String.fromCharCode(index))  
  index++
}

// function getALphabet 


let getAlphabet = () =>{
  let finalword = ''
  for(let i = 65 ; i <= 90; i++){
    finalword += String.fromCharCode(i)
  }
  for(let i = 97 ; i <= 122; i++){
    finalword += String.fromCharCode(i)
  }
  return finalword
} 

getAlphabet()