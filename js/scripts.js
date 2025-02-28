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
ctx.fillText("Universidad Autónoma de Aguascalientes", 425, 190); 
ctx.fillText("RECONOCIMIENTO", 425, 240);

let nombre = localStorage.getItem("nombre");
ctx.font = "25px raleway";
ctx.textAlign = "center";   
ctx.fillText(nombre, 425, 300);

ctx.strokeStyle = "red";
ctx.moveTo(150, 310);
ctx.lineTo(700, 310);
ctx.stroke();

let curso = localStorage.getItem("curso");
ctx.font = "20px raleway";
ctx.textAlign = "center";   
ctx.fillText("Por completar el curso: " + curso + " 2025", 425, 350);

ctx.font = "15px raleway";
ctx.textAlign = "center";   
ctx.fillText("Rector Clint Eastwood", 425, 520);