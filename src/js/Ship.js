export default class Ship {
    constructor(gameWidth, gameHeight) {
        this.Ship = new Image();
        this.Ship.src = "../assets/spaceship.png";
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.health = 90;
        this.speed = 0;
        this.maxSpeed = 5;
        this.position = {
            x: 100,
            y: gameHeight - (this.Ship.height + 30)
        };
    };

    draw(ctx) {
        ctx.drawImage(this.Ship, this.position.x, this.position.y);
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y + (this.Ship.height + 10), this.Ship.width, 10);
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.position.x, this.position.y + (this.Ship.height + 10), this.Ship.width * (this.health / 100), 10);
    };

    moveLeft() {
        this.speed = -this.maxSpeed;
    };

    moveRight() {
        this.speed = this.maxSpeed;
    };

    stop() {
        this.speed = 0;
    }
    
    update(deltaTime) {
        this.position.x += this.speed
        if (this.position.x <= 0) this.position.x = 0;
        if (this.position.x >= this.gameWidth - this.Ship.width) this.position.x = this.gameWidth - this.Ship.width;
    };
}