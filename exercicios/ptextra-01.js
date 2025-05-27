function filtrarNumeros(lista) {
  return lista.filter(item => typeof item === 'number')
}

// Exemplo de uso:
const entrada = [1, 'dois', 3, 'quatro', 5]
const resultado = filtrarNumeros(entrada)

console.log(resultado)