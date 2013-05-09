var Game = Backbone.Model.extend({
  defaults: {
    welcomeMessage: "Welcome to the game!",
    currPlayer: "x",
    player1: [],
    player2: [],
    
    //call this "move", should just take int 1-9 and check that it's right
    update: function(currSquare) {
      console.log(currSquare + " clicked");
      var currDiv = "#" + currSquare;
      
      //check to see if it's already clicked
      
      //update the square
      $(currDiv).addClass("clicked");
      $(currDiv).append("<span>X</span>");
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
    
    togglePlayer: function() {
      
      console.log("currPlayer is " + this.currPlayer);
      console.log("toggling player...")
      
      if (this.currPlayer == "x") {
        this.currPlayer = "o";
      } else if (currPlayer == "o") {
        this.currPlayer = "x";
      }
      console.log("currPlayer is " + this.currPlayer);
    },
    
  }
});

describe("Game Model", function() {
  
  var game = new Game();
  
  it("should return welcome message", function() {
    expect(game.get("welcomeMessage")).toEqual("Welcome to the game!");
  });
  /*
  it("should return player 'x'", function() {
    expect(game.attributes.getCurrPlayer()).toEqual("x");
  });*/
  
  game.attributes.togglePlayer();
  
  it("should return player 'o'", function() {
    expect(game.attributes.getCurrPlayer()).toEqual("o");
  });  
  
  it("should return -1 for invalid move", function() {
    expect(game.attributes.move(10)).toEqual(-1);
  });
  
  
});
