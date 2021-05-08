
// FUNÇÃO CALLBACK 

// De forma simples, callback é uma função passada como parâmetro para outra função.

function alertar(){
    console.log('Opa, tudo bem?');
};

let nome = 'Claudinei';
setTimeout(alertar, 2000);
let sobrenome = 'Messias';

console.log(`Nome Completo: ${nome} ${sobrenome}`)