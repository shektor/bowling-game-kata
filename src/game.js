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
  var i  = 0;
  for (var frame = 0; frame < 10; frame++) {
    if ((this._rolls[i] + this._rolls[i+1]) === 10) {
      this._score += (10 + this._rolls[i+2])
    } else {
      this._score += (this._rolls[i] + this._rolls[i+1])
    }
    i += 2;
  }
  return this._score;
};

module.exports = Game;
