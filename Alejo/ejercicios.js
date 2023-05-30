
//Ejercicio #1 = •	Imprimir los números del 1 al 50 cada uno con su respectivo cuadrado.
function paer(){
    var cuadrado=document.getElementById("mostrar");
    var tabla=document.createElement("tabla");
    var tbody=document.createElement("tbody");
    var fila=document.createElement("tr");
    var celdath=document.createElement("th");
    txth=document.createTextNode("Numeros");
    celdath.appendChild(txth);
    fila.appendChild(celdath);
    var celdath=document.createElement("th");
    txth=document.createTextNode("Cuadrado");
    celdath.appendChild(txth);
    fila.appendChild(celdath);
    tbody.appendChild(fila);
    for(let i=1; i<=50; i++){
        for (let n = 0; n < 2; n++){}
        var fila=document.createElement("tr");
        var celdath=document.createElement("td")
        txth=document.createTextNode(i);
        celdath.appendChild(txth);
        fila.appendChild(celdath);
        var celdath=document.createElement("th");
        txth=document.createTextNode(i*i);
        celdath.appendChild(txth);
        fila.appendChild(celdath);
        tbody.appendChild(fila);

        tabla.appendChild(tbody);
        cuadrado.appendChild(tabla);
        tabla.setAttribute("class","table table-dark");
        fila.setAttribute("class","table-active")

    }
}

function limpiar(){
    document.getElementById("mostrar").innerHTML="";
}

//Ejercicio #2 = •	Imprimir números impares del 1 la 100 y seguidamente otro con los números pares de 102 a 200.
function par(){

    var par=document.getElementById("consultar");
    var tablaa=document.createElement("tabla");
    var tbbody=document.createElement("tbody");
    var filas=document.createElement("tr");
    var celdaths=document.createElement("th");
    txth=document.createTextNode("Pares");
    celdaths.appendChild(txth);
    filas.appendChild(celdaths);
    tbbody.appendChild(filas);
    for(let i=100; i<=200; i+=2){
        var filas=document.createElement("tr");
        var celdaths=document.createElement("td")
        txth=document.createTextNode(i);
        celdaths.appendChild(txth);
        filas.appendChild(celdaths);
        tbbody.appendChild(filas);
    }
    tablaa.appendChild(tbbody);
        par.appendChild(tablaa);
        tablaa.setAttribute("class","table table-dark");
        filas.setAttribute("class","table-active")
        
    document.write(`Los numeros pares del 102 al 200 son los siguientes: ${i} <br>`);
    document.getElementById("cuadrados").style.display = "block";
}

function limpiar2(){
    document.getElementById("consultar").innerHTML="";
    document.getElementById("muestra").innerHTML="";
    document.getElementById("respu").innerHTML="";
    document.getElementById("reser").innerHTML="";
}

function impar(){
    var par=document.getElementById("muestra");
    var tablaa=document.createElement("tabla");
    var tbbody=document.createElement("tbody");
    var filas=document.createElement("tr");
    var celdaths=document.createElement("th");
    txth=document.createTextNode("Impares");
    celdaths.appendChild(txth);
    filas.appendChild(celdaths);
    tbbody.appendChild(filas);
    for(let i=3; i<=100; i+=2){
        var filas=document.createElement("tr");
        var celdaths=document.createElement("td")
        txth=document.createTextNode(i);
        celdaths.appendChild(txth);
        filas.appendChild(celdaths);
        tbbody.appendChild(filas);
    }
    tablaa.appendChild(tbbody);
        par.appendChild(tablaa);
        tablaa.setAttribute("class","table table-dark");
        filas.setAttribute("class","table-active")
        
    document.write(`Los numeros impares del 102 al 200 son los siguientes: ${i} <br>`);
}

//Ejercicio #3 = •	Imprimir números pares en forma descendente hasta 2 que son menores o iguales a un número natural dado.
function acto(){
    var er= document.getElementById("num20").value
    var cua=document.getElementById("respu");
    var tabla=document.createElement("tabla");
    var tbody=document.createElement("tbody")
    var fila=document.createElement("tr");
    var celdath=document.createElement("th");
    txth=document.createTextNode("Numero");
    celdath.appendChild(txth);
    fila.appendChild(celdath);
    tbody.appendChild(fila);
    for(var i = er; i >= 2; i--){
        if(i % 2 === 0){
            var fila=document.createElement("tr");
            var celdath=document.createElement("th");
            txth=document.createTextNode(i);
            celdath.appendChild(txth);
            fila.appendChild(celdath);
            tbody.appendChild(fila);

            tabla.appendChild(tbody);
            cua.appendChild(tabla);
            tabla.setAttribute("class","table table-striped table-dark table-boderless");
            fila.setAttribute("class","table-active");
        }
    }
}

//Ejercicio #4


//Ejercicio #5 Buscar un número determinado en un arreglo y devolver su posición, si no se encuentra devolver “no se encuentra”
function araay(){
    let arreglo1 = []
    let num1=document.getElementById("num23").value
    for (let i = 1; i <= 20; i++){
        arreglo1.push(parseInt(Math.random()*(0-20)+20));
    }

    let arreglo3 = false 
     
    
    arreglo1.forEach(rt);
    if (arreglo3 ==false)
    document.getElementById('reser').innerHTML="<br>"+"["+arreglo1 +"]"+"<br>"+"El numero no se encuentra en el arreglo";
    function rt(dato, index, arreglo){
        if(dato == num1){
            document.getElementById("pos").innerHTML="<br>"+"["+ arreglo1 +"]"+"<br>"+"El numero se encuetra en la posición: "+index;
            arreglo3=true
    }
        else
        arreglo3=arreglo3
    }
}

//Ejercicio #6 Crear un arreglo e imprimirlo con la dimensión que asigne el usuario
function perde(){
    let arreglos = []
    let are=document.getElementById("num24").value;
    let ari= [];
    for(let p = 0; p<are; p++){
        arreglos.push(random(0-10)); 
    }

    document.getElementById("pue").innerHTML="<br>"+("El tamaño del arreglo ingresado es de: [ " +arreglos+ " ] ");
}

//Ejercicio #7 Contar elementos repetidos de un arreglo e imprimirlos.
function ejert(){
const erti  = document.getElementById("reco"[1, 2, 2, 3, 4, 4, 5, 5, 8, 8]);
let dupli = [];
 
const arete = [...dupli].sort();
 
for (let i = 0; i < arete.length; i++) {
  if (arete[i + 1] === arete[i]) {
    dupli.push(arete[i]);
  }
}

document.getElementById("eruy"+erti)
document.getElementById("eruy").innerHTML="<br> Los elementos que se repiten del arreglo son: "+arete;
}

//#Ejercicio #8 Convertir un número de sistema decimal a binario(mediante el uso de divisiones sucesivas)
function werever(){
    var deci=document.getElementById("decimal").value;
    deci=parseInt(deci);
    if(isNaN(deci)){
        alert("Ingrese un numero decimal");
        return; 
    }
    if (deci<0){
        alert("Para continuar el numero debe ser positivo")
        return;
    }
    if(deci === 0){
        document.getElementById("decimal").value ="0"
        return;
    }
    var bin="";
    while(deci>0){
        var resi=deci %2; 
        bin= resi + bin;
        deci = Math.floor(deci / 2);
    }
    document.getElementById("ejecutar").value=bin;
}

//Ejercicio #9  Convertir un binarios en decimal.
function helio(){
    var bin=document.getElementById("binario").value;
    if(!/^[01]+$/.test(bin)){
        alert("Ingrese un numero binario");
        return;
    }
    var deci = 0;
    for (var i = 0; i <bin.length; i++){
    var digimon = parseInt(bin.charAt(i));
    var pote =Math.pow(2, bin.length - i - 1);
    deci +=digimon * pote;
    }
    document.getElementById("ejecu").value = deci;
}

//Ejercicio #10 = •	Multiplicar 2 arreglos
function multiplicararreglos(){
    var multi1 = document.getElementById("mul1").value.split(",");
    var multi2 = document.getElementById("mul2").value.split(",");
    var multi3 = [];
    for(i = 0; i < multi1.length; i++){
        multi3.push(multi1[i] * multi2[i]);
    } 
    document.getElementById("lerw").value = multi3;
}


//Ejercicio #11  * Hallar producto punto entre dos arreglos
function produ(){
    const mane=document.getElementById("ara1").value.split(",").map(Number);
    const manoi=document.getElementById("ara2").value.split(",").map(Number);
    if(mane.length !== manoi.length){
        alert("Los arreglos debenet tener la misma cantidad")
        return;
    }
    let prod=0;
    for(let i = 0; i<mane.length; i++){
        prod +=mane[i] * manoi[i];
    }
        document.getElementById("prow").innerHTML=`El producto punto entre el arreglo #1 [${mane}] y el arreglo #2 {${manoi}} es ${prod}.`; 
    }



//Ejercicio #12  En el 2022 el país A tendrá una población de 25 millones de habitantes y el país B de 18,9 millones, las tasas de crecimiento anual de la población serán de 2% y 3% respectivamente desarrollar un algoritmo para informar en que año la población del país B superará a la de A.



//Ejercicio #13  Escribir un programa que muestre la suma de la serie (1*1)+(2*2)+(3*3)+(4*4)…(n*n) hasta que la suma sea menor al número digitado por el usuario. Debe mostrar la secuencia de manera ordenada.
function sumasecuencia(){
    var number1= document.getElementById("numer1").value;
    var number2 = 0;
    var number3 = 1;
    var number4 = "";
    while (number2<number1){
        var number5 = number3 * number3;
        number2 += number5;
        number4 += number5.toString()+ " + ";
        number3++;
    }
    number4 = number4.slice(0, -3);
    document.getElementById("number6").innerHTML = number4 + " = " + number2.toString();
}


//Ejercicio #14  Transforme el siguiente for: for (a = 0, b = 0; a &lt; 7; a++, b += 2){ console.log(a,b)} En su correspondiente con while.
function cambiar(){
    var a=0;
    var b=0;

    while(a<7){
        a++;
        b+=2;
    }
    document.getElementById("esae").value = a + "" + b;
}

//Ejercicio #15  Crear un arreglo con 100 números aleatorios, recórrelo y en el momento que encuentre un número primo detener el bucle imprimir el número y la posición. “crear botón para ejecutar el script”

