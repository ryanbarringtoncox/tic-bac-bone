var Game = Backbone.Model.extend({
    
  defaults: {
    currPlayer: "x",
    player1: [],
    player2: [],
  },
  
  initalize: function() {
    console.log("Welcome to a new game!");
  },
  
  togglePlayer: function() {
    
    var playa = this.get("currPlayer");
    
    console.log("currPlayer is " + playa);
    console.log("toggling player...")
    
    if (playa === "x") {
      this.set({"currPlayer": "o"});
    } else if (playa === "o") {
      this.set({"currPlayer": "o"});
    }
    console.log("currPlayer is " + this.get("currPlayer"));
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
    return this.currPlayer;
  },
  
  //togglePlayer
    
});

describe("Game Model", function() {
  
  var game = new Game();
  console.log("just made a new game...");
  console.log("...and currPlayer is " + game.get("currPlayer"));
  
  
  it("should return player 'x'", function() {
    expect(game.get("currPlayer")).toEqual("x");
  });
  
  game.togglePlayer();
  
  it("should return player 'o'", function() {
    expect(game.get("currPlayer")).toEqual("o");
  });  
  
  it("should return -1 for invalid move", function() {
    expect(game.move(10)).toEqual(-1);
  });
  
  
});
