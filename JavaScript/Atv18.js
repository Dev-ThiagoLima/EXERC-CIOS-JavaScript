//18. Desenvolva uma função que receba uma frase e retorne a quantidade de vogais que ela possui.


// Exercício 18
function contaVogais(frase) {
    const vogais = frase.match(/[aeiou]/gi);
    return vogais ? vogais.length : 0;
  }