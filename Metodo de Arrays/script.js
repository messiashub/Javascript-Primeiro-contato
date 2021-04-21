
// MÉTODOS DE ARRAYS

//let frutas = ['banana','maçã','pêra','morango','uva','melância','laranja'];

// toString() -> converte em string um array

//console.log(frutas.toString());

// join() -> O método também une todos os elementos de matriz em uma string, mas além disso você pode especificar o separador

//console.log(frutas.join(' - '));

// indexOf() -> procura um item  do array e retorna a posição  do item

//console.log(frutas.indexOf('morango'));

// pop() -> remove o último elemento de uma matriz, obs: O método devolve o valor que foi "retirado".

//frutas.pop();
//let cesta = frutas;
//console.log(cesta);

// shift() ->  remove o primeiro elemento de matriz e "muda" todos os outros elementos para um índice mais baixo

//frutas.shift();
//let primeiro = frutas;
//console.log(primeiro);



let lista = ['ovo','farinha','trigo','massa'];

// push() -> O método adiciona um novo elemento a uma matriz (no final),

lista.push('macarrão');
let novo = lista;

console.log(novo);

// splice() -> O método pode ser usado para  remover ou adicionar novos itens a uma matriz

lista.splice(1,2);   
let novo1 = lista;

console.log(novo1);

// map()  -> O método cria uma nova matriz com os resultados de chamar uma função para cada elemento de matriz
//        -> O método chama a função fornecida uma vez para cada elemento em uma matriz, em ordem
//        -> Nota: este método não altera a matriz original.

let numeros =[2,4,6,8];

let dobraNumeros = [];
let dobraNumeros2 = [];

dobraNumeros= numeros.map((item)=>{
    return item * 2;
});

console.log(dobraNumeros);

dobraNumeros2 = numeros.map(function(item){
    if(item > 4){
        return item * 2;
    }
    else{
        return item;
    }
});

console.log(dobraNumeros2);


// filter() -> O método filter() cria uma array preenchido com todos os elementos de matriz que passam por um teste (fornecido como uma função).
//          -> Nota: o filtro() não altera a matriz original.

let lista2= [45, 4, 9, 16, 25];
let lista3 = [];

lista3 = lista2.filter((item)=>{
    return item > 20;
});

console.log(lista3);
