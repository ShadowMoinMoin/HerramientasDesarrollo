const mesas = document.querySelectorAll('.mesa');
const personasSelect = document.getElementById('personas');
const confirmarBtn = document.getElementById('confirmar');

let mesaSeleccionada = null;

mesas.forEach(mesa => {
    mesa.addEventListener('click', () => {

        if (mesa.classList.contains('ocupada') || mesa.classList.contains('reservada')) {
            return;
        }

        const personas = parseInt(personasSelect.value);
        const capacidad = parseInt(mesa.dataset.capacidad);

        if (capacidad < personas) {
            alert("Esta mesa no tiene suficiente capacidad");
            return;
        }

        mesas.forEach(m => m.classList.remove('seleccionada'));

        mesa.classList.add('seleccionada');
        mesaSeleccionada = mesa.dataset.id;
    });
});

confirmarBtn.addEventListener('click', () => {
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    if (!fecha || !hora || !mesaSeleccionada) {
        alert("Completa todos los campos");
        return;
    }

    alert(`Reserva confirmada 🎉\nMesa: ${mesaSeleccionada}\nFecha: ${fecha}\nHora: ${hora}`);
});