
// FOR IN ->  É utilizado tanto em objetos como em arrays
// O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.

// Nota: for...in não deve ser usado para iteração em uma Array onde a ordem é importante, visto que ele iterage em uma ordem arbitrária.
//  NÃO É RECOMENDADO  USAR EM  ARRAYS

// USANDO EM OBJETOS
//EX: 1
const usuario = {
    nome:"Claudinei",
    idade:50
};

for (const index in usuario) {
    console.log(`${index}: ${usuario[index]}`); //  retornando a propriedade e o valor    
};

// EX:2

const aluno = {nome:'Bruno', sobrenome:'Campos'};
const notas = {nota1:9.5, nota2:5, nota3: 4.5, nota4:1}

const info = {...aluno,...notas}

for(let dado in info){
    console.log(info[dado]);   // retornando o valor das propriedades
}
/* console.log(info); */

// USANDO EM ARRAYS

const nomes = ['Milson','Mario','Marcelo','Claudinei','Claudio','Claudionor'];

for(let nome in nomes){
    console.log(`${nome} - ${nomes[nome]}`);  //  retornando a propriedade e o valor 
}
