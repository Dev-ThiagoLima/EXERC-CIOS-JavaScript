//19. Escreva um programa que calcule e imprima os números de Fibonacci até o décimo termo.

// Exercício 19
function fibonacci(n) {
    const fibo = [0, 1];
    for (let i = 2; i < n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
  }
  