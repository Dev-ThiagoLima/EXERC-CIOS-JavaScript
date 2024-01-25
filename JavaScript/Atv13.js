//13. Implemente um programa que calcule o somatório dos números de 1 a 100.

// Exercício 13
function somatorio() {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
      soma += i;
    }
    return soma;
  }