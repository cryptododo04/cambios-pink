 //ARGENTINA PAGOS Y DEPOSITOS
 
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


//BIZUM PAGOS Y DEPOSITOS
 

// Calcula y muestra los valores de los depósitos en el div correspondiente
const valoresDepositosBizum = {
1: calcularComisionBizumDeposito(0.33),
5: calcularComisionBizumDeposito(3.7),
10: calcularComisionBizumDeposito(7.9),
25: calcularComisionBizumDeposito(20.5),
50: calcularComisionBizumDeposito(41.5)
};

// Elemento HTML donde se mostrarán los resultados de los depósitos
const resultadosDepositosBizumDiv = document.getElementById("resultadosDepositosBizum");

// Itera sobre los valores de los depósitos y los agrega al div
Object.keys(valoresDepositosBizum).forEach(monto => {
const valorDeposito = valoresDepositosBizum[monto];
const nuevoElemento = document.createElement("div");
nuevoElemento.innerHTML = `Si depositas <strong>${monto} EUR</strong>, recibes <strong>${valorDeposito}$</strong>`;
resultadosDepositosBizumDiv.appendChild(nuevoElemento);
});

// Función para calcular el valor del depósito en USDT
function calcularComisionBizumDeposito(monto) {
const precioEurUsdt = 1;
return monto / precioEurUsdt ;
}

//BRASIL PAGOS Y DEPOSITOS
 
// Calcula y muestra los valores de los pagos en el div correspondiente



// Calcula y muestra los valores de los depósitos en el div correspondiente
const valoresDepositosBrasil = [
    { clave: 6.55, valor: calcularComisionBrasilDeposito(6.55) },
    { clave: 32.75, valor: calcularComisionBrasilDeposito(32.75) },
    { clave: 10, valor: calcularComisionBrasilDeposito(7.9) },
    { clave: 25, valor: calcularComisionBrasilDeposito(20.5) },
    { clave: 50, valor: calcularComisionBrasilDeposito(41.5) }
];

// Elemento HTML donde se mostrarán los resultados de los depósitos
const resultadosDepositosBrasilDiv = document.getElementById("resultadosDepositosBrasil");

// Itera sobre los valores de los depósitos y los agrega al div
valoresDepositosBrasil.forEach(item => {
    const clave = item.clave;
    const valor = item.valor;
    const nuevoElemento = document.createElement("div");
    nuevoElemento.innerHTML = `Si depositas <strong>${clave} REALES</strong>, recibes <strong>${valor}$</strong>`;
    resultadosDepositosBrasilDiv.appendChild(nuevoElemento);
});

// Función para calcular el valor del depósito en USDT
function calcularComisionBrasilDeposito(monto) {
    const precioRealUsdt = 5.5;
    monto = monto / precioRealUsdt;

    monto = monto - monto * 0.16;
    return monto.toFixed(2);
}

//CHILE PAGOS Y DEPOSITOS
 
 // Calcula y muestra los valores de los pagos en el div correspondiente
 const valoresPagosChile = {
    1: calcularComisionChilePago(1),
    5: calcularComisionChilePago(5),
    10: calcularComisionChilePago(10),
    20: calcularComisionChilePago(20),
    25: calcularComisionChilePago(25),
    50: calcularComisionChilePago(50),
    100: calcularComisionChilePago(100)
};


// Elemento HTML donde se mostrarán los resultados de los pagos
const resultadosPagosChileDiv = document.getElementById("resultadosPagosChile");

// Itera sobre los valores de los pagos y los agrega al div
Object.keys(valoresPagosChile).forEach(monto => {
    const valorPago = valoresPagosChile[monto];
    const nuevoElemento = document.createElement("div");
    nuevoElemento.innerHTML = `Si pides que te paguemos <strong>$${monto}</strong>, recibes <strong>${valorPago} CLP</strong>`;
    resultadosPagosChileDiv.appendChild(nuevoElemento);
});

// Función para calcular el valor del pago en ARS
function calcularComisionChilePago(monto) {

    const precioUsdtChile = 940;

    return monto * precioUsdtChile;
}


// Calcula y muestra los valores de los depósitos en el div correspondiente
const valoresDepositosChile = {
1050: calcularComisionChileDeposito(1050),
5250: calcularComisionChileDeposito(5250),
10500: calcularComisionChileDeposito(10500),
21000: calcularComisionChileDeposito(21000),
42000: calcularComisionChileDeposito(42000)
};

// Elemento HTML donde se mostrarán los resultados de los depósitos
const resultadosDepositosChileDiv = document.getElementById("resultadosDepositosChile");

// Itera sobre los valores de los depósitos y los agrega al div
Object.keys(valoresDepositosChile).forEach(monto => {
const valorDeposito = valoresDepositosChile[monto];
const nuevoElemento = document.createElement("div");
nuevoElemento.innerHTML = `Si depositas <strong>${monto} CLP</strong>, recibes <strong>${valorDeposito}$</strong>`;
resultadosDepositosChileDiv.appendChild(nuevoElemento);
});

// Función para calcular el valor del depósito en USDT
function calcularComisionChileDeposito(monto) {
const precioChileUsdt = 1050;
return monto / precioChileUsdt;
}


//COLOMBIA PAGOS Y DEPOSITOS
 
 // Calcula y muestra los valores de los pagos en el div correspondiente
 const valoresPagosColombia = {
    1: calcularComisionColombiaPago(1),
    5: calcularComisionColombiaPago(5),
    10: calcularComisionColombiaPago(10),
    20: calcularComisionColombiaPago(20),
    25: calcularComisionColombiaPago(25),
    50: calcularComisionColombiaPago(50),
    100: calcularComisionColombiaPago(100)
};


// Elemento HTML donde se mostrarán los resultados de los pagos
const resultadosPagosColombiaDiv = document.getElementById("resultadosPagosColombia");

// Itera sobre los valores de los pagos y los agrega al div
Object.keys(valoresPagosColombia).forEach(monto => {
    const valorPago = valoresPagosColombia[monto];
    const nuevoElemento = document.createElement("div");
    nuevoElemento.innerHTML = `Si pides que te paguemos <strong>$${monto}</strong>, recibes <strong>${valorPago} COP</strong>`;
    resultadosPagosColombiaDiv.appendChild(nuevoElemento);
});

// Función para calcular el valor del pago en ARS
function calcularComisionColombiaPago(monto) {

    const precioUsdtColombia = 3850;

    return monto * precioUsdtColombia;
}


// Calcula y muestra los valores de los depósitos en el div correspondiente
const valoresDepositosColombia = {
3950: calcularComisionColombiaDeposito(3950),
19750: calcularComisionColombiaDeposito(19750),
39500: calcularComisionColombiaDeposito(39500),
79000: calcularComisionColombiaDeposito(79000),
197500: calcularComisionColombiaDeposito(197500)
};

// Elemento HTML donde se mostrarán los resultados de los depósitos
const resultadosDepositosColombiaDiv = document.getElementById("resultadosDepositosColombia");

// Itera sobre los valores de los depósitos y los agrega al div
Object.keys(valoresDepositosColombia).forEach(monto => {
const valorDeposito = valoresDepositosColombia[monto];
const nuevoElemento = document.createElement("div");
nuevoElemento.innerHTML = `Si depositas <strong>${monto} COP</strong>, recibes <strong>${valorDeposito}$</strong>`;
resultadosDepositosColombiaDiv.appendChild(nuevoElemento);
});

// Función para calcular el valor del depósito en USDT
function calcularComisionColombiaDeposito(monto) {
const precioColombiaUsdt = 3950;
return monto / precioColombiaUsdt;
}

//COSTA RICA PAGOS 
 

// Calcula y muestra los valores de los depósitos en el div correspondiente
const valoresDepositosCostaRica = {
    540: calcularComisionCostaRicaDeposito(540),
    2700: calcularComisionCostaRicaDeposito(2700),
    5400: calcularComisionCostaRicaDeposito(5400),
    13500: calcularComisionCostaRicaDeposito(13500),
    27000: calcularComisionCostaRicaDeposito(27000)
    };
    
    // Elemento HTML donde se mostrarán los resultados de los depósitos
    const resultadosDepositosCostaRicaDiv = document.getElementById("resultadosDepositosCostaRica");
    
    // Itera sobre los valores de los depósitos y los agrega al div
    Object.keys(valoresDepositosCostaRica).forEach(monto => {
    const valorDeposito = valoresDepositosCostaRica[monto];
    const nuevoElemento = document.createElement("div");
    nuevoElemento.innerHTML = `Si depositas <strong>${monto} CRC</strong>, recibes <strong>${valorDeposito}$</strong>`;
    resultadosDepositosCostaRicaDiv.appendChild(nuevoElemento);
    });
    
    // Función para calcular el valor del depósito en USDT
    function calcularComisionCostaRicaDeposito(monto) {
    const precioCrcUsdt = 540;
    return monto / precioCrcUsdt ;
    }


    //ECUADOR PAGOS Y DEPOSITOS
 
 // Calcula y muestra los valores de los pagos en el div correspondiente
 const valoresPagosEcuador = {
    1: calcularComisionEcuadorPago(1),
    5: calcularComisionEcuadorPago(5),
    10: calcularComisionEcuadorPago(10),
    20: calcularComisionEcuadorPago(20),
    25: calcularComisionEcuadorPago(25),
    50: calcularComisionEcuadorPago(50),
    100: calcularComisionEcuadorPago(100)
};


// Elemento HTML donde se mostrarán los resultados de los pagos
const resultadosPagosEcuadorDiv = document.getElementById("resultadosPagosEcuador");

// Itera sobre los valores de los pagos y los agrega al div
Object.keys(valoresPagosEcuador).forEach(monto => {
    const valorPago = valoresPagosEcuador[monto];
    const nuevoElemento = document.createElement("div");
    nuevoElemento.innerHTML = `Si pides que te paguemos <strong>$${monto}</strong>, recibes <strong>${valorPago} $</strong>`;
    resultadosPagosEcuadorDiv.appendChild(nuevoElemento);
});

// Función para calcular el valor del pago en ARS
function calcularComisionEcuadorPago(monto) {

    const precioUsdtEcuador = 1;

    return monto * precioUsdtEcuador;
}


// Calcula y muestra los valores de los depósitos en el div correspondiente
const valoresDepositosEcuador = {
1: calcularComisionEcuadorDeposito(1),
5: calcularComisionEcuadorDeposito(5),
10: calcularComisionEcuadorDeposito(10),
25: calcularComisionEcuadorDeposito(25),
50: calcularComisionEcuadorDeposito(50)
};

// Elemento HTML donde se mostrarán los resultados de los depósitos
const resultadosDepositosEcuadorDiv = document.getElementById("resultadosDepositosEcuador");

// Itera sobre los valores de los depósitos y los agrega al div
Object.keys(valoresDepositosEcuador).forEach(monto => {
const valorDeposito = valoresDepositosEcuador[monto];
const nuevoElemento = document.createElement("div");
nuevoElemento.innerHTML = `Si depositas <strong>$${monto} </strong>, recibes <strong>$${valorDeposito}</strong>`;
resultadosDepositosEcuadorDiv.appendChild(nuevoElemento);
});

// Función para calcular el valor del depósito en USDT
function calcularComisionEcuadorDeposito(monto) {
const precioColombiaUsdt = 1.04;
return (monto / precioColombiaUsdt).toFixed(2);
}


//EUROS PAGOS Y DEPOSITOS
 

// Calcula y muestra los valores de los depósitos en el div correspondiente
const valoresDepositosEuros = {

    5: calcularComisionEurosDeposito(3.7),
    10: calcularComisionEurosDeposito(7.9),
    25: calcularComisionEurosDeposito(20.5),
    50: calcularComisionEurosDeposito(41.5),
    100: calcularComisionEurosDeposito(83.5)
    };
    
    // Elemento HTML donde se mostrarán los resultados de los depósitos
    const resultadosDepositosEurosDiv = document.getElementById("resultadosDepositosEuros");
    
    // Itera sobre los valores de los depósitos y los agrega al div
    Object.keys(valoresDepositosEuros).forEach(monto => {
    const valorDeposito = valoresDepositosEuros[monto];
    const nuevoElemento = document.createElement("div");
    nuevoElemento.innerHTML = `Si depositas <strong>€${monto}</strong>, recibes <strong>€${valorDeposito}$</strong>`;
    resultadosDepositosEurosDiv.appendChild(nuevoElemento);
    });
    
    // Función para calcular el valor del depósito en USDT
    function calcularComisionEurosDeposito(monto) {
    const precioEurosUsdt = 1;
    return monto / precioEurosUsdt ;
    }

    
//MEXICO PAGOS Y DEPOSITOS
 
// Calcula y muestra los valores de los pagos en el div correspondiente



// Calcula y muestra los valores de los depósitos en el div correspondiente
const valoresDepositosMexico = [
    { clave: 22, valor: calcularComisionMexicoDeposito(22) },
    { clave: 110.2, valor: calcularComisionMexicoDeposito(110.2) },
    { clave: 220.2, valor: calcularComisionMexicoDeposito(220.2) },
    { clave: 550.5, valor: calcularComisionMexicoDeposito(550.5) },
    { clave: 1101.2, valor: calcularComisionMexicoDeposito(1101.2) },
    { clave: 2202.3, valor: calcularComisionMexicoDeposito(2202.3) }
];

// Elemento HTML donde se mostrarán los resultados de los depósitos
const resultadosDepositosMexicoDiv = document.getElementById("resultadosDepositosMexico");

// Itera sobre los valores de los depósitos y los agrega al div
valoresDepositosMexico.forEach(item => {
    const clave = item.clave;
    const valor = item.valor;
    const nuevoElemento = document.createElement("div");
    nuevoElemento.innerHTML = `Si depositas <strong>MXN ${clave}</strong>, recibes <strong>$${valor}</strong>`;
    resultadosDepositosMexicoDiv.appendChild(nuevoElemento);
});

// Función para calcular el valor del depósito en USDT
function calcularComisionMexicoDeposito(monto) {
    const precioMexicoUsdt = 18.5;
    monto = monto / precioMexicoUsdt;

    monto = monto - monto * 0.16;
    return monto.toFixed(2);
}