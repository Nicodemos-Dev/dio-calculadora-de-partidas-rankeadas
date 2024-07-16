// Se vitórias for menor do que 10 = Ferro
let saldoDeRankeadas = calculoDeVitorias(102, 1)

function calculoDeVitorias(quantidadeDeVitorias, quantidadeDeDerrotas) {
    let saldoDeVitorias = quantidadeDeVitorias - quantidadeDeDerrotas
    
    if (saldoDeVitorias < 10) {
    	let nivel = "Ferro"
   		console.log("O Herói tem saldo de " + saldoDeVitorias + " " + "está no nível de " + nivel)
    }

    // Se vitórias for entre 11 e 20 = Bronze
    else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
        let nivel = "Bronze"
        console.log("O Herói tem saldo de " + saldoDeVitorias + " " + "está no nível de " + nivel)
    }

    // Se vitórias for entre 21 e 50 = Prata
    else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
        let nivel = "Prata"
        console.log("O Herói tem saldo de " + saldoDeVitorias + " " + "está no nível de " + nivel)
    }

    // Se vitórias for entre 51 e 80 = Ouro
    else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
        let nivel = "Ouro"
        console.log("O Herói tem saldo de " + saldoDeVitorias + " " + "está no nível de " + nivel)
    }

    // Se vitórias for entre 81 e 90 = Diamante
    else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
        let nivel = "Diamante"
        console.log("O Herói tem saldo de " + saldoDeVitorias + " " + "está no nível de " + nivel)
    }

    // Se vitórias for entre 91 e 100 = Lendário
    else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
        let nivel = "Lendário"
        console.log("O Herói tem saldo de " + saldoDeVitorias + " " + "está no nível de " + nivel)
    }

    // Se vitórias for maior ou igual a 101 = Imortal
    else {
        let nivel = "Imortal"
        console.log("O Herói tem saldo de " + saldoDeVitorias + " " + "está no nível de " + nivel)
    } 
    
    return saldoDeVitorias
}