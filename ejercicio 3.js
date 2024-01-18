// Tipo de cambio: 1 euro = 1.33250 dólares
const tipoDeCambio = 1.33250;

// Solicitar al usuario un número de dólares
let dolares = 10;

// Convertir la entrada a un número de punto flotante
dolares = parseFloat(dolares);

// Calcular el cambio en euros
let euros = dolares / tipoDeCambio;

// Mostrar el resultado al usuario
console.log(dolares.toFixed(2) + " dólares equivalen a " + euros.toFixed(2) + " euros");