const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    alert("Mensaje enviado correctamente");

    form.reset();
});