function iniciarSesion() {
    // Obtener los datos del formulario
    var numeroEmpleado = document.getElementsByName("numeroEmpleado")[0].value;
    var contrasena = document.getElementsByName("contrasena")[0].value;

    // Crear un objeto FormData para enviar los datos del formulario
    var formData = new FormData();
    formData.append("numeroEmpleado", numeroEmpleado);
    formData.append("contrasena", contrasena);

    // Realizar la petición AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "procesar_login.php", true);

    // Configurar la función de respuesta
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Manejar la respuesta del servidor
            document.getElementById("mensajeRespuesta").innerHTML = xhr.responseText;
        }
    };

    // Enviar la solicitud con los datos del formulario
    xhr.send(formData);
}




