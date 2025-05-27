// modularizacao-export.js

const nomePet = `Pitoco`
console.log(`O nome do pet é ${nomePet}`)

const BRINQUEDOS = [
    `bola`,
    `osso`,
    `cora`
]

function exibirNomePet(nomeDoPetRecebido) {
    console.log(`O nome do pet é ${nomeDoPetRecebido}`)
}

exibirNomePet(`Pipoca`)
exibirNomePet(`Pantera`)
exibirNomePet(`Peggy`)

export {
    exibirNomePet,
    BRINQUEDOS
}