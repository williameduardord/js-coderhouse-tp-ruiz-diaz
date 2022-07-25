let nu = prompt("ingrese la cantidad de notas a promediar");
let num = parseInt(nu);
let nota = 0;
let suma=0;
let nott=0;
let promedio=0;
let i = 0;
let salir="esc";

while (i < num && nota != salir) {
    nota = prompt("ingrese nota " + (i+1) + "  o esc para interrumpir el calculo");
    nott = parseInt(nota);
    suma = suma + nott;
    i = i + 1;
    console.log(i);
    promedio = suma /num;
    console.log(suma);
}
if (nota != salir){
    alert("El promedio es " + promedio);
    console.log(promedio);
    
}else if (nota = salir){
    alert("As interrumpido el calculo"); 
}
