function entregarBrinquedos(lista) {
  lista.forEach(function(brinquedo) {
    console.log(`Brinquedo entregue: ${brinquedo}`)
  })
}

// Testando a função:
entregarBrinquedos(["Bola", "Osso", "Corda", "Sino"])
