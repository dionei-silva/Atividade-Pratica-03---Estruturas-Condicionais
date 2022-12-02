/* 5. Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:

Idade Peso Categoria
Até 12 anos - Infantil
13 a 16 anos Até 40kg Juvenil leve
Acima de 40kg Juvenil pesado
17 a 24 anos Até 45kg Sênior leve
Acima de 45kg até 60kg Sênior médio
Acima de 60kg Sênior pesado
Acima de 24 anos - Veterano */

let peso = prompt("insira seu peso em kg: ");
if (peso !== null) {
    peso = Number(peso.replace(".", "").replace(",", "."));
}
if (!peso) {
    document.write("peso invalido");
} else {
    let idade = prompt("insira sua idade em anos: ");
    if (idade !== null) {
        idade = Number(idade.replace(".", "").replace(",", "."));
    }
    if (!idade) {
        document.write("idade invalida");
    } else if (idade <= 12) {
        document.write("Infantil");
    } else if (idade > 12 && idade < 17) {
        if (peso <= 40) {
            document.write("juvenil leve");
        } else {
            document.write("juvenil pesado");
        }
    } else if (idade > 16 && idade < 25) {
        if (peso <= 45) {
            document.write("senior leve");
        } else if (peso <= 60) {
            document.write("senior medio");
        } else {
            document.write("senior pesado");
        }
    } else {
        document.write("veterano");
    }
}
