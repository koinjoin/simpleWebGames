function Mob() {
    this.$mob = null;
    this.corX = null;
    this.corY = null;
    this.speed = null;
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
    this.corX = this.$mob.css("left");
    this.corY = this.$mob.css("top");
    this.speed = Math.random() * 10;
}
Mob.prototype.initEvent = function () {
    setInterval(() => {
        this.moveRandom()
    }, 300);
}
Mob.prototype.createMob = function () {
    this.$mob = $(`<div class="mob" id="mob${Mob.prototype.count}"><i class="fas fa-pastafarianism"></i></div>`);
    $(".ground").append(this.$mob);
    this.$mob.css("position", "absolute");
    this.moveTo(Math.random() * Mob.prototype.groundX, Math.random() * Mob.prototype.groundY);
}
Mob.prototype.setGround = function () {
    Mob.prototype.groundX = $(".ground").outerWidth();
    Mob.prototype.groundY = $(".ground").outerHeight();
}
//moveTo need modify!!
Mob.prototype.moveTo = function (left, top) {
    var maxLeft = Mob.prototype.groundX - this.width;
    var maxTop = Mob.prototype.groundY - this.height;
    left = Math.max(0, Math.min(left, maxLeft));
    top = Math.max(0, Math.min(top, maxTop));
    this.$mob.css({
        "left": left + "px",
        "top": top + "px"
    });
    this.corX = left;
    this.corY = top;
}
Mob.prototype.moveRandom = function () {
    this.moveTo(this.corX + this.speed * 100, this.corY + this.speed * 100);
}