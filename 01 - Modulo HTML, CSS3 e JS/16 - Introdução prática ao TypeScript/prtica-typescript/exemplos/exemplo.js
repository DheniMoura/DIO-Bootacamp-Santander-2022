"use strict";
var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
function adicionarNumeros(num1, num2, devPrintar, frase) {
    var resultado = num1 + num2;
    if (devPrintar) {
        console.log(frase + resultado);
    }
    return num1 + num2;
}
var devPrintar = true;
var frase = 'O valor resultante é: ';
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devPrintar, frase));
        }
    });
}
