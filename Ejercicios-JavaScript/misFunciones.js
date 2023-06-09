/**
 * Descripción: permite convertir entre metros, yardas, pies y pulgadas
 * @method conversorUnidades
 * @param {string} id - Id del input del formulario
 * @param {string} valor - Valor ingresado por el usuario
 */

let conversorUnidades = (id, valor) => {

    //creacion de valores
let met, pul, pie, yar;

if(valor.includes(",")){
   valor = valor.replace(".");
}

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
document.lasUnidades.unid_metro.value = math.round (met*100)/100;
document.lasUnidades.unid_yarda.value = math.round (yar*100)/100;
document.lasUnidades.unid_pie.value = pie.toFixed(2);
document.lasUnidades.unid_pulgada.value = pul.toFixed(2);
  
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

    document.getElementById("totalS").innerHTML= res;    
}



let generarUrl = () =>{
    const dist = document.getElementById("distancia").value;
    const unid = document.getElementsByName("unidades")[0].value;

    console.log(dist);
    console.log(unid);

    const urlComp = 'segundaWeb.html#${dist]#${unid}';

    window.open(urlComp, "_self");
}


let cargarValores = () =>{
    let urlCompleta = window.location.href;
    urlCompleta = urlCompleta.split("#");
    
    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value='${distancia} ${unidad}';
}



let guardarDatosLS = () =>{
    const dist = document.getElementById("distancia").value;
    const unid = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", unid);
    window.open("segudnaWeb1.html")
}


let tomarDatosLS = () =>{
    const cant = localStorage.getItem("distanciaLS");
    const unid = localStorage.getItem("unidadLS");

    document.getElementById("dist").value='${distancia} ${unidad}';
}




let dibujarCirculoCuadrado = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax=canvas.Width;
    const alturaMax=canvas.Height;

    ctx.beginPath();
    ctx.fillStyle= "#851414";
    ctx.arc(anchoMax/2, alturaMax/2, 100, 0, 2*Math.PI);  
    ctx.stroke();
    ctx.fill()
    ctx.closePath();

    const margen = 8;
    ctx.beginPath();
    ctx.fillStyle= "#1b73";
    ctx.arc(0+margen, alturaMax-100-margen, 150, 100);  
    ctx.fill()
    ctx.stroke();
    ctx.closePath();
}



let dibujarCuadriculado = () =>{
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const anchoMax = canvas.Width;
const alturaMax = canvas.Height;
const paso=20;


//lineas verticales
for(let i=paso; i<anchoMax; i+=paso){
ctx.beginPath();

ctx.moveTo(i, 0);
ctx.lineTo(i, alturaMax);
ctx.strokeStyle = '#333';
ctx.stroke();
ctx.font="10px, Arial";
ctx,fillStyle = "blue";
ctx.fillText(ejeY, i, alturaMax/2);
ejeY++;

ctx.closePath();
}


//lineas horizontales
for(let i=paso; i<alturaMax; i+=paso){
    ctx.beginPath();
    
    ctx.moveTo(0, i);
    ctx.lineTo(anchoMax, i);
    ctx.strokeStyle = '#333';
    ctx.stroke();
    ctx.font="10px, Arial";
    ctx,fillStyle = "blue";
    ctx.fillText(ejeX, i, alturaMax/2);
    ejeX++;
    
    ctx.closePath();
}


//eje x
ctx.beginPath();
ctx.moveTo(0, alturaMax/2);
ctx.lineTo(anchoMax, alturaMax/2);
ctx.strokeStyle = '#333';
ctx.stroke();
ctx.closePath();

//eje y
ctx.beginPath();
ctx.moveTo(anchoMax/2, 0);
ctx.lineTo(anchoMax/2, alturaMax);
ctx.strokeStyle = '#333';
ctx.stroke();
ctx.closePath();

console.log();

}



let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.Width = canvas.Width;
    console.log(posX, posY);

    if(posX<0 || posY<0 || posX>canvas.Width || posY>canvas.Height){
        abrirDialog();
    }else{
        let img;
    img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
       ctx.drawImage(img, posX, posY); 
    }
    }
}

var x = 0;
var dx = 5;

let animarAuto = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
       ctx.drawImage(img, x, 100); 
    }
    x += dx;

    if(x>=canvas.width){
        x=0;
    }
        
}

let abrirDialog = () =>{
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

let cerrarDialog = () =>{
    const dialog = document.getElementById("myDialog");
    dialog.close();
}





var x = 0;
var dx = 5;

let animarNuevoRequest = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
       ctx.drawImage(img, x, 100); 
       requestAnimationFrame(animarNuevoRequest);
    }
    x += dx;

    if(x>=canvas.width){
        x=0;
    }
        
}

let animarNuevo = () =>{
    requestAnimationFrame(animarNuevoRequest);
}
