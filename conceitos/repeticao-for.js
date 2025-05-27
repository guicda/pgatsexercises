/*
    para, faca
    contador; condicao; manipulação do contador (incremento ou decremento)

    quantidadeDePetiscos ; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++
*/

  
const quantidadeCalculada = 3

for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++){
    //acao de dar um petisco
    console.log(`Dar um petisco de nº ${quantidadeDePetiscos}`)

}

const gatos = ["Miau", "Nina", "Lili"]

for (let i = 0; i < gatos.length; i++) {
    console.log(`Dar um petisco para ${gatos[i]}`)
}