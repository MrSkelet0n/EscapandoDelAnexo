function CiertoSer(sound_atack, imagen, animaciones) {
    Kinetic.Sprite.call(this);
    this.setWidth(120);
    this.setHeight(160);
    this.attrs.image = imagen;
    this.setAnimations(animaciones);
    this.setAnimation('estatico');
    this.attrs.frameRate = 13;
    this.vx = 6;
    this.vy = 6;
    this.hitboxY = (this.getHeight() / 4) * 2;
    this.direccion = true;
    this.waitdamage = false;
    this.atacando = false;
    this.limiteDer = 0;
    this.limiteTop = 0;
    this.limiteBot = 0;
    this.contador = 0;
    this.correr = this.vx;
    //valores
    this.vida_total = 100;
    this.energia_total = 100;
    this.attrs.drawFunc = function (a) { var b = this.attrs.animation, c = this.attrs.index, d = this.attrs.animations[b][c], e = a.getContext(), f = this.attrs.image; f && e.drawImage(f, d.x, d.y, d.width, d.height, 0, 0, this.getWidth(), this.getHeight()) };

    this.getDamage = function () {
        yasabenquien.waitdamage = true;
        yasabenquien.vida_total -= cantidad;
        texto_vida.setText(yasabenquien.vida_total);
        tiempo_damage = setTimeout(function () {
            yasabenquien.waitdamage = false;
        }, 2000);
    }

    this.derecha = function () {
        this.attrs.drawFunc = function (a) { var b = this.attrs.animation, c = this.attrs.index, d = this.attrs.animations[b][c], e = a.getContext(), f = this.attrs.image; f && e.drawImage(f, d.x, d.y, d.width, d.height, 0, 0, this.getWidth(), this.getHeight()) };
        this.setScale({ x: 1 });
        this.move(this.vx, 0);
        if ((juego_suelo.getX() * (-1)) >= 3000) {
            this.setX((stage.getWidth() / 4) * 3);
        }
    }
    this.izquierda = function () {
        this.attrs.drawFunc = function (a) { var b = this.attrs.animation, c = this.attrs.index, d = this.attrs.animations[b][c], e = a.getContext(), f = this.attrs.image; f && e.drawImage(f, d.x, d.y, d.width, d.height, -(this.getWidth()), 0, this.getWidth(), this.getHeight()) };
        this.setScale({ x: -1 });
        this.move(-(this.vx), 0);
        if (this.getX() < 0) {
            this.setX(0, 0);
        }
    }
    this.arriba = function () {
        this.move(0, -this.vy);
        if (this.getY() < this.limiteTop) {
            this.setY(this.limiteTop);
        }
    }
    this.abajo = function () {
        this.move(0, this.vy);
        if (this.getY() + this.getHeight() > this.limiteBot) {
            this.setY(this.limiteBot - this.getHeight());
        }
    }
    this.atacar = function () {
        if (!this.direccion) {
            this.attrs.drawFunc = function (a) { var b = this.attrs.animation, c = this.attrs.index, d = this.attrs.animations[b][c], e = a.getContext(), f = this.attrs.image; f && e.drawImage(f, d.x, d.y, d.width, d.height, -(this.getWidth()), 0, this.getWidth(), this.getHeight()) };
        }
        this.atacando = true;
        yasabenquien.setAnimation("atacar");
        sound_atack.play()
    }

}

CiertoSer.prototype = Object.create(Kinetic.Sprite.prototype);