/* 12. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores

positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos. */

let total = 0;
let positiva = 0;
let negativa = 0;

for (let i = 1; i <= 10; i++) {
    let entrada = Number(promt("insira Valor"));
    total += entrada;
    if (entrada > 0) {
        positiva++;
    }
    if (entrada < 0) {
        negativa++;
    }
}
document.write(`<p>media aritmetica: ${total / 10}</p>`);
document.write(`<p>porcento positivo: ${(10 * positiva) / 100}</p>`);
document.write(`<p>porcento negativo: ${(10 * negativa) / 10}</p>`);
