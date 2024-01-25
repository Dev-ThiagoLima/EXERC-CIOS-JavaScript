//8. Desenvolva uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente, desconsiderando espaços e maiúsculas/minúsculas).

// Exercício 8
function ehPalindromo(palavra) {
    const formatoOriginal = palavra.toLowerCase().replace(/ /g, '');
    const formatoInvertido = inverteString(formatoOriginal);
    return formatoOriginal === formatoInvertido;
  }