
// toUpperCase -> converte string em MAIÚSCULA

let nome = 'claudinei messias';

console.log (`Convertendo em maiúscula o valor da variável nome = ${nome.toUpperCase()}`);

////////////////////////////

// toLowerCase -> converte string em minúsculas
let sobrenome = 'MessiaS'

console.log(`Convertendo em minúsculas o valor da variável sobrenome = ${sobrenome.toLowerCase()}`);

///////////////////////////

// String.trim() -> O método remove o espaço branco de ambos os lados de uma string:trim()
let espace = '  oval   ';

console.log(espace);
console.log(espace.trim());

///////////////////////////////////////////

// SLICE -> O método slice() retorna os elementos selecionados em uma matriz, como um novo objeto de matriz.
//        O método de fatia() seleciona os elementos a partir do argumento inicial dado, e termina, mas não inclui, o argumento final dado.
//        Nota: A matriz original não será alterada.

let nome2 = 'claudinei';
let letras = nome2.slice(2,6);   // pega do indice 2 até o indice 6, não inclui o argumento final dado (6)

console.log(letras);  // audi

let frutas = [ 'banana','uva','cocô','pera','macã'];

let fruta = frutas.slice(1,4);  // pega do indice 1 até o indice 4, não inclui o argumento final dado (4)


console.log(fruta);  // [ 'uva', 'cocô', 'pera' ]

////////////////////

let numeros= '123456789';
let num = numeros.slice(0,8); // pega do indice 0 até  o indice 8, não  inclui o argumento final dado (8)

console.log(num); // 12345678
 

