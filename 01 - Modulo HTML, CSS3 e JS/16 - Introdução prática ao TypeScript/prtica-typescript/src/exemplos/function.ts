function somaValorNumerico(input1: number, input2: number): number {
    return input1 + input2;
} // essa função tem um tipo de retorno definido

function printaValores(input1: number, input2: number): void {
    console.log(input1 + input2);
} // função que não retorna nada, tipo void




// incluindo callback em funções
function somaValor(input1: number, input2: number, callback: (numero: number) => number): number {
    let resultado = input1 + input2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

console.log(somaValor(2, 3, aoQuadrado));