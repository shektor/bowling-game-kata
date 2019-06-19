var Game = require("../src/game");

describe("Game", function() {
  var game;

  function manyRolls(nRolls, pins) {
    for (var i = 0; i < nRolls; i++) {
      game.roll(pins);
    }
  }

  beforeEach(function() {
    game = new Game();
  });

  describe("Gutter Game", function() {
    it("returns a zero score", function() {
      manyRolls(20, 0);
      expect(game.score()).toBe(0);
    });
  });

  describe("All Ones", function() {
    it("returns a twenty score", function() {
      manyRolls(20, 1);
      expect(game.score()).toBe(20);
    });
  });

  describe("One Spare", function() {
    it("adds a bonus roll to spare frame", function() {
      game.roll(5);
      game.roll(5);
      game.roll(3);
      manyRolls(17, 0);
      expect(game.score()).toBe(16);
    })
  })
});
