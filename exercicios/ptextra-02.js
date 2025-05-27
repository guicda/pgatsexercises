function contarVogais(texto) {
  const vogais = ['a', 'e', 'i', 'o', 'u']
  let contador = 0

  for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i])) {
      contador++
    }
  }

  return contador
}

const entrada = "Samuel Oliveira é o mestre do JavaScript"
const resultado = contarVogais(entrada)

console.log(resultado)
