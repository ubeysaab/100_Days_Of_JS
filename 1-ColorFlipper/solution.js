


let body = document.querySelector('body')
let div = document.querySelector('main > div')
let btn = document.querySelector('main > button');


btn.addEventListener("click",changeColor)




function createHex(){
  let alphabetic = ["a","b","c","d","e","f"]

  let color = "#"


  while(color.length <= 6){
     let randomNumber = Math.floor(Math.random()*15)+1
     if(randomNumber >= 10 ){
      console.log(randomNumber)
      let index = randomNumber - 10
      color += alphabetic[index]
     }
     else{
      color+=randomNumber
     }
  }

  return color
}

function changeColor (){
  let color = createHex(

  );

  body.style.backgroundColor = color;
  div.innerText = `BackGroun Color : ${color}`
}

// div.innerText = "BackGroundColor : RED"
// alert(div.innerHTML)


// innerHtml ile innerText arasindaki fark 