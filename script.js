console.log("***********PRIMER EJERCICIO*********")
let flores = ["Bugamnilias","Rosas","Arbustos", "Suculentas","Hierbas"]
flores.forEach(function(elemento, indice, array){
   console.log("Planta: " + elemento)
});

console.log("***********SEGUNDO EJERCICIO*********")
let generos = ["Jazz", "House", "R&B", "DeepHouse"]
generos.forEach(function(elemento, indice, array){
   console.log("Genero: " + elemento)
});

let nuevaLongitud = generos.push("Rock") //agregamos el nuevo elemento con push
console.log("Nuevo array con elemento nuevo")
//volvemos a recorrer el nuevo arreglo
generos.forEach(function(elemento,indice,array){
   console.log(elemento, indice)
})

console.log("***********TERCER EJERCICIO*********")
let numeros = [10,20,30,40,50]
numeros.forEach(function(elemento,indice,array){
   console.log(elemento)
})
console.log("Arreglo Actualizado")
let ultimo2 = numeros.pop();
numeros.forEach(function(elemento,indice,array){
   console.log(elemento)
})

console.log("***********CUARTO EJERCICIO*********")
let nombres = ["Andy", "Diegucci", "Omar","Andy", "Aly", "Andy"]
nombres.forEach(function(elemento, indice, array){
   console.log(elemento, indice)
});
console.log("El índice de la ultima aparición del nombre Andy es: "+ nombres.lastIndexOf("Andy"))

console.log("***********QUINTO EJERCICIO*********")
let edad = [15,12,18,20]
edad.forEach(function(elemento, indice, array){
   console.log("el indice del elemento que satisface la condicion >=18 es: " + edad.findIndex(elemento => elemento >= 18))
});

console.log("***********SEXTO EJERCICIO*********")
let numerosOrdenados = [3,1,4,1,5,9,2,7,6]
numerosOrdenados.sort(function(a,b){return a-b});
numerosOrdenados.forEach(function(elemento){
    console.log(elemento)
});

function signoMes(){
let mes = document.getElementById("mes");  
let signo; //creamos una variable en la cual se va a almacenar el signo según el mes
switch (mes){
    case "enero":  
        signo = "capricornio"
    break;
    case "febrero":  
        signo = "acuario"
    break;
    case "marzo":  
        signo = "piscis"
    break;
    case "abril":  
        signo = "aries"
    break;
    case "mayo":  
        signo = "tauro"
    break;
    case "junio":  
        signo = "geminis"
    break;
    case "julio":  
        signo = "cancer"
    break;
    case "agosto":  
        signo = "leo"
    break;
    case "septiembre":  
        signo = "virgo"
    break;
    case "octubre":  
        signo = "libra"
    break;
    case "noviembre":  
        signo = "escorpio"
    break;
    case "diciembre":  
        signo = "sagitario"
    break;
    default : signo = "Desconocido"

}    
document.getElementById("mes").innerText = "Tu signo es " + signo;
}

//EJERCICIO 8 
function mostrarPrecio() {
    const select = document.getElementById("boletos");
    const precio = select.value;
    document.getElementById("precio").textContent = "El precio del boleto seleccionado es $" + precio;
}
