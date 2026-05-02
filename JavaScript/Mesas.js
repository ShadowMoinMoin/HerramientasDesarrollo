const mesas = document.querySelectorAll('.mesa');
const personasSelect = document.getElementById('personas');
const confirmarBtn = document.getElementById('confirmar');

let mesaSeleccionada = null;

// Seleccionar mesa
mesas.forEach(mesa => {
    mesa.addEventListener('click', () => {

        if (mesa.classList.contains('ocupada') || mesa.classList.contains('reservada')) {
            return;
        }

        // Validar capacidad
        const personas = parseInt(personasSelect.value);
        const capacidad = parseInt(mesa.dataset.capacidad);

        if (capacidad < personas) {
            alert("Esta mesa no tiene suficiente capacidad");
            return;
        }

        // Limpiar selección anterior
        mesas.forEach(m => m.classList.remove('seleccionada'));

        mesa.classList.add('seleccionada');
        mesaSeleccionada = mesa.dataset.id;
    });
});

// Confirmar reserva (frontend demo)
confirmarBtn.addEventListener('click', () => {
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    if (!fecha || !hora || !mesaSeleccionada) {
        alert("Completa todos los campos");
        return;
    }

    alert(`Reserva confirmada 🎉\nMesa: ${mesaSeleccionada}\nFecha: ${fecha}\nHora: ${hora}`);
});