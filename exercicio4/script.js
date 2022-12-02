/* 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5. */

let contador = 1;

while (contador <= 250) {
    if (contador % 3 == 0) {
        document.write(`valor multiplo de 3: ${contador}<br/>`);
    }
    if (contador % 5 == 0) {
        document.write(`valor multiplo de 5: ${contador}<br/>`);
    }
    contador++;
}
