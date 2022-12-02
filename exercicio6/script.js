/* 6. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro. */

let pedro = 150;
let lucas = 110;

let ano = 0;

while (pedro >= lucas) {
    pedro += 2;
    lucas += 3;

    ano++;

    console.log(`pedro ${pedro}`);
    console.log(`lucas ${lucas}`);
    console.log(`anos ${ano}`);

    if (lucas === pedro) {
        console.log(
            `levou ${ano} anos para lucas chegar na mesma altura que pedro`
        );
    }

    if (lucas > pedro) {
        console.log(
            `levou ${ano} anos para lucas ultrapassar a mesma altura de pedro`
        );
    }
}
