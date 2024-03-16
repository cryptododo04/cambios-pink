    // Calcula y muestra los valores de los pagos en el div correspondiente
    const valoresPagosArg = {
        1: calcularComisionArgPago(1),
        5: calcularComisionArgPago(5),
        10: calcularComisionArgPago(10),
        20: calcularComisionArgPago(20),
        25: calcularComisionArgPago(25),
        50: calcularComisionArgPago(50),
        100: calcularComisionArgPago(100)
    };


    // Elemento HTML donde se mostrarán los resultados de los pagos
    const resultadosPagosArgDiv = document.getElementById("resultadosPagosArg");

    // Itera sobre los valores de los pagos y los agrega al div
    Object.keys(valoresPagosArg).forEach(monto => {
        const valorPago = valoresPagosArg[monto];
        const nuevoElemento = document.createElement("div");
        nuevoElemento.innerHTML = `Si pides que te paguemos <strong>$${monto}</strong>, recibes <strong>$${valorPago}</strong>`;
        resultadosPagosArgDiv.appendChild(nuevoElemento);
    });

    // Función para calcular el valor del pago en ARS
    function calcularComisionArgPago(monto) {

        const precioUsdtArs = 920;

        return monto * precioUsdtArs;
    }


    // Calcula y muestra los valores de los depósitos en el div correspondiente
const valoresDepositosArg = {
    1200: calcularComisionArgDeposito(1200),
    6000: calcularComisionArgDeposito(6000),
    12000: calcularComisionArgDeposito(12000),
    24000: calcularComisionArgDeposito(24000),
    30000: calcularComisionArgDeposito(30000)
};

// Elemento HTML donde se mostrarán los resultados de los depósitos
const resultadosDepositosArgDiv = document.getElementById("resultadosDepositosArg");

// Itera sobre los valores de los depósitos y los agrega al div
Object.keys(valoresDepositosArg).forEach(monto => {
    const valorDeposito = valoresDepositosArg[monto];
    const nuevoElemento = document.createElement("div");
    nuevoElemento.innerHTML = `Si depositas <strong>${monto} ARS</strong>, recibes <strong>${valorDeposito}$</strong>`;
    resultadosDepositosArgDiv.appendChild(nuevoElemento);
});

// Función para calcular el valor del depósito en USDT
function calcularComisionArgDeposito(monto) {
    const precioArsUsdt = 1200;
    return monto / precioArsUsdt ;
}   