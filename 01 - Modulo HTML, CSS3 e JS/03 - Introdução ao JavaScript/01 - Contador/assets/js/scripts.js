var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0 //valor inicial zero

// função de incremento
function increment() {
  if (currentNumber < 10) {
    currentNumber += 1
    // a cor muda para preto quando clica no botão 'increment'
    document.getElementById('currentNumber').style.color = 'black'

    return (currentNumberWrapper.innerHTML = currentNumber)
  }
}

// função de decremento
function decrement() {
  if (currentNumber > -10) {
    currentNumber -= 1
    //aqui a cor muda quando clica no botão 'decrement'
    document.getElementById('currentNumber').style.color = 'red'

    return (currentNumberWrapper.innerHTML = currentNumber)
  }
}

document.getElementById('increment').addEventListener('click', increment)
document.getElementById('decrement').addEventListener('click', decrement)
