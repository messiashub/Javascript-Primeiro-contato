
// DATES
// Os objetos de data são criados com o construtor.new Date()
/* Existem 4 maneiras de criar um novo objeto de data:

- new Date() 
- new Date(year, month, day, hours, minutes, seconds, milliseconds)
- new Date(milliseconds)
- new Date(date string)  */

// Nota: JavaScript conta meses de 0 a 11.
// Janeiro é 0. Dezembro é 11.

let d = new Date();
console.log(d);
console.log(d.toDateString());  // toDateString() -> O método converte uma data em um formato mais legível