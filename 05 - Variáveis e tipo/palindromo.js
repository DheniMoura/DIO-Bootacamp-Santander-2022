// solução 01
/*
function verificaPalindromo(string) {
  if (!string) return "string inexistente" // se a string não existir, encerra a função

  return string.split('').reverse().join('') === string // split separa cada letra da palavra
}

console.log(verificaPalindromo('ovos'));
*/

// solução 02
/*
function verificaPalindromo2(string) {
  if (!string) return "string inexistente";

  for(let i = 0; i < string.length; i++) {
    if(string[i] !== string[string.length -1 -i]) {
      return false;
    }
  }

  return true;
}

console.log(verificaPalindromo2('abbas'));
*/

// Solução 03

function verificaFrase(frase) {
  if(!frase) return "frase não existe";

  // let concatenado = frase.split("").remove(" ").join("");
  // let contrario = concatenado.reverse().join("");
  // concatenado = concatenado.join("");

  // if(concatenado !== contrario) {
  //   return "Não é palíndromo"
  // }

  return concatenado;
}

console.log(verificaFrase("roma me tem amor"));