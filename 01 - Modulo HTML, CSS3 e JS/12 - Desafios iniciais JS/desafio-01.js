let numero = validaNum(19)

function validaNum(num){
  try {

    if(!num)throw new ReferenceError('Envie os paramêtros')

    if(typeof num !== 'number') throw new TypeError('num precisa ser um número inteiro')

    if(num <= 5 || num >= 2000) throw new RangeError('Valor fora do intervalo')

    return num
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

for (let i = 1; i <= numero; i++){
  if(i % 2 === 0){
    console.log(`${i}^2=${i ** 2}`)
  } 
}




// ------------------------------------------------------
// let lines = gets().split('\n');
// var numero = parseInt(lines.shift());

// if(numero > 5 && numero < 2000){
//   for (let i = 1; i <= numero; i++){
//     if(i % 2 === 0){
//       let quad = i ** 2;
//       console.log(`${i}^2=${quad.toFixed()}`);
//     } 
//   }
// }