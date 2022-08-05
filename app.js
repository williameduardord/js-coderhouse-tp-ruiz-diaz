/*const precios = ["BTC", "ETH", "ADA", "IOT", "DOT", "VET", ]*/

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

let mostrar = 0;

for (let i = 0; i < cotizaciones.length; i++) {
    console.log(mostrar = (cotizaciones[i].symbol)+"  " + (cotizaciones[i].price));
    
}

for (const price of cotizaciones) {
    console.log(price.price);
}
for (const symbol of cotizaciones) {
    console.log(symbol.symbol);
}