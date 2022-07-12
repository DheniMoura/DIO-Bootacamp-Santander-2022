const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "dev",
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "André",
    idade: 25,
    profissao: "pintor"
}


const maria: {nome: string, idade: number, profissao: string} = {
    nome: "Maria",
    idade: 25,
    profissao: "Atriz"
}


enum Profissao {
    Professor,
    Terapeuta,
    Desenvolvedor,
    Atleta,
    Advogado
}

interface Pessoa {
    nome: string
    idade: number
    profissao: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedor
}


const roberto: Estudante = {
    nome: "Roberto",
    idade: 32,
    profissao: Profissao.Advogado,
    materias: ["mat", "Port", "Quim"]
}

function listar(lista: string[]) {
    for (const item of lista){
        console.log('- ', item);
    }
}
