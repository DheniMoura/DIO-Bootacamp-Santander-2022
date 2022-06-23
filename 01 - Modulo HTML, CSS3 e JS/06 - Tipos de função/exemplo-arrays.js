// ---------------------------Spread
function sum(x, y, z) {
  return x + y + z
}

const numbers = [1, 2, 3]

console.log(sum(...numbers)) //Spread lida separadamente com os elementos de uma array, utilize reticencias antes da array

// ----------------------------Rest
function confereTamanho(...args) {
  // utilize reticencias ao declarar a função
  console.log(args.length)
}

confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(5, 6, 7, 8) // 4
// Rest combina os argumentos em um array, o que era um elemento independente se torna parte de um array
