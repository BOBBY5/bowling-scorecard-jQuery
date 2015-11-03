// Frame module;
//Frame constructor
function Frame() {
  this.roll = 0;
};
//create addRoll
Frame.prototype.addRoll = function(score) {
  this.addRollScore(score);
  this.sumRolls();
}
//create sumRolls
Frame.prototype.sumRolls = function() {
 this.score = (this.roll + this.roll2)
}
//create addRollScore
Frame.prototype.addRollScore = function(score) {
  if (this.roll > 0 && score){
    this.roll2 = score;
  }
  else {
    this.roll = score;
  }
}
//create bonusStatus state
Frame.prototype.bonusStatus = function() {
  if (this.roll2 > 0 && this.score === 10){ 
    return 'spare';
  }
  else if (this.roll === 10) {
    return 'strike';
  }
  else if (this.roll2 > 0 && this.score < 10) { 
    return 'open';
  }
  else {return 'live'}
}
//create maximumScore state
Frame.prototype.maximumScore = function() {
  if (this.roll < 1) {return 10}
  else {return 10 - this.roll}
}