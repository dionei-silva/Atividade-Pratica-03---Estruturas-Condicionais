/* 7. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida. */

let velocidade = Number(prompt("insira a velocidade: "));
let multatotal = (velocidade - 80) * 5;
if (velocidade <= 80) {
    document.write("Voce nao foi multado");
} else {
    document.write(`Voce foi Multado no valor de R$ ${multatotal}.`);
}
