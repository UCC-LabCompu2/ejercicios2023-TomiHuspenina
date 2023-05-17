/**
 * Descripción: permite convertir entre metros, yardas, pies y pulgadas
 * @method conversorUnidades
 * @param {string} id - Id del input del formulario
 * @param {string} valor - Valor ingresado por el usuario
 */
function conversorUnidades(id, valor){

let met, pul, pie, yar;

if(isNaN(valor)){
    
    met = " ";
    pul = " ";
    pie = " ";
    yar = " ";

    alert("el valor ingresado no es un numero");

}else  if(id=="metro"){
    
    met = valor;
    yar = 1.09361*valor;
    pie = 3.28084*valor;
    pul = 39.3701*valor;

} else if (id== "pulgada") {

    pul = valor;
    met = valor * 0.0254;
    pie = valor * 0.08333;
    yar = valor * 0.027778;

} else if (id== "pie") {

    pie = valor;
    met = valor * 0.3048;
    pul = valor * 12;
    yar = valor * 0.333333;

} else if (id== "yarda") {

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

function convertirGR(id){
    if(id=="grados"){
        let gr = document.getElementById("grados").value;
        document.getElementById("radianes").value = (gr*Math.PI)/180 ;
    }else{
        let rad = document.getElementById("radianes").value;
        document.getElementById("grados").value = rad*180/Math.PI;
    }
}