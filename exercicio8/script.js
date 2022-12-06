/* 8. Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6 */

let n = Number(prompt("Digite um valor maior que zero"));
let i = 2;
let resultado = n * i;
let interacoes = Number(prompt("digite quantas interacoes: "));
do {
    document.write(`<p>${n} * ${i} = ${n * i}</p>`);
    n++;
} while (n < interacoes);
