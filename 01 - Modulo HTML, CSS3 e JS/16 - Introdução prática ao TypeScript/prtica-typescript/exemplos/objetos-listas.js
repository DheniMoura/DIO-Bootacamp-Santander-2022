"use strict";
var pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "dev",
};
pessoa.idade = 29;
var andre = {
    nome: "André",
    idade: 25,
    profissao: "pintor"
};
var maria = {
    nome: "Maria",
    idade: 25,
    profissao: "Atriz"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Terapeuta"] = 1] = "Terapeuta";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["Atleta"] = 3] = "Atleta";
    Profissao[Profissao["Advogado"] = 4] = "Advogado";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedor
};
var roberto = {
    nome: "Roberto",
    idade: 32,
    profissao: Profissao.Advogado,
    materias: ["mat", "Port", "Quim"]
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
