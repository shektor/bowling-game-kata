function Game() {
  this._score = 0;
  this._rolls = [];
  this._currentRoll = 0;
}

Game.prototype.roll = function(pins) {
  this._rolls[this._currentRoll] = pins;
  this._currentRoll++;
};

Game.prototype.score = function() {
  for (var i = 0; i < this._rolls.length; i++) {
    if ((this._rolls[i] + this._rolls[i+1]) === 10) {
      this._score += this._rolls[i+2];
    }
    this._score += this._rolls[i];
  }
  return this._score;
};

module.exports = Game;
