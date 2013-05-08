(function($) {
  var GameView = Backbone.View.extend({
    
    el: $(".square-wrapper"),
        
    events: {
      "click button#reset": "reset",
      "click .square": "makeMove"
    },
    
    initialize: function() {
      _.bindAll(this, "render", "reset", "makeMove");
      
      this.render();
    },
    
    render: function() {
      //console.log("render called");
      var self = this;
      
      //draw the squares
      for (var i = 1; i <= 9; i++) {
        $(this.el).append("<div class='square' id='square-" + i + "'></div>");
      }
      
      //append reset button
      $(this.el).append("<button id='reset'>Reset</button>")

    },
    
    reset: function() {
      console.log("reset called!");
    },
    
    makeMove: function() {
      console.log("makeMove called!");
      console.log(this);
    },
    
  });
  
  var gameView = new GameView();
  
})(jQuery); 

