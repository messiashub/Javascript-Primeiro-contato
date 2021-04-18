// FOR LOOP
// FOR LOOP PARA ARRAY

let carros = ['Ferrari','Fusca','Palio','Corolla','Corsinha','Kadett'];
let html = '<ul>';

for (let carro in carros){
    html +='<li>'+ carros[carro] + '</li>';
}
html+= '</ul>';
document.getElementById('demo').innerHTML = html;