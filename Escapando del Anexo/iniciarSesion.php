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
    <form action="php/login.php" method="POST">
        <label style="font-size: 20px;"><b>Iniciar Sesion</b></label>
        <br>
        <label><b>Correo</b></label>
        <input type="email" name="email" id="email" class="form-control" placeholder="Correo" minlength="10" maxlength="320">
        <br>
        <label><b>Contraseña</b></label>
        <input type="password" name="password" id="password" class="form-control" placeholder="******" minlength="6" maxlength="150">
        <br>
        <input type="submit" class="btn btn-warning btn-block" value="Iniciar Sesion" style="color: black;">
        <br>
        <a href="registrar.php" class="btn btn-secondary btn-block">Crear Cuenta</a>
    </form>
    <br>
    <img src="anuncios/1.jpg" class="anuncio1" alt="">
</body>

</html>