function Player(turn) {
    this.turn = turn;
    this.roll = 0;
    this.rollScore = 0;
    this.totalScore = 0;
   }
   function rollDice() {
    return Math.floor(6 * Math.random()) + 1;
   }
   Player.prototype.startGame = function() {
    this.roll = 0;
    this.rollScore = 0;
    this.totalScore = 0;
   }
   Player.prototype.roll1 = function() {
    if (this.roll === 1) {
      this.rollScore = 0;
      alert("Pass the mouse");
    } else {
      this.rollScore += this.roll;
    }
   }
   Player.prototype.hold = function() {
    this.totalScore += this.rollScore;
    this.rollScore = 0;
    alert("Pass the mouse");
   }
   Player.prototype.winnerCheck = function() {
    if (this.totalScore >= 100)
      alert(" You won");
    }
    $(document).ready(function(){
        var player1 = new Player("Player 1");
        var player2 = new Player("Player 2")
    $("button#roll1").click(function(){
      player1.roll = rollDice();
      $("#value1").text(player1.roll);
      player1.roll1();
      $("#points1").text(player1.rollScore);
    });
    $("button#roll3").click(function(){
      player2.roll = rollDice();
      $("#value2").text(player2.roll);
      player2.roll1();
      $("#points2").text(player2.rollScore);
    });
    $("button#roll2").click(function(){
    player1.hold();
    $("#score1").text(player1.rollScore);
    $("#points1").empty();
    $("#value1").empty();
    player1.winnerCheck();
    });
    $("button#roll4").click(function(){
    player2.hold();
    $("#score2").text(player2.rollScore);
    $("#points2").empty();
    $("#value2").empty();
    player2.winnerCheck();
    });
    // var reset = function() {
    //   $(".player1Name").val("");
    //   $(".player2Name").val("");
    // }
});


      $(document).ready(function(){
          $("#start").click(function(event){
              event.preventDefault()
              $(".main").show(1200);
              $(".top").hide();
      });
    });

    
