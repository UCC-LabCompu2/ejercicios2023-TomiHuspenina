/**
 * Descripción: permite convertir entre metros, yardas, pies y pulgadas
 * @method conversorUnidades
 * @param {string} id - Id del input del formulario
 * @param {string} valor - Valor ingresado por el usuario
 */

let conversorUnidades = (id, valor) => {

    //creacion de valores
let met, pul, pie, yar;

if(isNaN(valor)){
    
    met = " ";
    pul = " ";
    pie = " ";
    yar = " ";

    alert("el valor ingresado no es un numero");

}else  if(id==="metro"){
    //conversor de metros
    met = valor;
    yar = 1.09361*valor;
    pie = 3.28084*valor;
    pul = 39.3701*valor;

} else if (id==="pulgada") {
    //conversor de pulgadas
    pul = valor;
    met = valor * 0.0254;
    pie = valor * 0.08333;
    yar = valor * 0.027778;

} else if (id==="pie") {
    //conversor de pies
    pie = valor;
    met = valor * 0.3048;
    pul = valor * 12;
    yar = valor * 0.333333;

} else if (id==="yarda") {
    //conversor de yarda
    yar = valor;
    met = valor * 0.9144;
    pul = valor * 36;
    pie = valor * 3;

}

//asignacion de los valores 
document.lasUnidades.unid_metro.value = met;
document.lasUnidades.unid_yarda.value = yar;
document.lasUnidades.unid_pie.value = pie;
document.lasUnidades.unid_pulgada.value = pul;
  
}

/**
 * Descripción: permite convertir grados a radianes y viceversa
 * @method convertirGR
 * @param {string} id - Id del input del formulario
 * @param {string} valor - Valor ingresado por el usuario
 */

let convertirGR = (id) =>{
    let gr, rad;
    if(id==="grados"){
        gr = document.getElementById("grados").value;
        rad = (gr*Math.PI)/180 ;
    }else{
        rad = document.getElementById("radianes").value;
        gr = rad*180/Math.PI;
    }

    document.getElementById("radianes").value = rad ;
    document.getElementById("grados").value = gr;
}

/**
 * Descripción: permite visualizar u ocultar un div de la pagina
 * @method mostrar_ocultar
 * @param {string} valor - Valor asociado a un radio button del html
 */

let mostrar_ocultar=(valor) => {
    if(valor==="val_mostrar"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }else{
        document.getElementsByName("unDiv")[0].style.display= 'none';
    }
}

/**
 * Descripción: suma dos valores ingresados por el usuario
 * @method sumar
 */

let sumar = () => {
    let num1, num2, res;
    num1=document.getElementById("nums1").value;
    num2=document.getElementById("nums2").value;

    res=Number(num1)+Number(num2);

    document.getElementById("totalS").value= res;    
}