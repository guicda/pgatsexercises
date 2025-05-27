// Informações do cachorro
const nomeDog = "Bolinha";
const idadeDog = 4;
const pequenoPorte = false;

// Regra: Pode ser adotado se tem 2 anos ou mais OU se for de pequeno porte
const podeSerAdotado = idadeDog >= 2 || pequenoPorte;

// Exibição das informações
console.log(`Nome do dog: ${nomeDog}`);
console.log(`Idade: ${idadeDog} ano(s)`);
console.log(`Apto para adoção? ${podeSerAdotado ? "Sim" : "Não"}`);
