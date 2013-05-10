Game = Backbone.Model.extend({
    
  defaults: {
    currPlayer: "x",
    player1: [],
    player2: [],
  },
  
  initialize: function() {
    console.log("Welcome to a new game!");
    this.currPlayer = "x";
  },
  
  togglePlayer: function() {
    
    var playa = this.get("currPlayer");
    
    console.log("currPlayer is " + playa);
    console.log("toggling player...")
    
    if (playa === "x") {
      this.set({"currPlayer": "o"});
    } else if (playa === "o") {
      this.set({"currPlayer": "x"});
    }
  },  
    
  move: function(sq) {      
    
    //check bounds
    if (sq < 1 || sq > 9) {
      return -1;
    }
    
    //isSquareAvaiable
    
    //updatePlayer
    
    //togglePlayer
    
  },
    
  //isSquareAvailable(Number)
  
  //updatePlayer(Number)
  
  //isGameWon
  
  //get current player
  getCurrPlayer: function() {
    return currPlayer;
  },
  
  //togglePlayer
    
});

describe("Game Model", function() {
  
  var game = new Game();
  
  describe("Initialize Game", function () {
     
    it("should return player 'x'", function() {
      expect(game.get("currPlayer")).toEqual("x");
      console.log("first in code");
    });    
  });
  
  console.log("second in code");
  //game.togglePlayer();
  
});
