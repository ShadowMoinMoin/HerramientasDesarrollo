document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll('.tabs button');
    const items = document.querySelectorAll('.gallery .item');
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const categoria = boton.dataset.categoria.toLowerCase();
            botones.forEach(b => b.classList.remove('active'));
            boton.classList.add('active');
            items.forEach(item => {
                if (categoria === 'todos' || item.classList.contains(categoria)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

const botonesAgregar = document.querySelectorAll('.agregar-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const totalElemento = document.getElementById('total');
let carrito = [];
let total = 0;
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
        const nombre = boton.getAttribute('data-nombre');
        const precio = parseFloat(boton.getAttribute('data-precio'));
        carrito.push({ nombre, precio });
        total += precio;
        actualizarCarrito();
    })
})
function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - S/ ${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });
    totalElemento.textContent = `Total: S/ ${total.toFixed(2)}`;
}
const abrirCarrito = document.getElementById("abrir-carrito");
const panelCarrito = document.getElementById("carrito-panel");
const cerrarPanel = document.querySelector(".cerrar-panel");
abrirCarrito.addEventListener("click", function (e) {
    e.preventDefault();
    panelCarrito.classList.toggle("oculto");
});
cerrarPanel.addEventListener("click", function () {
    panelCarrito.classList.add("oculto");
});
window.addEventListener("click", function (e) {
    if (!panelCarrito.contains(e.target) && !abrirCarrito.contains(e.target)) {
        panelCarrito.classList.add("oculto");
    }
});