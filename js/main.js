requirejs.config({
  
  paths: {
    game: "models/game",
    gameView: "views/gameView",
    backbone: "lib/backbone-min",
    underscore: "lib/underscore-min",
    jquery: "lib/jquery-1.9.1.min",
  },
  
  shim: {
      "backbone": {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      },
      "underscore": {
        deps: ["jquery"],
        exports: "_"
      },
    }
});

require([
  "jquery", "underscore", "backbone", "game", "gameView"
  ], function($, _, Backbone, Game, GameView) {
  
  console.log("initializing new Game");
  var gameView = new GameView();

});