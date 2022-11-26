 
const listaC = ["Leche","Queso","Papel"];
const di=1;
//creamos un lista unidimensional en donde guardaremos las compras.



    // opcoin de agregar o quitar.
    

    function op(){
    let de = prompt("Quieres agregar(1) o eliminar(2) no intermedios");
    switch(de){

    // funcion  en donde se  relaizan tanto la añadicion como la restación de lementso
    case"1":
        
        let elem= prompt("ingresa elemento");
        listaC.push(elem);
        alert(listaC);
        break;
    case"2":    
        listaC.pop();
        alert(listaC);
        break
        
    case"3":
        let continuar=prompt("dontinuar?");
        if (continuar==no){
            return di=4;
        }
    
        
    }

    
}
while(di!=4){
    op();
}


