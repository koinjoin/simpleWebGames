$(document).ready(function () {
    var man = new Runner();
    man.moveTo(300, 300);
})
function Runner() {
    this.$user = null;
    this.corX = null;
    this.corY = null;
    this.width = null;
    this.height = null;
    this.start();
}
Runner.prototype.groundX = parseInt($(".ground").outerWidth());
Runner.prototype.groundY = parseInt($(".ground").outerHeight());

Runner.prototype.start = function () {
    this.init();
    this.initEvent();
}
Runner.prototype.init = function () {
    this.$user = $("#runner");
    this.corX = 0;
    this.corY = 0;
    this.width = parseInt(this.$user.outerWidth());
    this.height = parseInt(this.$user.outerHeight());
}
Runner.prototype.initEvent = function () {
    var runThis = this;
    $(document).keydown(function (event) {
        runThis.moveMan(event.keyCode);
    })
}
Runner.prototype.moveTo = function (left, top) {
    //need modification
    var maxLeft = 487;
    var maxTop = 476;
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