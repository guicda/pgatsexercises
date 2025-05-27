function gerarTag(nome, idade, peso, raca, adotado) {
  // Nome em maiúsculas
  let nomeFormatado = nome.toUpperCase();

  // Raça com a primeira letra maiúscula
  let racaFormatada = raca[0].toUpperCase() + raca.slice(1).toLowerCase();

  // Criar a tag
  let tag = `
🐶 TAG DE IDENTIFICAÇÃO:
Nome: ${nomeFormatado}
Raça: ${racaFormatada}
Peso: ${peso} kg
  `;

  console.log(tag);
}

// Exemplo de uso:
gerarTag("toby", 3, 12, "labrador", true);
