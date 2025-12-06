// calendario

const botonCalendario = document.querySelectorAll('.botonCalendario');

const calendario = document.querySelector('.calendario');

botonCalendario.forEach(boton => {
    boton.addEventListener('click', () => {
        if(calendario.style.display == 'none') {
            
            calendario.style.display = 'flex';
        } else {
            
            calendario.style.display = 'none';
        }
    
})
})




// musica
const botonMusica = document.querySelector('.botonMusica');

const musica = document.querySelector('.musica');

botonMusica.addEventListener('click', () => {
    if(musica.style.display == 'none') {
        console.log(frame);
        musica.style.display = 'flex';
    } else {
        console.log(frame);
        musica.style.display = 'none';
    }
    
})

// calculadora
const botonCalculadora = document.querySelector('.botonCalculadora');

const calculadora = document.querySelector('.calculadora');

botonCalculadora.addEventListener('click', () => {
    if(calculadora.style.display == 'none') {
        console.log(frame);
        calculadora.style.display = 'flex';
    } else {
        console.log(frame);
        calculadora.style.display = 'none';
    }
    
})