function Enemigo(x, y, imagen) {
    Kinetic.Image.call(this);
    this.setWidth(120);
    this.setHeight(160);
    this.setX(x);
    this.setY(y);
    this.hitboxY = (this.getHeight() / 4) * 3;
    this.contador = 0;

    //valores
    this.vida_total = 100;
    this.energia_total = 100;
    this.setImage(imagen);

    this.aleatorio = function (min, max) {
        var random = Math.random() * (max - min);
        random = Math.floor(random);
        return parseInt(min) + random;
    }
}
Enemigo.prototype = Object.create(Kinetic.Image.prototype);