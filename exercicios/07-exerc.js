function simularPasseioDog() {
  let voltas = 0;
  const voltasParaSatisfacao = 5;

  console.log("Iniciando o passeio do Dog...");

  while (voltas < voltasParaSatisfacao) {
    voltas++;
    console.log(`Dog deu a volta número ${voltas}.`);
  }

  console.log(`\nO Dog deu ${voltas} voltas e agora está satisfeito!`);
  console.log("Passeio concluído!");
}

simularPasseioDog();