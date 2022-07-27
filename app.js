function interesCompuesto(monto,tiempo,taza,ciclo){
    let interes;
    let i = 0 ;
    let pagos=tiempo/ciclo ;
    let saldo=monto;
    while (i< pagos){
        interes = ( (saldo * ciclo * taza)/(100*365));
        saldo = saldo + interes;
        i = i+1;
    }
return saldo;
}
let monto = parseFloat(prompt("Ingrese el monto de dinero"));
let tiempo = parseFloat(prompt("Ingrese el el tiempo total a del deposito"));
let taza = parseFloat(prompt("Ingrese la taza de interes"));
let ciclo = parseFloat(prompt("Ingrese la perioricidad de tiempo con la que se realizaran los pagos"));
alert(interesCompuesto(monto,tiempo,taza,ciclo));