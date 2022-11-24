/* los arrays son lementos comolista cuyo prototip permite hacer recorritos y mutación.
tato la longitud como el tipo de elementos de un array son variables

*/
let frutas=["MANZANA","PERA","PLATANO","Naranja"];
console.log(frutas);
console.log(frutas.length)
console.log(frutas[2])

for (let i=0;i<frutas.length; i++){
    console.log(frutas[i]);
}

//iternado con un for of
for(let fruta of frutas){
    console.log(fruta);
}

