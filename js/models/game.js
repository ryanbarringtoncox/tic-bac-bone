define(["underscore", "backbone"], function (_, Backbone) {
  
  var Game = Backbone.Model.extend({
          
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
      
      //check for validity
      if (sq < 1 || sq > 9 || !this.isSquareAvailable(sq)) {
        return -1;
      }
  
      //if square is available
      else  {
          
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
      console.log("calling isGameWon on " + currPlayer);
      var playerSquares = this.get(currPlayer);
      var possibleWins = this.get("possibleWins");
      console.log("they have " + playerSquares);
      
      possibleWins.forEach(function(arr) {
        console.log("checking " + arr + "...");
        var matchCounter = 0;
        arr.forEach(function(a) {    
          console.log(a+"?");
          if (playerSquares.indexOf(a) > -1) {
            console.log("yep");
            matchCounter++;
            console.log("match on " + a);
            if (matchCounter === 3) {
              console.log("winner is " + currPlayer);
              return true;
            }
          } else {console.log("nope");}
        });
      });
      
      return false;
      
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