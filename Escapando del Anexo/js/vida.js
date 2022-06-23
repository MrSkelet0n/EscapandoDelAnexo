function Vida() {
    Kinetic.Rect.call(this);
    this.setWidth(200);
    this.setHeight(20);
    this.setX(10);
    this.setY(10);
    this.width_Base = 2;
    this.setFill('red');
}
Vida.prototype = Object.create(Kinetic.Rect.prototype);