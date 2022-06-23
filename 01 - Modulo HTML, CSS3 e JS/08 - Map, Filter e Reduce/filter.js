function filtraPares(arr) {
  return arr.filter(callBack);
}


function callBack(item) {
  return item % 2 === 0; // só os números pares são retornados
}


const meuArray = [1, 23, 55, 66, 30, 2, 9];


console.log(filtraPares(meuArray))