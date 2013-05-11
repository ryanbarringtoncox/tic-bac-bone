Game = Backbone.Model.extend({
    
  defaults: {
    currPlayer: "x",
    x: [],
    o: [],
    possibleWins: [ 
      [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
    ]
  },
  
  initialize: function() {
    console.log("Welcome to a new game!");
    this.currPlayer = "x";
  },
  
  togglePlayer: function() {
    
    var playa = this.get("currPlayer");
    
    if (playa === "x") {
      this.set({"currPlayer": "o"});
    } else if (playa === "o") {
      this.set({"currPlayer": "x"});
    }
    
  }, 
    
  isSquareAvailable: function(sq) {

    if (this.get("x").indexOf(sq) === -1 && this.get("o").indexOf(sq) === -1) {
      return true
    } else {
        return false;
      }
      
  },  
  
  move: function(sq) {
    
    //check bounds
    if (sq < 1 || sq > 9) {
      return -1;
    }

    //if square is avaiable update current player's array
    else if (this.isSquareAvailable(sq)) {
        
      var currPlayer = this.get("currPlayer");
      this.get(currPlayer).push(sq);
       
      this.togglePlayer();
      this.isGameWon(currPlayer);
        
    }
  },
      
  //get current player
  getCurrPlayer: function() {
    return currPlayer;
  },
  
  isGameWon: function(currPlayer) {

    var playerSquares = this.get(currPlayer);
    var possibleWins = this.get("possibleWins");
    
    possibleWins.forEach(function(arr) {
      
      var matchCounter = 0;
      arr.forEach(function(a) {    
        
        if (playerSquares.indexOf(a) > -1) {
          matchCounter++;
          if (matchCounter === 3) {
            console.log("winner is " + currPlayer);
            return true;
          }
        }
      });
    });
    
    return false;
    
  }
      
});

describe("Game Model", function() {

  var game;
  
  //each describe gets a fresh game instance
  beforeEach(function() {
    game = new Game();
  });
  
  
  describe("Initializes Game, Toggle Player", function () {
     
    it("should return 'x' then toggle to 'o'", function() {
      
      expect(game.get("currPlayer")).toEqual("x");
      game.togglePlayer();
      expect(game.get("currPlayer")).toEqual("o");
      
    });    
  });
  
  describe("Initializes Game, Makes  moves", function () {
     
    it("should return 'x' then toggle to 'o'", function() {
 
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
      
      console.log(game.get("x"));
    });    
  });  
  
});
