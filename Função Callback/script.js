
// FUNÇÃO CALLBACK 

// De forma simples, callback é uma função passada como parâmetro para outra função.
// Basicamente, callback é um tipo de função que só é executada após o processamento de outra função. Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então, chamada de callback.

function alertar(){
    console.log('Opa, tudo bem?');
};

let nome = 'Claudinei';
setTimeout(alertar, 2000);
let sobrenome = 'Messias';

console.log(`Nome Completo: ${nome} ${sobrenome}`)

//////////////////

function soma(a,b, exibir){
    let op = a + b;
    exibir(op);
}

function multiplica(a,b, exibir){
    let op = a * b;
    exibir(op);
}

function exibir(op){
    console.log(`A operação resulta em ${op}`)
}

soma(2,5, exibir);
multiplica(3,3, exibir);

///////////////////////////////////

/* const $botao = document.querySelector('button');
$botao.addEventListener('click',()=>{
    console.log('botao clicado')
}); */

///////////////////////////////

let salarioBruto = 1100;
let salarioLiquido;

function seuSalario(salarioBruto,callback){
    let liquido = 0;
    const inss = salarioBruto * 0.11;
    const vr   = salarioBruto * 0.05;
    const vt   = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;
    const descontos = inss + vr + vt + fgts;
    liquido = salarioBruto - descontos;

    return callback(liquido);
};

seuSalario(salarioBruto, (resultado)=> {
    salarioLiquido = resultado;
    console.log(`O salário liquido é ${salarioLiquido}`)
});

///////

function mult(x,y){
    return x * y;
}

function add(x,y){
    return x + y;
}

function calcular(x,y, calc){
    return calc(x,y);
}

let a = calcular(4,5, mult);
console.log(a);

let b = calcular(1,1,add);
console.log(b);

////////

function criarNome(nome, sobrenome){
    return `O nome passado foi: ${nome} ${sobrenome}`
}

const pessoa = criarNome;
console.log(pessoa);

const nomeCompleto = pessoa('Claudinei','Messias');
console.log(nomeCompleto);

const pessoa2 = criarNome('Cíntia','da Penha Sauro');
console.log(pessoa2);

/////////

const saudar =(nome)=>{
    const horaAtual= new Date().getHours();

    const resposta = (saudacao)=> console.log(saudacao, nome)

    if(horaAtual <= 12)
        return resposta('Bom dia');
    if(horaAtual <= 17)
        return resposta('Boa tarde');
    else
        return resposta('Boa noite');
}
saudar('claudinei');