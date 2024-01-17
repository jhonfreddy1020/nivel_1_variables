// Solicitar al usuario el precio original
let precioOriginal = 300;

// Convertir la entrada a un número
precioOriginal = parseFloat(precioOriginal);

// Solicitar al usuario el porcentaje de descuento
let porcentajeDescuento = 10;

// Convertir la entrada a un número
porcentajeDescuento = parseFloat(porcentajeDescuento);

// Calcular el precio con descuento
let descuento = (precioOriginal * porcentajeDescuento) / 100;
let precioConDescuento = precioOriginal - descuento;

// Mostrar el resultado al usuario
console.log("Precio original: $" + precioOriginal.toFixed(2));
console.log("Porcentaje de descuento: " + porcentajeDescuento.toFixed(2) + "%");
console.log("Descuento: $" + descuento.toFixed(2));
console.log("Precio con descuento: $" + precioConDescuento.toFixed(2));