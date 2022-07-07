// tratando a tag input
/* const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})
*/

// Generic types
/*
function adicionaApendiceALista<generica>(array: any[], valor: generica) {
    return array.map(item => item + valor);
}

console.log(adicionaApendiceALista(['A', 'B', 'C'], 'a'));
*/

// desenvolvendo condicionais a partir de parametros
/*
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecion(usuario: IUsuario | IAdmin) {
    if('cargo' in usuario) {
        // redirecionar para a área de adm
    }
    // redirecionar para área do usuario
}
*/

// desenvolvendo condicionais a partir de parametros utilizando "?" para variáveis opcionais
/*
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor'; // valor opcional
}

function redirecion(usuario: IUsuario) {
    if (usuario.cargo) {
        // redirecionar(usuario.cargo)
    }
    // redirecionar para a área do usuário externo que não tem cargo
}
*/

// criando cariáveis com propriedade readonly
/*
interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly [K in keyof ICachorro]: ICachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    readonly idade;
    readonly nome;

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade;
    }
}

const cao = new MeuCachorro ('Apolo', 14);

cao.idade = 9; // tá acusando erro, mas tá mudando igual. Não descobri como corrigir

console.log(cao.idade);
*/

// importanto bibliotecas externas

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova função')
    }
});

$('body').novaFuncao();
