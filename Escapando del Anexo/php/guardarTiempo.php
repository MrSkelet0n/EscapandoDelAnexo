<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
    if (isset($_SESSION['condition'])) {
        $conexion = mysqli_connect('localhost', 'root', '', 'escapando_del_anexo');

        if ($conexion->connect_error) {
            die("Fallo la conexion al servidor, error: " . $conexion->connect_error);
        }
        $tiempo = $_POST['tiempo'] / 60;
        mysqli_query($conexion, "INSERT INTO `tiempos` (`ID_USUARIO`, `DIFICULTAD`, `NIVEL`, `TIEMPO`, `VERSION`) VALUES ('{$_SESSION['id']}', '{$_POST['dif']}', '{$_POST['nivel']}', '{$tiempo}', '1')");
    }
}
