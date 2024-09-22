


//HAMBURGUER MENU
document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menu = document.querySelector('.menu');

    menuHamburguer.addEventListener('click', () => {
        menu.classList.toggle('active');
    });


    //FORMULARIO DE IMC
    const form = document.getElementById('imc-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const imc = (peso / (altura * altura)).toFixed(2);
        let categoria = '';

        if (imc < 18.5) {
            categoria = 'Baixo peso';
        } else if (imc < 24.9) {
            categoria = 'Peso normal';
        } else if (imc < 29.9) {
            categoria = 'Sobrepeso';
        } else {
            categoria = 'Obesidade';
        }

        document.getElementById('resultado-imc').innerText = `Seu IMC é ${imc} (${categoria})`;
    });
});
