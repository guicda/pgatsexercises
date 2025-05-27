// distribuidor.js
// Importa a lista de cães e implementa a lógica de entrega de petiscos

import { listaDeCaes } from './dados.js'; // Importa a lista do arquivo dados.js

/**
 * Função para entregar um petisco para cada cão na lista.
 * Itera sobre a lista e exibe uma mensagem para cada cão.
 */
function entregarPetiscos() {
  console.log("Iniciando a distribuição de petiscos...");

  // Percorre a lista de cães usando forEach para cada cão
  listaDeCaes.forEach(cao => {
    console.log(`Entregando petisco para ${cao}`);
  });

  console.log("Distribuição de petiscos concluída!");
}

// Chama a função para iniciar a entrega de petiscos
entregarPetiscos();