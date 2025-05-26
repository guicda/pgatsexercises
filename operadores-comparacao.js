/*
>
>=
<
<=
==
!=
===
*/

// Comparadores de JavaScript explicados com exemplos no console

// MAIOR QUE (>)
console.log(`10 > 5  - ${10 > 5}  // true: 10 é maior que 5`);
console.log(`3 > 7   - ${3 > 7}   // false: 3 não é maior que 7`);

// MAIOR OU IGUAL (>=)
console.log(`5 >= 5  - ${5 >= 5}  // true: 5 é igual a 5`);
console.log(`6 >= 3  - ${6 >= 3}  // true: 6 é maior que 3`);
console.log(`2 >= 8  - ${2 >= 8}  // false: 2 não é maior nem igual a 8`);

// MENOR QUE (<)
console.log(`4 < 9   - ${4 < 9}   // true: 4 é menor que 9`);
console.log(`10 < 2  - ${10 < 2}  // false: 10 não é menor que 2`);

// MENOR OU IGUAL (<=)
console.log(`7 <= 7  - ${7 <= 7}  // true: 7 é igual a 7`);
console.log(`3 <= 10 - ${3 <= 10} // true: 3 é menor que 10`);
console.log(`12 <= 4 - ${12 <= 4} // false: 12 não é menor nem igual a 4`);

// IGUALDADE FROUXA (==)
console.log(`5 == 5       - ${5 == 5}        // true: valores iguais`);
console.log(`"5" == 5     - ${"5" == 5}      // true: converte string para número`);
console.log(`true == 1    - ${true == 1}     // true: true vira 1`);
console.log(`false == 0   - ${false == 0}    // true: false vira 0`);
console.log(`"" == 0      - ${"" == 0}       // true: string vazia vira 0`);
console.log(`null == undefined - ${null == undefined} // true: considerados iguais no ==`);

// DIFERENTE FROUXO (!=)
console.log(`5 != "5"     - ${5 != "5"}      // false: iguais após conversão`);
console.log(`3 != 7       - ${3 != 7}        // true: são diferentes`);

// IGUALDADE ESTRITA (===)
console.log(`5 === 5      - ${5 === 5}       // true: mesmo valor e mesmo tipo`);
console.log(`"5" === 5    - ${"5" === 5}     // false: tipos diferentes`);
console.log(`true === 1   - ${true === 1}    // false: booleano vs número`);
console.log(`null === undefined - ${null === undefined} // false: tipos diferentes`);

// IGUALDADE ESTRITA (!==)
console.log(`5 !== "5"    - ${5 !== "5"}     // true: tipos diferentes`);
console.log(`3 !== 7      - ${3 !== 7}       // false: são iguais`);
