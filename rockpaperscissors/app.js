new Vue({
    el: '#app',
    data: {
        myChoice: null,
        comChoice: null,
        count: 3
    },
    watch: {
        count: function (newVal, oldVal) {
            if (newVal === 0) {
                this.comSelect();
            }
        }
    },
    methods: {
        resetGame() {
            this.count = 3;
            this.comChoice = null;
        },
        startGame() {
            if (this.myChoice == null) {
                alert('select your shape');
                return;
            }
            this.resetGame();
            this.startCount();
        },
        startCount() {
            var timer = setInterval(() => {
                this.count--;
                if (this.count == 0) clearInterval(timer);
            }, 1000);
        },
        comSelect() {
            var randNum = parseInt(Math.random() * 3);
            this.comChoice = ['rock', 'paper', 'scissors'][randNum];
        }
    }
})