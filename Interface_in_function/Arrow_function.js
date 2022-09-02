var ScoreCard = function () {
    this.score = 0;
    this.getScore = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.score); // you get  0
        }, 1000);
    };
};
var a = new ScoreCard();
a.getScore();
