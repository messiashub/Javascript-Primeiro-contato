
// FOREACH -> O método chama uma função uma vez para cada elemento em uma matriz, em ordem.

const convidados = [
    {nome:'claudinei'},
    {nome:'rose'},
    {nome:'Paula'},
    {nome:'micaela'}
];

convidados.forEach((nomes,posicao)=>{
    console.log(`${nomes.nome} está na posição ${posicao + 1}`);
})
    
let nomes = ['claudinei','rose','marilia'];

let tamanhoNome = 0;
let nome1 = '';

nomes.forEach((nome,item)=>{
    console.log(nome.toUpperCase())
});

function maiorNome(item,valor){
    if(nomes[valor].length > tamanhoNome){
        nome1 = nomes[valor];
        tamanhoNome = nomes[valor].length;
    }

}
nomes.forEach(maiorNome);
console.log(nome1);
