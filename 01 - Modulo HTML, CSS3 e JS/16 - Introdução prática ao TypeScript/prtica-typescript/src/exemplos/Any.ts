let valorAny: any; // Tipo que pode receber qualquer tipo
 valorAny = 3;
 valorAny = true;
//  valorAny = "Olá";

 let valorString: string;
 valorString = "Teste";
 // valorString = 3; // Não aceita, pois não é uma string

valorString = valorAny; // Aceita, pois valor Any pode ser qualquer coisa, inclusive string


let valorString2: string = "Texto"
valorString2 = valorAny;


function somaString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somaString(valorString, valorString2);

// É considerado má prática utlizar Any
// Ao invés disso é recomendado utilizar o tipo unknown

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'vai sim';

let stringTest: string = 'agora vai';
// stringTest = unknownValor; // Não dá certo, mesmo unknownValor tendo recebido uma string

if(typeof unknownValor === 'string') {
    stringTest = unknownValor;
} // necessário fazer uma verificação para atibuir valor