function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("curso").value;

    window.location.href = "diploma.html"
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img1 = document.getElementById("uaa");
const img2 = document.getElementById("ccbas");
const img3 = document.getElementById("firma");

ctx.drawImage(img1, 80, 10, 160, 155);
ctx.drawImage(img2, 600, -10, 315, 190);