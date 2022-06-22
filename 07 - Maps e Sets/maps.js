function getAdmins(map) {
  let admins = []
  for ([key, value] of map) { // acessa a chave e o valor direto
    if (value === 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin')
usuarios.set('Larissa', 'Admin')
usuarios.set('Jorge', 'User')
usuarios.set('Natália', 'Admin')
usuarios.set('Armando', 'User')

console.log(getAdmins(usuarios))
//Retorna apenas quem é Admin