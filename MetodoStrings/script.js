
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


// PADSTART  E PADEND

// PADEND -> O método padEnd() preenche a string original com um determinado caractere, ou conjunto de caraceres, (repetidamente, se necessário) para que a string resultante alcance um determinado comprimento. O preenchimento é aplicado a partir do final (direita) da string original. A string original não é modificada.

// VALOR RETORNADO -> Uma String cuja composição vem da string original, completada por um ou mais caracteres de preenchimento, respeitando o comprimento alvo.

// EX 1:
let telefone = '64';
let preenchido = telefone.padEnd(9,'*'); // deve ter no mínimo 9 caracteres , se não tiver preencha com "*";
console.log(preenchido);


// PADSTART -> O método padStart() preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento é aplicado antes do primeiro caractere da string original. A string original não é modificada.

// VALOR RETORNADO -> Uma String de comprimento específico com uma string de preenchimento aplicada a partir do seu início.

// Ex 1:
let telefone2 = '9';
let preenchido2 = telefone2.padStart(9,'*');
console.log(preenchido2);


// EX 2:

// Uso em uma situação real de cartão de credito

let cartao ='2345268328902198'
let ultimosDigitos = cartao.slice(-3);
let cartaoMascarado = ultimosDigitos.padStart(12,'*');

console.log(`Este é o seu cartão?: ${cartaoMascarado}`);
