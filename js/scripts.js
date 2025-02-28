function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("curso").value;

    window.location.href = "diploma.html"
}