define(['backbone', function(Backbone) {
  return Backbone.Model.extend();
}]);

describe("Game Model", function() {

  var game;
  
  //each describe gets a fresh game instance
  beforeEach(function() {
    game = new Game();
  });
  
  
  describe("Initializes Game, Toggle Player", function () {
     
    it("should return 'x' then toggle to 'o'", function() {
      console.log("here1");
      expect(game.get("currPlayer")).toEqual("x");
      console.log("here2");
      game.togglePlayer();
      expect(game.get("currPlayer")).toEqual("o");
      
    });    
  });
  
  describe("Game Model some more", function () {
     
    it("Initializes Game, Makes  moves and win", function() {
 
      expect(game.get("currPlayer")).toEqual("x");
      
      //make moves
      game.move(1);
      game.move(2);
      game.move(3);
      game.move(4);
      
      //try illegal moves
      game.move(1);
      game.move(2);
      game.move(3);
      game.move(4);     
      
      //check # of moves made
      var movesMade = game.get("movesMade");
      expect(movesMade).toEqual(4);
      
      //check player arrays
      var x = game.get("x");
      expect(x).toContain(1);
      expect(x).toContain(3);
      expect(x).not.toContain(2);
      expect(x).not.toContain(4);      
      
      var x = game.get("o");
      expect(x).toContain(2);
      expect(x).toContain(4);
      expect(x).not.toContain(1);
      expect(x).not.toContain(3);
      
      //nobody should have won yet
      expect(game.isGameWon("x")).toEqual(false);
      
      //go for the x win
      game.move(5);
      game.move(7);
      game.move(9);
      
    });    
  }); 
  
  describe("Game Model Encore", function () {
    
    it("Should end in a tie", function() {
      
      //make moves
      game.move(1); //x
      game.move(4); 
      game.move(2); //x
      game.move(3);
      game.move(5); //x
      game.move(8);
      game.move(6);  //x
      game.move(9);
      game.move(7);  //x
      
      console.log("moves made is " + game.get("movesMade"));
      console.log("x: " + game.get("x"));
      console.log("o: " + game.get("o"));
      
    });

  });
  
});
