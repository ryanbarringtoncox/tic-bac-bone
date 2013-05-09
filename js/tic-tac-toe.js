(function($) {
  
  var Game = Backbone.Model.extend({
    defaults: {
      player1: [],
      player2: [],
      update: function(currSquare) {
        console.log(currSquare + " clicked");
        var currDiv = "#" + currSquare;
        
        //check to see if it's already clicked
        
        //update the square
        $(currDiv).addClass("clicked");
        $(currDiv).append("<span>X</span>");
      }      
    }
  });
  
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
      //console.log("render called");
      var self = this;
      
      //clear the board
      $(this.el).html("");
      
      //draw the squares
      for (var i = 1; i <= 9; i++) {
        $(this.el).append("<div class='square' id='square-" + i + "'></div>");
      }
      
      //append reset button
      $(this.el).append("<button id='reset'>Reset</button>")

    },
    
    reset: function() {
      console.log("reset called!");
      this.initialize();
    },
    
    makeMove: function(e) {
      var currSquare = $(e.currentTarget).attr("id");
      this.game.attributes.update(currSquare);
    },
    
  });
  
  var gameView = new GameView();
  
})(jQuery); 

