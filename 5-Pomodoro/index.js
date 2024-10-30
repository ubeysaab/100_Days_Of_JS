

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let circle = document.querySelector('.circle')
let time = 60 * 1;
let minutes, seconds;
let interval;
let clicked = false;
function runTimer() {

  if (!clicked) {
    clicked = !clicked
    interval = setInterval(() => {
      console.log('hello')
      time--;
      minutes = Math.floor(time / 60);
      seconds = time % 60;
      if(seconds < 10){
        seconds = "0"+seconds
      }
      if(minutes ===0 && seconds==0){
        clearInterval(interval)
      }
      // console.log(`${minutes}:${seconds}`)
      circle.textContent = `${minutes}:${seconds}`

    }, 1000);
  }
}


start.addEventListener('click', runTimer);

stop.addEventListener('click', () => {
  if(clicked){
    clicked=!clicked
    clearInterval(interval)
  }
})


reset.addEventListener('click',()=>{
  clicked =false;
  time = 60*25;
  circle.textContent ="25:00"


})