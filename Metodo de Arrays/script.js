
// MÉTODOS DE ARRAYS

let frutas = ['banana','maçã','pêra','morango','uva','melância','laranja'];

// toString() -> converte em string um array

console.log(frutas.toString());

// join() -> O método também une todos os elementos de matriz em uma string, mas além disso você pode especificar o separador

console.log(frutas.join(' - '));

// indexOf() -> procura um item  do array e retorna a posição  do item

console.log(frutas.indexOf('morango'));

// pop() -> remove o último elemento de uma matriz, obs: O método devolve o valor que foi "retirado".

frutas.pop();
let cesta = frutas;
console.log(cesta);

// shift() ->  remove o primeiro elemento de matriz e "muda" todos os outros elementos para um índice mais baixo

frutas.shift();
let primeiro = frutas;
console.log(primeiro);



let lista = ['ovo','farinha','trigo','massa'];

// push() -> O método adiciona um novo elemento a uma matriz (no final),

lista.push('macarrão');
let novo = lista;

console.log(novo);