


let imgBox = document.querySelector('.img-box')
let imgWrap = document.querySelector('.img-wrap')
let imgW = document.querySelector('.img-wrap > img')

let leftSpace = (imgBox.offsetLeft) 
// console.log()

let span = document.querySelector('span')
let arrow = document.querySelector('.arrow')



imgW.style.width = imgBox.offsetWidth+"px"

imgBox.addEventListener('mousemove',(e)=>{

  let boxWidth = (e.pageX - leftSpace) +"px"
  // console.log(boxWidth)
  span.style.left = boxWidth;
  // arrow.style.left= boxWidth;
  imgWrap.style.width =  boxWidth
})