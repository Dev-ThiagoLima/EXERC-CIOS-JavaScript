//5. Escreva um programa que imprima os números primos de 1 a 20.

// Exercício 5
function imprimePrimos() {
    for (let i = 1; i <= 20; i++) {
      let primo = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          primo = false;
          break;
        }
      }
      if (primo) {
        console.log(i);
      }
    }
  }
  