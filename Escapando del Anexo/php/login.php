<?php
$conexion = mysqli_connect('localhost', 'root', '', 'escapando_del_anexo');

if ($conexion->connect_error) {
    die("Fallo la conexion al servidor, error: " . $conexion->connect_error);
}

if (isset($_POST['email']) && isset($_POST['password'])) {
    if (strlen($_POST['email']) >= 10 && strlen($_POST['email']) <= 320 && strlen($_POST['password']) >= 6 && strlen($_POST['email']) <= 150) {
        $_POST["email"] = mysqli_real_escape_string($conexion, $_POST['email']);
        $_POST["password"] = mysqli_real_escape_string($conexion, $_POST['password']);
        $sql = mysqli_query($conexion, "SELECT count(ID) as validar FROM usuarios WHERE EMAIL='{$_POST['email']}' AND PASSWORD='{$_POST['password']}'");
        $validation = mysqli_fetch_array($sql)['validar'];
        if ($validation == 1) {
            $datasql = mysqli_query($conexion, "SELECT ID,NICKNAME FROM usuarios WHERE EMAIL='{$_POST['email']}' AND PASSWORD='{$_POST['password']}'");
            $data = mysqli_fetch_assoc($datasql);
            session_start();
            $_SESSION['condition'] = TRUE;
            $_SESSION['id'] = $data['ID'];
            $_SESSION['nickname'] = $data['NICKNAME'];
            header("location: ../index.php");
        }
    }
}
header("location: ../iniciarSesion.php");
