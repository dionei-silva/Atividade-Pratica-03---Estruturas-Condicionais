/* 7. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida. */

let velocidade = window.prompt("Digite sua velocidade");
switch (velocidade) {
    case "85":
        document.write("Voce foi multado R$5,00");
        break;
    case "90":
        document.write("Voce foi multado R$10,00");
        break;
    case "95":
        document.write("Voce foi multado R$15,00");
        break;
    case "100":
        document.write("Voce foi multado R$20,00");
        break;
    case "105":
        document.write("Voce foi multado R$25,00");
        break;
    case "110":
        document.write("Voce foi multado R$30,00");
        break;
    case "115":
        document.write("Voce foi multado R$35,00");
        break;
    case "120":
        document.write("Voce foi multado R$40,00");
        break;
}
