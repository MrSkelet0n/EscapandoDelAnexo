function Energia() {
    Kinetic.Rect.call(this);
    this.setWidth(200);
    this.setHeight(20);
    this.setX(10);
    this.setY(30);
    this.width_Base = 2;
    this.setFill('black');
}
Energia.prototype = Object.create(Kinetic.Rect.prototype);