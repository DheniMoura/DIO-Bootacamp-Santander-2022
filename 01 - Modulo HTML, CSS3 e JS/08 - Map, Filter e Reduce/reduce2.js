const lista = [
  {
    nome: 'sabao em po',
    preco: 30
  },
  {
    nome: 'cereal',
    preco: 12
  },
  {
    nome: 'toalha',
    preco: 30
  }
]

const saldoDisponivel = 100

function calculaSaldo(saldo, listaCompras) {
  return lista.reduce(function (prev, current, index) {
    //prev é o valor acumulador
    console.log(`rodada `, index + 1)
    console.log({ prev })
    console.log({ current })
    return prev - current.preco
  }, saldo)
}

console.log(`Saldo disponível: R$`, calculaSaldo(saldoDisponivel, lista))
