let button = document.getElementById('calc');

let total = document.getElementById('total')



function calculateTheTotal() {

  let billAmount = Number(document.querySelector('#billAmount').value);
  let percentage = Number(document.querySelector('#tipPercentage').value);



  let total = billAmount + (billAmount * (percentage / 100))

  return total;

}


button.addEventListener('click', () => {
  total.innerText = calculateTheTotal()
})