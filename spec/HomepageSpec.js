Game = Backbone.Model.extend({
    
  defaults: {
    currPlayer: "x",
    movesMade: 0,
    x: [],
    o: [],
    possibleWins: [ 
      [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
    ]
  },
  
  initialize: function() {
    console.log("Welcome to a new game!");
    this.currPlayer = "x";
    this.set({"x": []});
    this.set({"o": []});
    console.log("currPlayer is " + this.currPlayer);   
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

    //if square is available update current player's array
    else if (this.isSquareAvailable(sq)) {
        
      var currPlayer = this.get("currPlayer");
      this.get(currPlayer).push(sq);
      this.incrMovesMade();
      this.togglePlayer();
      this.isGameWon(currPlayer);
      this.isGameTied();
        
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
    
  },
  
  isGameTied: function() {

    if (this.get("movesMade") >= 9) {
      console.log("it's a tie");
      return true;
    } else {
      return false;
    }
  },
  
  incrMovesMade: function() {

    var mm = this.get("movesMade");
    mm++;
    this.set({"movesMade" : mm});
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
