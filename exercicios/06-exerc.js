const nome = "Pantera"
const porte = "médio"
const tempo = 45

let atividade

// Condicional para definir a atividade conforme o porte
if (porte === "pequeno") {
  atividade = "brincar dentro de casa"
} else if (porte === "médio") {
  atividade = "caminhada no quarteirão"
} else if (porte === "grande") {
  atividade = "correr no parque"
} else {
  atividade = "porte inválido"
}

// Condicional para a mensagem com base no tempo
let mensagem

if (tempo < 15) {
  mensagem = `atividade rápida: ${atividade}`
} else if (tempo <= 30) {
  mensagem = `tempo ideal: ${atividade}`
} else {
  mensagem = `hora da diversão: ${atividade}`
}

// Exibe o resultado
console.log(`${nome} - ${porte} - ${tempo}min`)
console.log(mensagem)
