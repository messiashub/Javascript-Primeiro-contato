
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

const $botao = document.querySelector('button');
$botao.addEventListener('click',()=>{
    console.log('botao clicado')
});