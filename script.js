function actualizarContador() {
    const fechaActual = new Date();
    const proximoAnio = new Date(fechaActual.getFullYear() + 1, 0, 1, 0, 0, 0);
    const tiempoRestante = proximoAnio - fechaActual;

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = String(dias).padStart(2, "0");
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarContador(); // Llamar inicialmente para evitar un segundo de retraso.
    setInterval(actualizarContador, 1000);
});
