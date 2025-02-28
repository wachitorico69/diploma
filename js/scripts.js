function guardarDatos() {
    let nombre = document.getElementById("nombre").value;
    let curso = document.getElementById("curso").value;

    localStorage.setItem("nombre",nombre);
    localStorage.setItem("curso",curso);

    //ir al diploma después de guardar los datos
    window.location.href = "diploma.html"
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img1 = document.getElementById("uaa");
const img2 = document.getElementById("ccbas");
const img3 = document.getElementById("firma");

ctx.drawImage(img1, 50, 40, 111, 90);
ctx.drawImage(img2, 620, 35, 179, 100);
ctx.drawImage(img3, 320, 420, 223, 82);

ctx.font = "bold 30px raleway";
ctx.textAlign = "center";   
ctx.fillText("Universidad Autónoma de Aguascalientes", 425, 175); 
ctx.fillText("RECONOCIMIENTO", 425, 220);

let nombre = localStorage.getItem("nombre");
ctx.font = "25px raleway";
ctx.textAlign = "center";   
ctx.fillText(nombre, 425, 280);

ctx.strokeStyle = "red";
ctx.moveTo(150, 290);
ctx.lineTo(700, 290);
ctx.stroke();

let curso = localStorage.getItem("curso");
ctx.font = "20px raleway";
ctx.textAlign = "center";   
ctx.fillText("Por completar con sacrificio y orgullo el curso:", 425, 330);
ctx.fillText(curso, 425, 355);

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = today.getMonth();
var yyyy = today.getFullYear();

var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

ctx.font = "16px raleway";
ctx.textAlign = "center";  
today = dd + " de " + meses[mm] + " del " + yyyy;
ctx.fillText(today + " Aguascalientes, Ags.", 425, 390);

ctx.font = "15px raleway";
ctx.textAlign = "center";   
ctx.fillText("Rector Clint Eastwood", 425, 520);