/**
 * Resumo sobre tratamento de erros em JavaScript: try, catch e finally
 *
 * O bloco try...catch...finally é usado para lidar com erros (exceções)
 * que podem ocorrer durante a execução de um código, evitando que a aplicação
 * "quebre" completamente.
 */

// --- 1. Bloco 'try' ---
// O bloco 'try' contém o código que você deseja monitorar em busca de erros.
// Se ocorrer um erro (uma exceção for 'lançada' com 'throw') dentro deste bloco,
// a execução do 'try' é interrompida, e o controle é transferido para o bloco 'catch'.
try {
  console.log("Início do bloco try.");

  // Exemplo de código que pode causar um erro:
  // Tentando acessar uma propriedade de 'undefined'
  // const obj = undefined;
  // console.log(obj.propriedade); // Isso geraria um TypeError

  // Exemplo de como lançar um erro explicitamente:
  const numero = 10;
  if (numero > 5) {
    // A palavra-chave 'throw' é usada para lançar uma exceção (um erro).
    // Geralmente, lançamos um objeto Error ou uma classe de erro personalizada.
    throw new Error("Número muito alto! A condição foi violada.");
    // Código após o 'throw' não será executado dentro deste 'try' se o erro for lançado.
  }

  console.log("Este código só será executado se nenhum erro ocorrer no 'try'.");

} // Fim do bloco 'try'


// --- 2. Bloco 'catch' ---
// O bloco 'catch' é executado SOMENTE se um erro (uma exceção) for lançado
// dentro do bloco 'try' associado.
// Ele recebe o objeto de erro (a exceção) como um argumento, que geralmente
// contém informações sobre o que deu errado.
catch (erro) { // 'erro' é o nome da variável que recebe a exceção lançada
  console.log("\n--- Erro capturado no bloco catch! ---");
  console.error("Mensagem do erro:", erro.message); // A mensagem descritiva do erro
  console.error("Nome do erro:", erro.name);     // O tipo de erro (ex: 'Error', 'TypeError', 'ReferenceError')
  console.error("Pilha de chamadas (stack):", erro.stack); // O rastreamento da pilha de chamadas, útil para depuração

  // Você pode ter lógica aqui para:
  // - Registrar o erro em um sistema de logs
  // - Exibir uma mensagem amigável para o usuário
  // - Tentar se recuperar do erro, se possível
} // Fim do bloco 'catch'


// --- 3. Bloco 'finally' ---
// O bloco 'finally' é OPCIONAL, mas se presente, ele SEMPRE será executado,
// independentemente de ter ocorrido um erro no 'try' ou não.
// Ele é ideal para "limpeza", como fechar arquivos, conexões de banco de dados,
// ou liberar recursos que foram abertos no bloco 'try'.
finally {
  console.log("\n--- Bloco finally executado. ---");
  console.log("Este bloco sempre roda, seja com ou sem erro no 'try'.");
  // Ex: Fechar uma conexão de rede
  // Ex: Limpar variáveis temporárias
} // Fim do bloco 'finally'


console.log("\nExecução do script continua após o bloco try...catch...finally.");

// --- Exemplo sem erro ---
console.log("\n--- Exemplo de try...catch...finally sem erro ---");
try {
  console.log("Tentando algo que não deve causar erro...");
  let a = 5;
  let b = 10;
  let resultado = a + b;
  console.log("Resultado da operação:", resultado);
} catch (erro) {
  console.error("Este catch NÃO será executado.");
} finally {
  console.log("O finally deste segundo exemplo também será executado.");
}
console.log("Script finalizado.");