function Runner() {
    this.$user = null;
    this.corX = null;
    this.corY = null;
    this.width = null;
    this.height = null;
    this.start();
}
Runner.prototype.start = function () {
    this.init();
    this.initEvent();
}

Runner.prototype.init = function () {
    this.$user = $("#runner");
    this.corX = 0;
    this.corY = 0;
    this.width = this.$user.outerWidth();
    this.height = this.$user.outerHeight();
    this.setGround();
}
Runner.prototype.initEvent = function () {
    var runnerThis = this;
    $(document).keydown(function (event) {
        runnerThis.moveMan(event.keyCode);
    })
    //overlap function??
    setInterval(() => {
        var $mobs = $(".ground .mob");
        $mobs.each(function () {
            if (runnerThis.isOverlap($(this))) alert("Ooops!! you've got caught");
        })
    }, 300);
}
Runner.prototype.setGround = function () {
    Runner.prototype.groundX = $(".ground").outerWidth();
    Runner.prototype.groundY = $(".ground").outerHeight();
}
Runner.prototype.moveTo = function (left, top) {
    var maxLeft = this.groundX - this.width;
    var maxTop = this.groundY - this.height;
    left = Math.max(0, Math.min(left, maxLeft));
    top = Math.max(0, Math.min(top, maxTop));
    this.$user.css({
        "left": left + "px",
        "top": top + "px"
    });
    this.corX = left;
    this.corY = top;
}
Runner.prototype.moveMan = function (keyCode) {
    switch (keyCode) {
        case 37:
            this.moveTo(this.corX - 5, this.corY);
            break;
        case 38:
            this.moveTo(this.corX, this.corY - 5);
            break;
        case 39:
            this.moveTo(this.corX + 5, this.corY);
            break;
        case 40:
            this.moveTo(this.corX, this.corY + 5);
            break;
        default:
            break;
    }
}
Runner.prototype.isOverlap = function ($mob) {
    return !(this.$user.position().top > $mob.position().top + $mob.outerHeight() ||
        this.$user.position().left + this.$user.outerWidth() < $mob.position().left ||
        this.$user.position().top + this.$user.outerHeight() < $mob.position().top ||
        this.$user.position().left > $mob.position().left + $mob.outerWidth());
}