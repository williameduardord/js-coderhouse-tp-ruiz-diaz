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

let body = '';

for (let i=0; i<cotizaciones.length;i++)
{
    body +=`<tr><td>${cotizaciones[i].symbol}</td><td>${cotizaciones[i].price}</td></tr>`
    console.log(" Ultima Cotizacion  " + (cotizaciones[i].symbol) + "=" + (cotizaciones[i].price));

}
i=0;
const productToHTML = (dato) =>{
    
    let texto = "<tr><td>" + (cotizaciones[i].symbol) + "</td><td>" + (cotizaciones[i].price) + "</td></tr>" ;
return texto;
};

let tabla ="";
for ( i=0; i<cotizaciones.length; i++){
tabla += productToHTML(cotizaciones[i]);
}
const data = document.getElementById("data");
data.innerHTML = tabla;
console.log(tabla)
