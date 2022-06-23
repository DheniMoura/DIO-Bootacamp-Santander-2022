function findMax() {
  //não espera um número específico de argumentos
  let max = -Infinity

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }
  return max
}

console.log(findMax())
