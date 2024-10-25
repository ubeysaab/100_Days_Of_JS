let initialValue = 0

let number = document.querySelector('.number')
let root = document.querySelector(":root")
console.log(root.style)
number.innerHTML = initialValue;


function calc(e) {
  let a = e.target.name
  //  console.log(a)
  switch (a) {
    case "increase":
      initialValue += 1
      number.innerHTML = initialValue;
      if (initialValue > 0) {
        number.style.color = "green"
        root.style.setProperty("--stateColor", 'green')

      }
      break;
    case "decrease":
      initialValue -= 1

      number.innerHTML = initialValue;
      if (initialValue < 0) {
        number.style.color = "red"
        root.style.setProperty("--stateColor", 'red')

      }

      break;
    default:
      initialValue = 0

      number.innerHTML = initialValue
      if (initialValue == 0) {
        number.style.color = "black"
        root.style.setProperty("--stateColor", 'black')

      }

      break;


  }
}

document.addEventListener('click', (e) => { calc(e) })


