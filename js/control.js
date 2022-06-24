function comprueba(comp) {
    let id = comp.id;
    document.getElementById('pkmn').src = '../img/pcolor.jpg';
    if (id == 'op4') {
        document.getElementById('mnsj').innerHTML = 'Felicitaciones, has seleccionado la opción correcta';
        document.getElementById('ttl').className = 'correcta';
    } else {
        document.getElementById('mnsj').innerHTML = 'Pokémon incorrecto, la respuesta es: excadrill';
        document.getElementById('ttl').className = 'incorrecta';
    }
}

function reiniciar() {
    document.getElementById('mnsj').innerHTML = '';
    document.getElementById('pkmn').src = '../img/pnegro.jpg';
    document.getElementById('ttl').className = 'reinicie';
}