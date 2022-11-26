//son cadenas laterales que habilitan el uso de expresiones incrustadas con ellas es posible utilizar 
//cadenas de caracteres de mas de una linea, y funcionalidades de iterpolacion de cadenas de caracteres
//las plantillas de cadena de caracteres puedne contener marcadores, identifiacados por el signo de dolar y en envueltos en llaves ${}
//las expresiones contenidas en los marcadore sjunto con el texto entre ellas, son enviados como argumentos a una funcion.
/*
Uno de los mayores problmas al declar con var es que puedens sobrescribir los datos sin errores
en una aplicacion pequeña es posible que n o te encuentres ocn este tioode prolema, perto cuando el codigo es grande,
 puedes sobreescrivir accidentalmente una varibale que no tenia la intecion de sebrescribirla
Recomendacion: declarar las var5ible de tipo let.


let num1 = parseInt(prompt("ingresa tu numero"))
let num2= parseInt(prompt("ingresa tu numero"))

function multi(num1,num2){

for (let i=0;i<num1; i++){
        console.log(i); 
        let resu= i*num2
        console.log(resu)

        
        
    }

}

let saludo = "hola";
console.log("un saludo: "+saludo);

multi(num1,num2);
*/

let name="aaron";
let ap="rjof";
console.log(`
Nombre: de
${name+ap}
`);

//puedes declarar la misma variable si es que se encuntrad entor de una estructurasin que se sobreescriba al usar let.
let estado= true;
if(estado){
    let estado=false;
    console.log(estado);
}
console.log(estado)

//es importanntre comprender que incluidos los arreglos ylas fucniones asignados mediante una varibalede con sigune siendo mutables el uso de cons solo evita la reasignacion del identificador de variable.

const Frutas = ["Aguacate"];
Frutas.push("Mango");
const nombres=["hio","hod","hadho"]
console.log(Frutas);
Frutas.push(nombres);
//el metodo push() añade elemntso al final de un arrglo y devueleve este con su nueva lo0ngitud.
//el metodo unshift() agrga uno o más elementos al inicio del arreglo y devuelve la nueva longitud de este.
//el metodo pop() elimina el ultmio elemnto de un arreglo y lo devuelve
//shift() eñlimina el primer elemento de un arreglo.

//practica crrito de compras cre una app que nos premita ir agregando elemntos aun carrit de comparas con el usod e arreglos.




var queso="Mancho";
var queso="Oaxaca";

let nombre="ricaredo";
let nombre="akemi";

const sal="pimienta";
const sal="potasio";