import Soma from "./src/calculadoraClass/soma";
import Subtracao from "./src/calculadoraClass/subtracao";
import Multiplicacao from "./src/calculadoraClass/multiplicacao";
import Divisao from "./src/calculadoraClass/divisao";
import Potenciacao from "./src/calculadoraClass/potenciacao";
import Radiciacao from "./src/calculadoraClass/radiciacao";
import Bhaskara from "./src/calculadoraClass/bhaskara";

const soma = new Soma();
const subtracao = new Subtracao();
const multiplicacao = new Multiplicacao();
const divisao = new Divisao();
const potenciacao = new Potenciacao();
const radiciacao = new Radiciacao();
const bhaskara = new Bhaskara();


console.log("Soma:", soma.calcular(10, 5));
console.log("Subtração:", subtracao.calcular(10, 5));
console.log("Multiplicação:", multiplicacao.calcular(10, 5));
console.log("Divisão:", divisao.calcular(10, 5));
console.log("Potenciação:", potenciacao.calcular(2, 3));
console.log("Radiciação:", radiciacao.calcular(25, 2));
console.log("Bhaskara:", bhaskara.calcular(1, -3, -10));

