const readline = require('readline-sync');

let nome = readline.question("Nome: ");
let salario = Number(readline.question("Salario: "));
let resultado = Number(readline.question("Resultado: "));

let meta = 10000;
let desempenho = (resultado / meta) * 100;

console.log("Desempenho:", desempenho);

if (desempenho < 70) {
    console.log("Insuficiente");
} else if (desempenho < 100) {
    console.log("Satisfatorio");
} else {
    console.log("Excelente");
}