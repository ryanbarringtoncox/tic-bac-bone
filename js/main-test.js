requirejs.config({
  
  paths: {
    game: "models/game",
    gameView: "views/gameView",
    backbone: "lib/backbone-min",
    underscore: "lib/underscore-min",
    jquery: "lib/jquery-1.9.1.min",
    jasmine: "../spec/lib/jasmine",
    jasmineHtml: "../spec/lib/jasmine-html",
    homepageSpec: "../spec/HomepageSpec", 
    spec: '../spec'
  },
  shim: {
    "jasmine": {
      exports: "jasmine"
    },
    "jasmineHtml": {
      deps: ["jasmine"],
      exports: "jasmine"
    },
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
  "jquery", "underscore", "backbone", "game", "jasmineHtml",
  ], function($, _, Backbone, Game, JasmineHtml) {
  
  console.log("app loaded");

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };
  
  var specs = [];
  
  specs.push("spec/HomepageSpec");
  
  $(function() {
    require(specs, function() {
      jasmineEnv.execute();
    });
  });

});