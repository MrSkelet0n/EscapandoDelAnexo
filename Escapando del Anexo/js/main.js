var frames_ciertoser = {
    estatico: [{
        x: 2,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 285,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 568,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 851,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 1134,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 1417,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 1700,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 1983,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 2266,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 1983,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 1700,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 1417,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 1134,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 851,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 568,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 285,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 2547,
        y: 0,
        width: 280,
        height: 484
    }, {
        x: 0,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 281,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 562,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 843,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 1124,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 1405,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 1686,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 1967,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 2248,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 1967,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 1686,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 1405,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 1124,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 843,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 562,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 281,
        y: 484,
        width: 280,
        height: 473
    }, {
        x: 2547,
        y: 0,
        width: 280,
        height: 484
    }],
    caminar: [{
        x: 1686,
        y: 0,
        width: 280,
        height: 475
    }],
    atacar: [{
        x: 843,
        y: 0,
        width: 280,
        height: 475
    }],
    atacado: [{
        x: 1686,
        y: 0,
        width: 280,
        height: 475
    }]
};


var stage;
stage = new Kinetic.Stage({
    container: 'juego',
    width: 1000,
    height: 500
});

var juego = new Game();


//Capas
var Capa_fondo;

//grupos
var grupoAssets;
var keyboard = {};
var yasabenquien;
var yasabenquien_vida, yasabenquien_energia, cronometro = 0;

//intervalos
var intervalo, tiempo_damage, tiempo_energia, cancelar_animacion;

//sprites
var img_ciertoser = new Image();
img_ciertoser.src = 'sprites/player/sprites_player.png';

var img_enemigo = new Image();
img_enemigo.src = 'sprites/guard1/static.png';

var img_fondo = new Image();
img_fondo.src = 'sprites/tilset/suelo.png';

var img_portal = new Image();
img_portal.src = 'sprites/portal/portal.png';



//Audio
var sound_atack = new Audio();
sound_atack.src = 'sounds/atack1.mp3';

var sound_fondo = new Audio();
sound_fondo.src = 'sounds/fondo.mp3';
sound_fondo.volume = 0.1;

grupoAssets = new Kinetic.Group({
    x: 0,
    y: 0
});
var texto_vida = new Kinetic.Text({
    x: 20,
    y: 10,
    text: '100',
    fontSize: 20,
    fontFamily: 'Calibri',
    fill: 'white'
});

var texto_energia = new Kinetic.Text({
    x: 20,
    y: 31,
    text: '100',
    fontSize: 20,
    fontFamily: 'Calibri',
    fill: 'red'
});

var texto_cronometro = new Kinetic.Text({
    x: (stage.getWidth() / 8) * 7,
    y: 31,
    text: '0',
    fontSize: 20,
    fontFamily: 'Calibri',
    fill: 'white'
});

function seleccionar_dificultad(dif) {
    juego.dificultad = dif;
}

function niveluno() {
    Capa_fondo = new Kinetic.Layer();


    //Suelo
    juego_suelo = new Suelo(stage.getWidth(), stage.getHeight(), img_fondo);

    //Enemigos
    grupoAssets.add(new Portal(3500, 100, img_portal));
    grupoAssets.add(new Enemigo(500, (stage.getHeight() / 4) + 1, img_enemigo));
    grupoAssets.add(new Enemigo(800, (stage.getHeight() / 4) * 2 + 1, img_enemigo));

    //Ya Saben Quien
    yasabenquien = new CiertoSer(sound_atack, img_ciertoser, frames_ciertoser);
    yasabenquien.setX(yasabenquien.getWidth());
    yasabenquien.setY(juego_suelo.getY() + yasabenquien.getHeight());
    yasabenquien.limiteDer = 3000;
    yasabenquien.limiteTop = (stage.getHeight() / 4) - yasabenquien.hitboxY;
    yasabenquien.limiteBot = stage.getHeight();
    grupoAssets.add(yasabenquien);
    console.log(frames_ciertoser);
    //Ya Saben Quien Valores
    yasabenquien_vida = new Vida();
    yasabenquien_energia = new Energia();

    Capa_fondo.add(juego_suelo);
    Capa_fondo.add(grupoAssets);
    Capa_fondo.add(yasabenquien_vida);
    Capa_fondo.add(yasabenquien_energia);
    Capa_fondo.add(texto_vida);
    Capa_fondo.add(texto_energia);
    Capa_fondo.add(texto_cronometro);
    yasabenquien.start();
    stage.add(Capa_fondo);

    sound_fondo.play();
    sound_fondo.loop = true;

    intervalo = setInterval(frameloop, 1000 / 60);
}

function moverCiertoser() {
    if (yasabenquien.getAnimation() != 'caminar' && (keyboard[37] || keyboard[38] || keyboard[39] || keyboard[40]) && !yasabenquien.atacando) {
        yasabenquien.setAnimation("caminar");
    } else if (!(keyboard[37] || keyboard[38] || keyboard[39] || keyboard[40]) && !yasabenquien.atacando && yasabenquien.getAnimation() != 'estatico') {
        yasabenquien.setAnimation("estatico");
    }

    if (keyboard[32] && yasabenquien.energia_total == 100) {
        yasabenquien.atacar();
        yasabenquien.energia_total = 0;
        cancelar_animacion = setTimeout(function () {
            yasabenquien.atacando = false;
        }, 300);
    }
    if (!yasabenquien.atacando) {
        if (keyboard[37]) {
            yasabenquien.direccion = false;
            yasabenquien.izquierda();
        }
        if (keyboard[39]) {
            yasabenquien.direccion = true;
            yasabenquien.derecha();
        }
        if (keyboard[38]) {
            yasabenquien.arriba();
        }
        if (keyboard[40]) {
            yasabenquien.abajo();
        }
        if (keyboard[67]) {
            yasabenquien.vx = yasabenquien.correr + 5;
        } else {
            yasabenquien.vx = yasabenquien.correr;
        }
    }
}


function addKeyboardEvents() {
    addEvent(document, "keydown", function (e) {
        keyboard[e.keyCode] = true;
    });
    addEvent(document, "keyup", function (e) {
        keyboard[e.keyCode] = false;
    });

    function addEvent(elemento, eventname, funcion) {
        if (elemento.addEventListener) {
            elemento.addEventListener(eventname, funcion, false);
        } else if (elemento.attachEvent) {
            elemento.attachEvent(eventname, funcion);
        }
    }
}

function hit(a, b) {
    var hit = false;

    if (!(b.getX() > a.getX() + a.getWidth() || b.getX() + b.getWidth() < a.getX() || b.getY() > a.getY() + a.getHeight() || b.getY() + b.getHeight() < a.getY())) {
        hit = true;
    }
    return hit;
}
function camara() {
    if (yasabenquien.getX() > (stage.getWidth() / 4) * 3 && keyboard[39] && (juego_suelo.getX() * (-1)) < yasabenquien.limiteDer) {
        for (i in grupoAssets.children) {
            var enemigo = grupoAssets.children[i];
            enemigo.move(-(yasabenquien.vx), 0);
        }
        yasabenquien.setX(((stage.getWidth() / 4) * 3) + 1);
        juego_suelo.move(-yasabenquien.vx, 0);
    } else if (yasabenquien.getX() < (stage.getWidth() / 4) && keyboard[37] && juego_suelo.getX() < 0) {
        for (i in grupoAssets.children) {
            var enemigo = grupoAssets.children[i];
            enemigo.move(yasabenquien.vx, 0);
        }
        yasabenquien.setX((stage.getWidth() / 4) - 1);
        juego_suelo.move(yasabenquien.vx, 0);
    }
}


function Colision() {
    var enemigos = grupoAssets.children;
    for (i in enemigos) {
        if (!yasabenquien.waitdamage) {
            if (hit(enemigos[i], yasabenquien)) {
                if (enemigos[i] instanceof Enemigo) {
                    getDamage(20);
                }
                if (enemigos[i] instanceof Portal) {
                    finPartida();
                }
            }
        }
    }
}

function finPartida() {
    clearInterval(intervalo);
    $.ajax({
        type: 'POST',
        url: 'php/guardarTiempo.php',
        data: {
            tiempo: cronometro,
            dif: juego.dificultad,
            nivel: juego.nivel
        },
        success: function () {
            location.reload();
        }
    });
}
function cronotempo() {
    cronometro++;
    texto_cronometro.setText("Tiempo: " + Math.trunc(cronometro / 60));
}

function ordenDeCapas() {
    var entidad = grupoAssets.children;
    var assetsordenados = [];
    var grupoOrdenado = [];
    for (i in entidad) {
        grupoOrdenado[i] = (entidad[i].getY() + entidad[i].getHeight()) + " - " + i;
    }
    grupoOrdenado.sort();
    for (i in entidad) {
        assetsordenados[i] = grupoAssets.children[grupoOrdenado[i].split(' ')[2]];
    }
    grupoAssets.children = assetsordenados;
}

function esperarEnergia() {
    if (yasabenquien.energia_total < 100) {
        yasabenquien.energia_total++;
        texto_energia.setText(yasabenquien.energia_total);
        yasabenquien_energia.setWidth(yasabenquien_energia.width_Base * yasabenquien.energia_total);
    }
}

function getDamage(cantidad) {
    yasabenquien.waitdamage = true;
    yasabenquien.vida_total -= cantidad;
    texto_vida.setText(yasabenquien.vida_total);
    tiempo_damage = setTimeout(function () {
        yasabenquien.waitdamage = false;
    }, 2000);
    if (yasabenquien.vida_total <= 0) {
        alert("Perdiste");
        location.reload();
    }
}

addKeyboardEvents();

function frameloop() {
    cronotempo();
    Colision();
    moverCiertoser();
    ordenDeCapas();
    esperarEnergia();
    camara();
    stage.draw();
}