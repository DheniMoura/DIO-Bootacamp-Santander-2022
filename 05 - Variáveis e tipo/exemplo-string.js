let nome = "João";
let sobrenome = "Pedro";

let concatenado = `${nome} ${sobrenome}`
let concatenado2 = nome + " " + sobrenome

console.log(concatenado)
console.log(concatenado2)

let frase = "Olá, tudo bem?"

frase2 = frase.split(" ") // separa os argumentos

frase3 = frase.split("") // separa os argumentos

console.log(frase)
console.log(frase2)
console.log(frase3)

console.log(frase.includes("tudo")) // verifica se o argumento existe na string - retorna booleano

console.log(frase.startsWith("O")) // verifica se a string inicia com o argumento - retorna booleano

console.log(frase.endsWith("j")) // verifica se a string termina com o argumento - retorna booleano

let stringModificada = frase.replace(",", "!");

console.log(frase, stringModificada)