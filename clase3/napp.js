let num1=prompt("numero1");
let rsu=10*5;
let rsu1=20===20;
let rsu2= true && true; /* && es verdadero  si ambos son verdaderos,  || si uno es verdadero devuleve verdadero.*/
console.log(rsu2);

let rsu4= true && false;
console.log(rsu4)

let rsu5= false && true;
console.log(rsu5)

let rsu6= false && false;
console.log(rsu6)

let rsu7= true || true;
console.log(rsu7)

let rsu8= true || false;
console.log(rsu8)

let rsu9= false || true;
console.log(rsu9)

let rsu10= false || false;
console.log(rsu10)


/* === igual que
< menor que
> mayor que
!== distinto de 
*/
console.log(typeof num1);
console.log(rsu);
console.log(rsu1);


console.log("--------------------------------------------------------------------");
let text3s=prompt("escribe javascript");
if (text3s=== "javascript"){
    console.log("you look like a goood joe");
}
else{
    console.log("you look so lonely");
}



let numx= prompt("escribe un número del 1 al 10");
if (numx>0 && numx<11){
    console.log("si lo hiciste")
}
else{
    console.log("no me la conteis")
}
/*
con esto puedo tronar la compu
x=0;
while(numx!==x){
    x=x+1
    console.log(x)
}
console.log("tu numeoro fue "+x)
*/

console.log("--------------------------------------------------------------------");
let opus=prompt(`
lunes=1
martes=2
miercoles=3
jueves=4
viernes=5`)
switch(opus){
    case"1":
    console.log("Lunes");
    break;
    case "2":
    console.log("Martes");
    break;

    case"3":
    console.log("Miercoles");
    break;

    case"4":
    console.log("Feliz jueves");
    break;

    case"5":
    console.log("Viernes");
    break;
}

