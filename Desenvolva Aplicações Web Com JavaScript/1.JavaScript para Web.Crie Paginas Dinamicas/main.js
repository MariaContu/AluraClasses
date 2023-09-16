function tocaSom(som) {
    document.querySelector(som).play();    
}

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function()    {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code=="Enter" || evento.code=="Space") {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function()  {
        tecla.classList.remove('ativa')
    }

}