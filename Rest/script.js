
// Rest

function adicionar(...nomes){
    console.log(nomes);

}

adicionar('Claudinei','Rose');

// Rest com Spread

function addNomes(names, ...newNames){
    let novo =[
        ...names,
        ...newNames
    ];
    return novo;
}
let names = ['Claudinei','Sheila'];

let outros = addNomes(names,'Shayenne','Micaela','Margareth');

console.log(outros);

// Somando com rest

function somar(...numbers){
    let soma = 0;
    for(let num of numbers){
        soma +=num;
    }
    return soma;
};
console.log(somar(3,5,6));



