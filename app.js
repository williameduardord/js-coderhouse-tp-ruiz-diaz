const cotizaciones = [{
    "symbol": "ETHBTC",
    "price": "0.07051000"
}, {
    "symbol": "LTCBTC",
    "price": "0.00254700"
}, {
    "symbol": "BNBBTC",
    "price": "0.01290300"
}, {
    "symbol": "BNBETH",
    "price": "0.18300000"
}, {
    "symbol": "BTCUSDT",
    "price": "23451.20000000"
}, {
    "symbol": "ETHUSDT",
    "price": "1653.50000000"
}]

let consulta = prompt("ELIJA EL PAR PARA VER SU COTIZACION " +" ETHBTC  LTCBTC  BNBBTC  BTCUSDT  ETHUSDT");
let mostrar = "";


function bus(a) {
    let i = 0;
    while (a != cotizaciones[i].symbol) {
        i = i + 1;
    }
    return i;
}
console.log(" Ultima Cotizacion  " + (cotizaciones[bus(consulta)].symbol) + "=" + (cotizaciones[bus(consulta)].price));
prompt(" Ultima Cotizacion  " + (cotizaciones[bus(consulta)].symbol) + "=" + (cotizaciones[bus(consulta)].price));