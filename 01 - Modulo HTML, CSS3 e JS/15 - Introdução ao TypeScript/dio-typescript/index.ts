interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executaRugido(alturaEmDecibeis: number): void;
}


interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: "Elefante",
    tipo: "terrestre",
    executaRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
} 

animal.executaRugido(10);

const felinio: IFelino = {
    nome: 'Leão',
    tipo: "terrestre",
    visaoNoturna: true,
}