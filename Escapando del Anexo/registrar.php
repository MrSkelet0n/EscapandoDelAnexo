<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
    if (isset($_SESSION['condition'])) {
        header("location: index.php");
    }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap/bootstrap.css">
    <script src="js/jquery-1.11.1.min.js"></script>
    <title>Login</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            background: rgb(59, 59, 59);
        }

        form {
            margin-top: 5vh;
        }

        form {
            width: 500px;
        }

        .crearcuenta {
            width: 500px;
            text-align: center;
        }

        label {
            color: white;
        }

        .anuncio1 {
            position: absolute;
            bottom: 0;
            width: 80vw;
            height: 20vh;
        }
    </style>
</head>

<body>
    <form action="php/registrar.php" method="POST">
        <label style="font-size: 20px;"><b>Crear Cuenta</b></label>
        <br>
        <label><b>Nickname</b></label>
        <input type="text" name="nickname" class="form-control" placeholder="Nickname" minlength="2" maxlength="50">
        <br>
        <label><b>Correo</b></label>
        <input type="email" name="email" class="form-control" placeholder="Correo" minlength="10" maxlength="320">
        <br>
        <label><b>Contraseña</b></label>
        <input type="password" name="password" class="form-control" placeholder="******" minlength="6" maxlength="150">
        <br>
        <input type="submit" class="btn btn-warning btn-block" value="Crear Cuenta" style="color: black;">
        <br>
        <a href="iniciarSesion.php" class="btn btn-secondary btn-block">Iniciar Sesion</a>
    </form>
    <br>
    <img src="anuncios/1.jpg" class="anuncio1" alt="">
</body>

</html>