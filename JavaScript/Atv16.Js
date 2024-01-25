//16.Crie uma função que receba um array de números e retorne a soma apenas dos números positivos.

// Exercício 16
function somaPositivos(array) {
    return array.reduce((acc, num) => num > 0 ? acc + num : acc, 0);
  }
  