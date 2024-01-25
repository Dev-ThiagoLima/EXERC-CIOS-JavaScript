//4. Desenvolva uma função que calcule o fatorial de um número.

// Exercício 4
function fatorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * fatorial(n - 1);
  }