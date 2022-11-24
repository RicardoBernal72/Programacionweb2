/*
let numero=0;
while(numero<=10){
    console.log(numero);
    numero++;
}
*/


let numMa=Math.floor(Math.random()*(10-1))+1;
console.log(numMa)



let numus = parseInt(prompt("Adivina el número del 1 al 10"));


let vidas=3;
while(numMa !== numus && vidas >1){
    vidas--;
    numus = parseInt(prompt("si sigues así te vas a morir "+vidas))
}

if (numMa==numus){
    numus = prompt("Enhorabuena Haz ganado")
}
else{
    numus = prompt("Hiciste la muricion")
}
