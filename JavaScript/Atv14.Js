//14. Desenvolva uma função que receba um array de strings e retorne um novo array apenas com as strings que têm mais de 5 caracteres.


// Exercício 14
function stringsComMaisDe5Caracteres(array) {
    return array.filter(str => str.length > 5);
  }