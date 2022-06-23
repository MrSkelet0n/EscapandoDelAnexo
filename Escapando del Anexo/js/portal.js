function Portal(x, y, imagen) {
    Kinetic.Image.call(this);
    this.setWidth(120);
    this.setHeight(300);
    this.setImage(imagen);
    this.setX(x);
    this.setY(y);

}
Portal.prototype = Object.create(Kinetic.Image.prototype);