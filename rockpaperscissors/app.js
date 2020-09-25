new Vue({
    el: '#app',
    data: {
        myChoice: null,
        comChoice: null,
        winner: null,
        lifeOfMe: 3,
        lifeOfCom: 3,
        count: 3,
        running: false,
        logs: [],
    },
    watch: {
        count: function (newVal, oldVal) {
            if (newVal == 0) {
                //컴퓨터의 선택
                this.comSelect();
                //나의 선택과 컴퓨터의 선택 대결
                this.match();
                //진 사람의 몫 차감
                this.payLife();
                //결과 기록
                this.recordLog();
            }
        },
        lifeOfMe: function (newVal) {
            if (!newVal) {
                setTimeout(() => {
                    confirm('패배하셨습니다. 게임이 새로 시작됩니다')
                    this.resetGame();
                }, 600);
            }
        },
        lifeOfCom: function (newVal) {
            if (!newVal) {
                setTimeout(() => {
                    confirm('승리하셨습니다. 게임이 새로 시작됩니다')
                    this.resetGame();
                }, 600);
            }
        }
    },
    methods: {
        resetGame() {
            this.myChoice = null;
            this.lifeOfCom = 3;
            this.lifeOfMe = 3;
            this.logs = [];
            this.resetMatch();
        },
        resetMatch() {
            this.count = 3;
            this.comChoice = null;
        },
        startGame() {
            if (this.myChoice == null) {
                alert('select your shape');
                return;
            }
            if (this.running == true) return;
            this.resetMatch();
            this.running = true;
            this.startCount();
        },
        startCount() {
            var timer = setInterval(() => {
                this.count--;
                if (this.count == 0) {
                    clearInterval(timer);
                    this.running = false;
                }
            }, 1000);
        },
        comSelect() {
            var randNum = parseInt(Math.random() * 3);
            this.comChoice = ['rock', 'paper', 'scissors'][randNum];
        },
        match() {
            if (this.myChoice == this.comChoice) this.winner = 'no-one';
            else if (this.myChoice == 'rock') {
                if (this.comChoice == 'paper') this.winner = 'com';
                else this.winner = 'you';
            } else if (this.myChoice == 'paper') {
                if (this.comChoice == 'scissors') this.winner = 'com';
                else this.winner = 'you';
            } else if (this.myChoice == 'scissors') {
                if (this.comChoice == 'rock') this.winner = 'com';
                else this.winner = 'you';
            } else {
                alert('error');
            }
        },
        payLife() {
            if (this.winner == 'no-one') return;
            else if (this.winner == 'you') this.lifeOfCom--;
            else if (this.winner == 'com') this.lifeOfMe--;
        },

        recordLog() {
            var log = {
                message: `You: ${this.myChoice}, Computer: ${this.comChoice}`,
                logClass: {
                    'win-log': this.winner == 'you',
                    'defeat-log': this.winner == 'com',
                    'draw-log': this.winner == 'no-one',
                },
            };

            this.logs.unshift(log);
        }
    }
})