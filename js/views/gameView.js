define(["underscore", "backbone", "game"], function (_, Backbone, Game) {

  var GameView = Backbone.View.extend({
    
    el: $(".square-wrapper"),
        
    events: {
      "click button#reset": "reset",
      "click .square": "makeMove"
    },
    
    initialize: function() {
      _.bindAll(this, "render", "reset", "makeMove");
      
      this.game = new Game();
      this.render();
    },
    
    render: function() {
      var self = this;
      
      //clear the board
      $(this.el).html("");
      
      //draw the squares
      for (var i = 1; i <= 9; i++) {
        $(this.el).append("<div class='square' id='square-" + i + "'></div>");
      }
      
      //append reset button
      $(this.el).append("<button id='reset'>Reset</button>");
  
    },
    
    reset: function() {
      this.initialize();
    },
    
    makeMove: function(e) {

      //get square stuff
      var currPlayer = this.game.get("currPlayer");
      var currSquare = $(e.currentTarget).attr("id");
      var sq = parseInt(currSquare.split('-')[1],10);
      
      //if move is valid update DOM, check for end of game
      if (this.game.move(sq) !== -1) {

        $("#" + currSquare).append("<span>" + currPlayer + "</span>");
  
        if (this.game.isGameWon(currPlayer)) {
          alert("winner is " + currPlayer);
        }
        
        if (this.game.isGameTied()) {
          alert("Game tied!");
        }
      }
    },
    
  });
  
  return GameView;
  
});

