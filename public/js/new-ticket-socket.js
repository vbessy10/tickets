// comando para establecer la conexion
var socket = io();
let lblNuevoTicket = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('conectado');
});

socket.on('disconnect', function() {
    console.log('desconectado');
});

socket.on('estadoActual', function(estado) {
    console.log(estado);
    lblNuevoTicket.text(estado.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(sigTicket) {
        console.log('Respuesta servidor:', sigTicket);
        lblNuevoTicket.text(sigTicket);
    });

});