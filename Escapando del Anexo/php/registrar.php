<?php
$conexion = mysqli_connect('localhost', 'root', '', 'escapando_del_anexo');

if ($conexion->connect_error) {
    die("Fallo la conexion al servidor, error: " . $conexion->connect_error);
}

if (isset($_POST['nickname']) && isset($_POST['email']) && isset($_POST['password'])) {
    if (strlen($_POST['nickname']) >= 2 && strlen($_POST['nickname']) <= 50 && strlen($_POST['email']) >= 10 && strlen($_POST['email']) <= 320 && strlen($_POST['password']) >= 6 && strlen($_POST['email']) <= 150) {
        $_POST["nickname"] = mysqli_real_escape_string($conexion, $_POST['nickname']);
        $_POST["email"] = mysqli_real_escape_string($conexion, $_POST['email']);
        $_POST["password"] = mysqli_real_escape_string($conexion, $_POST['password']);
        $sql = mysqli_query($conexion, "SELECT count(ID) as validar FROM usuarios WHERE EMAIL='{$_POST['email']}'");
        $validation = mysqli_fetch_array($sql)['validar'];
        if ($validation == 0) {
            $datasql = mysqli_query($conexion, "INSERT INTO `usuarios`(`EMAIL`, `PASSWORD`, `NICKNAME`) VALUES ('{$_POST['email']}','{$_POST['password']}','{$_POST['nickname']}')");
            header("location: ../iniciarSesion.php");
        }
    }
}
header("location: ../registrar.php");
