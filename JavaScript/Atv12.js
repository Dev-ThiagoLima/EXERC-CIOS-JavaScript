//12. Crie uma função que receba um número e retorne true se ele for primo e false se não for.

// Exercício 12
function ehPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return false;
    }
    return true;
  }