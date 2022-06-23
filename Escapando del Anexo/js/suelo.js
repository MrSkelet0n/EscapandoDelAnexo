function Suelo(GAME_ANCHO, GAME_ALTO, imagen) {
    Kinetic.Image.call(this);
    this.setWidth(GAME_ANCHO * 4);
    this.setHeight(GAME_ALTO);
    this.setImage(imagen);
    this.setX(0);
    this.setY(0);
}
Suelo.prototype = Object.create(Kinetic.Image.prototype);