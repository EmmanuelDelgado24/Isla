<?php
// Verificar si se enviaron datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $numeroEmpleado = $_POST["numeroEmpleado"];
    $contrasena = $_POST["contrasena"];

    // Realizar la validación de las credenciales (esto es un ejemplo, deberías mejorar la seguridad)
    if ($numeroEmpleado == "usuarioEjemplo" && $contrasena == "contrasenaEjemplo") {
        // Credenciales válidas, devolver un mensaje de éxito
        echo "Inicio de sesión exitoso";
    } else {
        // Credenciales incorrectas, devolver un mensaje de error
        echo "Credenciales incorrectas";
    }
}
?>
