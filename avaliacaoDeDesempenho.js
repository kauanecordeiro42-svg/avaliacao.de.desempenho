const readline = require('readline-sync');

console.log("--------------------------------------")
console.log("|       Avaliação De Desempenho      |")
console.log("--------------------------------------")

let nome = readline.question("Nome: ");
let cargo = readline.question("Cargo: ");
let salario = Number(readline.question("Salario: "));
let resultado = Number(readline.question("Resultado: "));

let meta = 10000;
let desempenho = (resultado / meta) * 100;

console.log("----- RESULTADO -----");

console.log("Funcionario:", nome);
console.log("Cargo:", cargo);
console.log("Desempenho:", desempenho, "%");

if (desempenho < 70) {
    console.log("Classificacao: Insuficiente");
} else if (desempenho < 100) {
    console.log("Classificacao: Satisfatorio");
} else {
    console.log("Classificacao: Excelente");
}

if (resultado < meta) {
    let falta = meta - resultado;
    let percentualFalta = (falta / meta) * 100;

    console.log("Faltou:", falta);
    console.log("Abaixo da meta:", percentualFalta, "%");
}

let bonus = 0;

if (desempenho < 70) {
    bonus = 0;
} else if (desempenho < 100) {
    bonus = salario * 0.05;
} else {
    bonus = salario * 0.10;
}

console.log("Bonus:", bonus);
console.log("Salario final:", salario + bonus);

console.log("----------------------");