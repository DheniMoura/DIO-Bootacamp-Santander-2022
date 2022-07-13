// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee: {code: number, name: string} = {
    code: 10,
    name: "John"
};

employee.code = 10;
employee.name = "John";


console.log(employee.code = 10)
console.log(employee.name = "John")

