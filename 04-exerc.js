// Informações do cachorro
const nomeDog = "Rex";
const pesoKg = 14; // Peso em kg
const estoqueGramas = 3000; // Estoque em gramas

// Fórmula: gramas por dia = peso x 30
const racaoPorDia = pesoKg * 30;

// Dias que o estoque vai durar
const diasDeEstoque = estoqueGramas / racaoPorDia;

// Exibindo os dados
console.log(`Nome do dog: ${nomeDog}`);
console.log(`Peso: ${pesoKg} kg`);
console.log(`Ração recomendada por dia: ${racaoPorDia}g`);
console.log(`O estoque de ração vai durar aproximadamente ${diasDeEstoque.toFixed(1)} dia(s)`);
