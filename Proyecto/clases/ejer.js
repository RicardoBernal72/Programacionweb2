let ejer=prompt(`Elige el ejercicio
    1=Pregunta del nombre
    2=Suma de 2 números
    3=Opracion NOT
    4=Operacion AND
    5=Operacion OR
    6= un if simple
    7=intenta adivinar el número
 `);
switch(ejer){
    case"1": 
    alert("Pregunta");
    let nombre=prompt("cual es tu nombre");
    alert("tu nombre es :"+nombre);
    break;

    case"2":
    alert("Suma de 2 números")
    let num1=parseInt(prompt("ingresa el primer numero a sumar"));
    let num2=parseInt(prompt("ingresa el segundo numero"));
    let suma=(num1+num2);
    alert(suma);
    break;

    case"3":
    alert("Operacion NOT");
    var inv=prompt("ingresa 1 ó 0");
    if(inv==1){
        var inv=0
        alert(inv);
    }
    if(inv==0){
        var inv=1
        alert(inv);
    }
    break;

    case"4":
    alert("Operacion AND");
    let n1=parseInt(prompt("ingresa 1 ó 0"));
    let n2=parseInt(prompt("ingresa 1 ó 0"));
    if(n1==0){
        alert("false");
    }
    if(n2==0){
        alert("false");
    }
    else{
        alert("verdadero")
    }
    break;


    case"5":
    alert("Operacion OR");
    let nu1=parseInt(prompt("ingresa 1 ó 0"));
    let nu2=parseInt(prompt("ingresa 1 ó 0"));
    if(nu1==1){
        alert("verdadero");
    }
    if(nu2==1){
        alert("verdadero");
    }
    else{
        alert("falso")
    }
    break;

    case"6":
    alert("if simple")
    let cas=prompt("Cual es tu edad?")
    if (cas<=20){
        alert("un tines camino que recorrer joven ")
    }
    if (cas>20){
        alert("ya estas un paso mas pallá que pacá")
    }
    break;

    case"7":
    alert("adivina el número")
    let rand=Math.random();
    let un=prompt("ingresa un numero")
    let ram=(Math.floor(rand*10));
    if (ram==un){
        alert("Adivinaste toma una galleta")
    }
    else{
        alert("Suerte para la proxima el número era : "+ram)
    }

    
}
