var Game = require("../src/game");

describe("Game", function() {
  describe("Gutter Game", function() {
    it("returns a zero score", function() {
      var game = new Game();
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toBe(0);
    });
  });

  describe("All Ones", function() {
    it("returns a twenty score", function() {
      var game = new Game();
      for (var i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.score()).toBe(20);
    });
  });
});
