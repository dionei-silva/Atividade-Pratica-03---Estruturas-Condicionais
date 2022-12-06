/* 9. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. calcular e mostrar;
b. A maior altura do grupo; */

let contador = 1;
let alturaMenor = 200;
let alturaMaior = 0;

while (contador <= 15) {
    let altura = Number(
        prompt("digite altura".replace(",", ".").replace(".", ""))
    );

    if (alturaMenor > altura) {
        alturaMenor = altura;
    }
    if (alturaMaior < altura) {
        alturaMaior = altura;
    }
    contador++;
}

document.write(
    `A menor altura é ${alturaMenor} m, e a maior altura ${alturaMaior} m`
);
/* let a = 1.57;
let b = 1.48;
let c = 1.78;
let d = 1.88;
let e = 1.98;
let f = 1.35;
let g = 1.62;
let h = 1.78;
let i = 1.88;
let j = 1.65;
let k = 1.45;
let l = 1.69;
let m = 1.71;
let n = 1.82;
let o = 1.83;
let p = 1.55;



for (let controle = 1; controle <= 15; controle + 1) {
    if (a < b) {
    }
}
 */
