// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // Each enemy bug's speed is calculated here randomly.
    this.speed = Math.floor(Math.random()*300+200);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // function to update the x position of bug.
    // and resetting the position on crossing the screen
    var resetPosition = -1 * Math.floor(Math.random()*500+200);
    this.x = (this.x < 505) ? this.x + (dt*this.speed) : resetPosition;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// The player class
var Player = function(){ 
    this.x = 202;
    this.y = 320;
    this.sprite = "images/char-boy.png";
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function() {
    // Take proper step measures as key is released.
    switch(this.keyPressed) {
        case 'up':
            if(this.y > 0)    
                this.y -= 83;
            break;
        case 'down':
            if(this.y < 403)
                this.y += 83;
            break;
        case 'left':
            if(this.x > 0)
                this.x -= 101;
            break;
        case 'right':
            if(this.x < 404)
                this.x += 101;
    }
    if(this.y == -12) {
        alert("yea! you won!");
        this.x = 202;
        this.y = 320;
    }
    this.keyPressed = null;
};

Player.prototype.handleInput = function(key) {
    this.keyPressed = key;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// Enemy objects are created with locations behind the canvase.
var allEnemies = [new Enemy(-200,60),new Enemy(-50,145),new Enemy(-155,230),
                    new Enemy(-400,60),new Enemy(-550,145),new Enemy(-655,230)];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
