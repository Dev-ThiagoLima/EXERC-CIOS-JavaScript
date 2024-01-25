//20. Crie uma função que receba dois arrays e retorne um novo array com os elementos em comum entre ambos.

// Exercício 20
function elementosComuns(array1, array2) {
    return array1.filter(elemento => array2.includes(elemento));
  }