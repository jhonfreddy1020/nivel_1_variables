// Solicitar al usuario dos resistencias
let resistencia1 = prompt("Introduce el valor de la resistencia 1 (en ohmios):");
let resistencia2 = prompt("Introduce el valor de la resistencia 2 (en ohmios):");

// Convertir las entradas a números de punto flotante
resistencia1 = parseFloat(resistencia1);
resistencia2 = parseFloat(resistencia2);

// Calcular la resistencia equivalente en paralelo
let resistenciaEquivalente = (resistencia1 * resistencia2) / (resistencia1 + resistencia2);

// Mostrar el resultado al usuario
console.log("La resistencia equivalente en paralelo es: " + resistenciaEquivalente.toFixed(2) + " ohmios");
