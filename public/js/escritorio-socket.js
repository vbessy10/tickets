// comando para establecer la conexion
var socket = io();
var searchParams = new URLSearchParams(window.location.search);
var small = $('small');

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        if (resp === 'No hay tickets') {
            small.text(resp);
            alert(resp);
            return;
        }
        small.text('Ticket  ' + resp.numero);
    });
})

// socket.on('connect', function() {
//     console.log('conectado');
// });

// socket.on('disconnect', function() {
//     console.log('desconectado');
// });