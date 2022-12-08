/* 11. Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16... */
function exercicio11() {
    for (let contador = 30; contador >= 1; contador--) {
        const primo = verificaPrimo(contador);

        if (primo) {
            document.write(` [${contador}] `);
        } else {
            document.write(` ${contador} `);
        }
    }
}

function verificaPrimo(numero) {
    // primo so pode ter 2 divisores o numero 1 e ele mesmo
    let divisores = 2; // começamos com 2 pois todo numero e dividido por 1 e ele mesmo

    for (let contador = 2; contador < numero; contador++)
        // ex: 7
        // 2 a 6
        if (numero % contador === 0) {
            divisores++;
        }
    if (divisores > 2) {
        return false;
    } else {
        return true;
    }
}
