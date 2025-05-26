/*

&& - E / AND
|| - OU / OR
! - NÃO / NOT
*/

// Exemplo de situação com permissões de entrada

const idade = 16;
const temAutorizacaoDosPais = true;
const temCarteiraEstudante = false;

// OR (||): basta UMA condição ser verdadeira para retornar true
console.log(`Pode entrar com autorização ou carteira? ${temAutorizacaoDosPais || temCarteiraEstudante}`); // true

// AND (&&): ambas as condições precisam ser verdadeiras
console.log(`Tem idade mínima E carteira de estudante? ${idade >= 18 && temCarteiraEstudante}`); // false

// NOT (!): inverte o resultado
console.log(`É menor de idade? ${!(idade >= 18)}`); // true

// Combinação de tudo
if ((idade >= 18 || temAutorizacaoDosPais) && !temCarteiraEstudante) {
  console.log("✅ Entrada permitida com autorização, mesmo sem carteira.");
} else {
  console.log("❌ Entrada negada.");
}
