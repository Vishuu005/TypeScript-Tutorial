var ScoreCard = function () {
    this.score = 0;

    this.getScore = function () {
        setTimeout(()=>{
            console.log(this.score);   // you get  0
        }, 1000);
    }    
}

var a = new ScoreCard();
a.getScore();