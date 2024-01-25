//9. Escreva um programa que calcule a média aritmética de um array de números.

// Exercício 9
function mediaAritmetica(array) {
    const soma = array.reduce((acc, num) => acc + num, 0);
    return soma / array.length;
  }
  