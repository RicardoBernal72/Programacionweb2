let ccont = true;
const listaC = ["Leche","Queso","Papel"];
//creamos un lista unidimensional en donde guardaremos las compras.

while (ccont == true){

    // opcoin de agregar o quitar.
    let de = prompt("Quieres agregar(1) o eliminar(0) no intermedios");

    // funcion  en donde se  relaizan tanto la añadicion como la restación de lementso
    function decicion(){
        if (de ==1 ){
            let elem= prompt("ingresa elemento");
            listaC.push(elem);
            console.log(listaC);
        }
        if(de ==0 ){
            listaC.pop();
            console.log(listaC);
            
        }
        
    }
    decicion();
    alert(listaC);
    
};
