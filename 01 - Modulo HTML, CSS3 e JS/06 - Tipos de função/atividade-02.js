function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const pessoa1 = {
  nome: 'Maria',
  idade: 30
}
const pessoa2 = {
  nome: 'Carla',
  idade: 26
}
const animal1 = {
  nome: 'Fiona',
  idade: 5,
  raca: 'pug'
}
const pessoa3 = {
  nome: 'Pedro',
  idade: 35
}

console.log(calculaIdade.apply(animal1, [8]))
console.log(calculaIdade.call(pessoa2, 18))
