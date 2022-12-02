/* 2. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada. */

let numero1 = Number(prompt("insira um numero: "));
let numero2 = Number(prompt("insira um numero: "));
let operação = window.prompt(
    "insira a operação a ser realizada: +,-,/,*,%,ou **"
);

switch (operação) {
    case "+":
        document.write(`Resultado é ${numero1 + numero2}`);
        break;

    case "-":
        document.write(`Resultado é ${numero1 - numero2}`);
        break;

    case "/":
        document.write(`Resultado é ${numero1 / numero2}`);
        break;
    case "*":
        document.write(`Resultado é ${numero1 * numero2}`);
        break;
    case "%":
        document.write(`Resultado é ${numero1 % numero2}`);
        break;
    case "**":
        document.write(`Resultado é ${numero1 ** numero2}`);
        break;

    default:
        document.write("operador invalido");
        break;
}
