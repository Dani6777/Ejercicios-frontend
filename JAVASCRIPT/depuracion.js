function dividir(a, b) {
    debugger; // Punto de interrupción
    if (b !== 0) {
        return a / b;
    } else {
        console.error("Error: No se puede dividir por cero.");
        return undefined;
    }
}

let resultado = dividir(10, 0);
console.trace(resultado);
