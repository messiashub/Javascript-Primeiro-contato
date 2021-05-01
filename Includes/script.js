
// INCLUDES  -> Quando desejamos saber se determinado elemento está no array

// O método inclui() determina se uma matriz contém um elemento especificado.
// Este método retorna verdadeiro se a matriz contiver o elemento e é falso, se não.
// Retorna um booleano true ou false

// EX 1:

let array1 = ['banana','maçã','pessêgo','limão'];

let tem = array1.includes('maçã');

console.log(tem);
///////

let nomes = ['Claudinei','Marcia','Rose','Simone'];
function nomeArray(){ 
    if(nomes.includes('Marcia')){
        return 'Está no array';
    }else{
        return 'Não está no array'
    }
}

console.log(nomeArray());


