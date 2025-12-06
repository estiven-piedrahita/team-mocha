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
const botonMusica = document.querySelectorAll('.botonMusica');

const musica = document.querySelector('.musica');

botonMusica.forEach( boton => {
boton.addEventListener('click', () => {
    if(musica.style.display == 'none') {

        musica.style.display = 'flex';
    } else {

        musica.style.display = 'none';
    }
    
})
})

// calculadora
const botonCalculadora = document.querySelector('.botonCalculadora');

const calculadora = document.querySelector('.calculadora');

botonCalculadora.addEventListener('click', () => {
    if(calculadora.style.display == 'none') {
        calculadora.style.display = 'flex';
    } else {
        calculadora.style.display = 'none';
    }
    
})