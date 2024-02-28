// login.js

$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        console.log('Username:', username);
        console.log('Password:', password);

        if (username === 'usuario' && password === 'contraseña') {
            console.log('Redirigiendo a index.html');
            window.location.href = 'index.html';
        } else {
            console.log('Nombre de usuario o contraseña incorrectos');
            alert('Nombre de usuario o contraseña incorrectos');
        }
    });
});
