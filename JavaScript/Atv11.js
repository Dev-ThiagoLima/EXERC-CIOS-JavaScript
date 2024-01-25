//11. Escreva um programa que identifique e imprima os números pares em um array.

// Exercício 11
function numerosPares(array) {
    return array.filter(num => num % 2 === 0);
  }