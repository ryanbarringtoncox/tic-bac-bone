var Game = Backbone.Model.extend({
  defaults: {
    welcomeMessage: "Welcome to the game!",
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
    }
    
    //isSquareAvailable(Number)
    
    //updatePlayer(Number)
    
    //isGameWon
    
  }
});

describe("Game Model", function() {
  it("should return welcome message", function() {
    var game = new Game();
    expect(game.get("welcomeMessage")).toEqual("Welcome to the game!");
  });
});
