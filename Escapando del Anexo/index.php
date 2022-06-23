<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap/bootstrap.css">
    <title>Escapando Del Anexo</title>
    <style>
        body {
            width: 100%;
            height: 100%;
            background: rgb(59, 59, 59);
            margin: 0;
            padding: 0;
        }

        .kineticjs-content {
            display: block;
        }

        .juego_principal {
            display: flex;
            justify-content: center;
        }

        .menu {
            width: 1000px;
            height: 500px;
        }

        .botones {
            width: 450px;
            height: 50px;
            cursor: pointer;
            margin-top: 10px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }

        .iniciar_juego {
            background-image: url('sprites/menu/BUTTON.png');
        }

        .iniciar_juego:hover {
            background-image: url('sprites/menu/BUTTON2.png');
        }

        #regresar {
            background-image: url('sprites/menu/regresar.png');
        }

        #regresar:hover {
            background-image: url('sprites/menu/regresar2.png');
        }

        #dif1 {
            background-image: url('sprites/menu/btn_dif1_part1.png');
        }

        #dif1:hover {
            background-image: url('sprites/menu/btn_dif1_part2.png');
        }

        #dif2 {
            background-image: url('sprites/menu/btn_dif2_part1.png');
        }

        #dif2:hover {
            background-image: url('sprites/menu/btn_dif2_part2.png');
        }

        #dif3 {
            background-image: url('sprites/menu/btn_dif3_part1.png');
        }

        #dif3:hover {
            background-image: url('sprites/menu/btn_dif3_part2.png');
        }

        #dif4 {
            background-image: url('sprites/menu/btn_dif4_part1.png');
        }

        #dif4:hover {
            background-image: url('sprites/menu/btn_dif4_part2.png');
        }

        #dif5 {
            background-image: url('sprites/menu/btn_dif5_part1.png');
        }

        #dif5:hover {
            background-image: url('sprites/menu/btn_dif5_part2.png');
        }

        .iniciar_sesion {
            width: 1000px;
            margin-left: calc((100vw - 1000px)/2);
        }

        .usuario {
            width: 1000px;
            margin-left: calc((100vw - 1000px)/2);
            color: white;
            font-weight: bold;
        }

        .anuncio1 {
            width: 98vw;
            height: 20vh;
        }
    </style>
</head>

<body>
    <img src="" alt="">
    <div class="juego_principal">
        <div id="inicio" class="container menu" style="background-image: url('sprites/menu/background.png');">
            <div class="row" style="text-align: center;">
                <div class="col"><img src="sprites/menu/logo.jpg" style="padding-top: 20px; width: 450px; height: 300px;"></div>
            </div>
            <div class="row">
                <div class="col" style="display: flex; justify-content: center;">
                    <div class="iniciar_juego botones" onclick="dificultades()"></div>
                </div>
            </div>
        </div>
        <div id="dificultades" class="container menu" style="background-image: url('sprites/menu/background.png'); display: none;">
            <div class="row">
                <div class="col" style="display: flex; justify-content: center;">
                    <div id="dif1" class="botones" onclick="elegir_dificultad(1)"></div>
                </div>
            </div>
            <div class="row">
                <div class="col" style="display: flex; justify-content: center;">
                    <div id="dif2" class="botones" onclick="elegir_dificultad(2)"></div>
                </div>
            </div>
            <div class="row">
                <div class="col" style="display: flex; justify-content: center;">
                    <div id="dif3" class="botones" onclick="elegir_dificultad(3)"></div>
                </div>
            </div>
            <div class="row">
                <div class="col" style="display: flex; justify-content: center;">
                    <div id="dif4" class="botones" onclick="elegir_dificultad(4)"></div>
                </div>
            </div>
            <div class="row">
                <div class="col" style="display: flex; justify-content: center;">
                    <div id="dif5" class="botones" onclick="elegir_dificultad(5)"></div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col" style="display: flex; justify-content: center;">
                    <div id="regresar" class="botones" onclick="regresar()"></div>
                </div>
            </div>

        </div>
        <div id="juego" style="display: none;"></div>
    </div>
    <br>
    <?php

    if (!isset($_SESSION['condition'])) {
        echo "<a href=\"iniciarSesion.php\" class='btn btn-warning btn-block iniciar_sesion'>Iniciar Sesion</a>";
    } else {
        echo "<div class='usuario'>Bienvenid@ " . $_SESSION['nickname'] . "</div>
        <a href=\"php/cerrarSesion.php\" class='btn btn-danger btn-block iniciar_sesion'>Cerrar Sesion</a>";
    }
    ?>

    <img src="anuncios/1.jpg" class="anuncio1" alt="">


    <script src="js/jquery-1.11.1.min.js"></script>
    <script src="js/kinetic-v4.3.3.min.js"></script>
    <script src="js/portal.js"></script>
    <script src="js/ciertoser.js"></script>
    <script src="js/enemigos.js"></script>
    <script src="js/vida.js"></script>
    <script src="js/energia.js"></script>
    <script src="js/suelo.js"></script>
    <script src="js/game.js"></script>
    <script src="js/main.js"></script>
</body>

</html>

<script>
    function regresar() {
        document.querySelector('#dificultades').style.display = 'none';
        document.querySelector('#inicio').style.display = 'block';
    }

    function dificultades() {
        document.querySelector('#inicio').style.display = 'none';
        document.querySelector('#dificultades').style.display = 'block';
    }

    function elegir_dificultad(dif) {
        document.querySelector('#dificultades').style.display = 'none';
        document.querySelector('#juego').style.display = 'block';
        seleccionar_dificultad(dif);
        niveluno();
    }
    window.addEventListener("keydown", function(e) {
        if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);
</script>