//Ejercicio 2

/*CONSIGNA
1- Calcular e informar un sueldo sabiendo que:
La categoria define el sueldo basico mensual 
(1: u$s 1000, 2: u$s 1500, 3: u$s 2000)
La subcategoria define el multiplicador 
(A: x1.5, B: x2, C: x2.5)
Ambos datos son ingresados por el usuario

3- Informar dentro de que rango esta el sueldo:
Rango inicial: entre u$s 1500 inclusive y u$s 3000 inclusive
Rango intermedio: entre u$s 3000 exclusive y u$s 4000 inclusive
Rango avanzado: si supera los u$s 4000*/

//Declaración de variables 
var categoria;
var subCategoria;
var sueldoBasicoMensual = 0;
var sueldo = 0;
var rango;


//-------------------- INGRESO DE DATOS -----------------------

/* Se solicita ingresar categoría. La categoria define el sueldo basico mensual 
(1: u$s 1000, 2: u$s 1500, 3: u$s 2000)*/
do {
    categoria = prompt("Ingrese categoria: 1 , 2 , 3");
} while (categoria!="1" && categoria!="2" && categoria!="3")

switch (categoria) {
    case "1":
        sueldoBasicoMensual = 1000;
        break;
    case "2":
        sueldoBasicoMensual = 1500;
        break;
    case "3":
        sueldoBasicoMensual = 2000;
        break;      
}


/* Se solicita ingresar subcategoría. La subcategoria define el multiplicador 
(A: x1.5, B: x2, C: x2.5)*/ 
do {
    subCategoria = prompt("Ingrese subCategoría: A, B, C");
} while (subCategoria!="A" && subCategoria!="B" && subCategoria!="C")

// Calcular e informar un sueldo
switch (subCategoria) {
    case "A":
        multiplicador = 1.5;
        break;
    case "B":
        multiplicador = 2;
        break;
    case "C":
        multiplicador = 2.5;
        break;      
}



//-------------------- CALCULAR E INFORMAR SUELDO -----------------------

sueldo = sueldoBasicoMensual * multiplicador;
alert("Su sueldo es de $: " + sueldo);




//-------------------- INFORMAR RANGO  -----------------------

// Informar dentro de que rango esta el sueldo:
// Rango inicial: entre u$s 1500 inclusive y u$s 3000 inclusive
if (sueldo >= 1500 && sueldo <= 3000) {
        rango = 'inicial';

//Rango intermedio: entre u$s 3000 exclusive y u$s 4000 inclusive
} else if (sueldo >= 3000 && sueldo <= 4000) {
        rango = 'intermedio';

//Rango avanzado: si supera los u$s 4000*/
} else if (sueldo >= 4000) {
     rango = 'avanzado';
}
     
alert("Su sueldo esta dentro del rango: " + rango);

