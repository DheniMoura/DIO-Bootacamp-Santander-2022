function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Envie os paramêtros') // primeira validação

    if (typeof arr !== 'object')
      throw new TypeError('arr precisa ser do tipo object') // segunda validação

    if (typeof num !== 'number')
      throw new TypeError('num precisa ser do tipo number') // terceira validação

    if (arr.length !== num) throw new RangeError('Tamanho inválido') // quaarta validação

    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Este erro é um ReferenceError')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Este erro é um TypeError')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Este erro é um RangeError')
      console.log(e.message)
    } else {
      console.log('Ocorreu um tipo de erro não esperado' + e)
    }
  }
}

meuArray = [1, 2, 3, 4]
console.log(validaArray(meuArray, 4)) // caso de sucesso
