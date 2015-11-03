// Game module;
//Game constructor
function Game() {
  this.frames = [];
};
//create newFrame 
Game.prototype.newFrame = function() {
  this.frames.push(new Frame())
}
//create currentFrame
Game.prototype.currentFrame = function() {
  return this.frames[this.frames.length-1]
}
//create createNextFrame 
Game.prototype.createNextFrame = function() {
  if (this.preGame) {
    this.newFrame(); 
  }
  else if (this.frames.length < 10 && this.endOfCurrentFrame) {
    this.newFrame() 
  };
  
}
//create preGame state
Game.prototype.preGame = function(){
  this.frames.length === 0
}
//create endOfCurrentFrame state
Game.prototype.endOfCurrentFrame = function(){
  this.currentFrame().bonusStatus() != 'live';
}