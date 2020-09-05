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
    this.speed = Math.round(Math.random() * 20);
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
//moveTo need modify!!
Mob.prototype.moveTo = function (left, top) {
    var maxLeft = Mob.prototype.groundX - this.$mob.outerWidth();
    var maxTop = Mob.prototype.groundY - this.$mob.outerHeight();
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
    var randX = this.corX + this.speed * (Math.floor(Math.random() * 3) - 1)
    var randY = this.corY + this.speed * (Math.floor(Math.random() * 3) - 1)
    this.moveTo(randX, randY);
}