const ofertas = [1500, 2000, 2500, 3000, 3500, 4000];
const salarioMinimo = 3000;
const indice = buscarPrimeraOferta(ofertas, salarioMinimo);

function buscarPrimeraOferta(ofertas, salarioMinimo) {
    let izquierda = 0;
    let derecha = ofertas.length - 1;

    while (izquierda <= derecha) {
        const medio = Math.floor((izquierda + derecha) / 2);

        if (ofertas[medio] >= salarioMinimo) {
            if (medio === 0 || ofertas[medio - 1] < salarioMinimo) {
                return medio;
            }
            derecha = medio - 1;
        } else {
            izquierda = medio + 1;
        }
    }

    return -1; 
}



console.log("El índice es:", indice); 
console.log("El salario mínimo es:", salarioMinimo);

