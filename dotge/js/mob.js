function Mob() {
    this.$mob = null;
    this.corX = null;
    this.corY = null;
    this.speed = null;
    this.direction = null;
    this.start();
}
Mob.prototype.count = 0;
Mob.prototype.start = function () {
    this.init();
    this.initEvent();
}
Mob.prototype.init = function () {
    this.setGround();
    Mob.prototype.count++;
    this.createMob();
    this.speed = Math.round(Math.random() * 15);
    this.direction = Math.random() * Math.PI * 2;
}
Mob.prototype.initEvent = function () {
    setInterval(() => {
        this.moveRandom()
    }, 300);
}
Mob.prototype.createMob = function () {
    var initialX = Math.round(Math.random() * Mob.prototype.groundX);
    var initialY = Math.round(Math.random() * Mob.prototype.groundY);
    this.$mob = $(`<div class="mob" id="mob${Mob.prototype.count}"><i class="fas fa-pastafarianism"></i></div>`);
    $(".ground").append(this.$mob);
    this.$mob.css("position", "absolute");
    this.moveTo(initialX, initialY);
}
Mob.prototype.setGround = function () {
    Mob.prototype.groundX = $(".ground").outerWidth();
    Mob.prototype.groundY = $(".ground").outerHeight();
}
Mob.prototype.moveTo = function (left, top) {
    var maxLeft = Mob.prototype.groundX - this.$mob.outerWidth();
    var maxTop = Mob.prototype.groundY - this.$mob.outerHeight();
    left = left < 0 ? maxLeft : (left > maxLeft ? 0 : left);
    top = top < 0 ? maxTop : (top > maxTop ? 0 : top);
    this.$mob.css({
        "left": left + "px",
        "top": top + "px"
    });
    this.corX = left;
    this.corY = top;
}
Mob.prototype.moveRandom = function () {
    var randX = this.corX + Math.cos(this.direction) * this.speed;
    var randY = this.corY + Math.sin(this.direction) * this.speed;
    this.moveTo(randX, randY);
}