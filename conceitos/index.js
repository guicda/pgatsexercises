/**
 * Console API
 */

console.log("Aula Inicial JS")
console.error("Falha na execução do código")
console.warn("Atenção, você está prestes a executar um código perigoso")
console.table ([{
    nome: "Lucas",
    idade: 25,
    cidade: "São Paulo"
}, 
{
    nome: "Guilherme",
    idade: 25,
    cidade: "São Paulo"
}])

/**
 * Constantes e Variáveis
 * Constantes são valores que não podem ser alterados
 */

// const - const é uma constante, ou seja, um valor que não pode ser alterado
// var - var é uma variável, ou seja, um valor que pode ser alterado
// let - let é uma variável, ou seja, um valor que pode ser alterado
//informações de um dog que não mudam

/*const nome = `Loki`
const raca = `SRD`
const sexo = `Macho`
const cor = `Caramelo`
const dataDeNascimento = `01/01/2020`
const porte = `Médio`

// informações de um dog que mudam

let idade = 3
let peso = 10  
let vacinado = true
let castrado = false
let tamanho = `Médio`

// hoisting - é o comportamento do JavaScript de mover declarações de variáveis e funções para o topo do escopo atual durante a fase de compilação. Isso significa que você pode usar uma variável ou função antes de declará-la no código.


/**
 * Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
 * (funcoes, leia e escreva)
 *

    cadeia - string - "Lucas", 'Lucas', `Lucas`
    * inteiro - number - 1, 2, 3, 4, 5
    logico - boolean - true, false
    vetor/matriz - array - [1, 2, 3, 4, 5]

    undefined - indefinido - quando uma variável é declarada, mas não inicializada
    null - nulo - quando uma variável é declarada e inicializada com o valor nulo

    BigInt - inteiro grande - 1234567890123456789012345678901234567890n
    Symbol - símbolo - um valor único e imutável, usado como identificador de propriedades de objeto

 * //
