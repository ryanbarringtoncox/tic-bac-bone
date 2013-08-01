define(["underscore", "backbone"], function (_, Backbone) {
  
  var Game = Backbone.Model.extend({
          
    defaults: {
      won: false,
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
      this.movesMade = 0;
      this.won = false;
      this.currPlayer = "x";
      this.set({"x": []});
      this.set({"o": []});
      console.log("currPlayer is " + this.currPlayer);   
    },
    
    setGameWon: function() {
      this.set({"won": true});
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
  
      var taken = this.get("x").concat(this.get("o"));
        
      if (taken.indexOf(sq) === -1) {
        return true;
      } else {
          return false;
        }
        
    },  
    
    move: function(sq) {
            
      //check for validity
      if (this.get("won") || typeof sq !== "number" || sq < 1 || sq > 9 || !this.isSquareAvailable(sq)) {
        return -1;
      }
  
      //if square is available
      else {   
        var currPlayer = this.get("currPlayer");
        this.get(currPlayer).push(sq);
        this.incrMovesMade();
        this.togglePlayer();
        this.isGameWon(currPlayer);
        this.isGameTied(); 
        return 1;
      }
    },
        
    getCurrPlayer: function() {
      return currPlayer;
    },
    
    isGameWon: function(currPlayer) {
      var that = this;
      var bool = false;
      var playerSquares = this.get(currPlayer);
      var possibleWins = this.get("possibleWins");
      
      possibleWins.forEach(function(arr) {

        var matchCounter = 0;
        arr.forEach(function(a) {   
          if (playerSquares.indexOf(a) > -1) {
            matchCounter++;
            if (matchCounter === 3) {
              bool = true;
              that.setGameWon();
            }
          }
        });
      });
      
      return bool;
      
    },
    
    isGameTied: function() {
  
      if (this.get("movesMade") >= 9) {
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
  
  return Game;
  
});
