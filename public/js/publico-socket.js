// comando para establecer la conexion
var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('connect', function() {
    console.log('conectado');
});

socket.on('disconnect', function() {
    console.log('desconectado');
});


socket.on('estadoActual', function(data) {
    console.log(data);
    actualizaHTML(data.ultimosCuatro);
});

socket.on('ultimosCuatro', function(data) {
    actualizaHTML(data.ultimosCuatro);

    var audio = new Audio('audio/new-ticket.mp3');
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise
            .then(_ => {
                // Automatic playback started!
                // Show playing UI.
            })
            .catch(error => {
                // Auto-play was prevented
                // Show paused UI.
                console.log('Error con la reproducción.');
            });
    }
});

function actualizaHTML(ultimosCuatro) {
    for (let i = 0; i < ultimosCuatro.length; i++) {
        lblTickets[i].text('Ticket ' + ultimosCuatro[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimosCuatro[i].escritorio);
    }
}