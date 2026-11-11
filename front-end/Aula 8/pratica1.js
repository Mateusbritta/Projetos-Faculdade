// console.log("Pratica 1");

// const nota1 = 6;
// const nota2 = 9;
// const nota3 = 7;
// let media = (nota1 + nota2 + nota3) / 3;
// media = media.toFixed(1);
// console.log ("Media: " + media);

// const celsius = 30;
// const fahrenheit = celsius * 9 / 5 + 32;
// // completar: Kelvin = celsius + 273.15
// console.log (`${celsius} C = ${fahrenheit} F`);

// const valorConta = 180;
// const pessoas = 4;

// const servico = valorConta * 10 / 100;
// const total = valorConta + servico;
// const porPessoa = total/pessoas;
// console.log("Total: R$ " + total);
// console.log("Cada um: R$ " + porPessoa.toFixed(2));

const dia = 4;
let nome;
switch (dia) {
    case 1:
        nome = "Domingo";
        break;
    case 2:
        nome = "Segunda-feira";
        break;
    case 3:
        nome = "Terça-feira";
        break;
    case 4:
        nome = "Quarta-feira";
        break;
    case 5:
        nome = "Quinta-feira";
        break;
    case 6:
        nome = "Sexta-feira";
        break;
    case 7:
        nome = "Sábado";
        break;
}
console.log("Hoje é: " + nome);

for (let i = 0; i < 10; i +=2) {
    console.log(i);
}

const numero = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

for (let i = 1; i <= 30; i++) {
    if (i % 3 ===0) {
        console.log("Pim");
}
else if (i % 5 ===0) {
    console.log("Pam");
}
else if (i % 15 === 0) {
    console.log("PimPam");
}
else {
    console.log(i);
}
}

let soma = 0;
let n = 1;
while (n <= 100) {
    if (n % 2 === 0) {
        soma += n;
    }
    n++;
}
console.log("Soma dos pares: " + soma);

function media(a, b, c) {     //a,b,c: parâmetros
    return (a + b + c) / 3;     //devolde o resultado
}

function situacao(m) {
    if (m >= 7) 
        return "Aprovado";
    if (m >= 5) 
        return "Recuperação";
        return "Reprovado";
}

const m = media(6, 9, 7);     //chamada
console.log(m.toFixed(1), situacao(m));     //7.3 aprovado