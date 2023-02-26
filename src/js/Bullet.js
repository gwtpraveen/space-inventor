export default class Bullet {
    constructor(gameHeight, ship, enemyOrNot=true) {
        this.bullet = new Image();
        this.bullet.src = "../assets/bullet.png"
        this.ship = ship;
        this.enemyOrNot = enemyOrNot;
        this.gameHeight = gameHeight;
        this.speed = 0;
        this.destroyed = false;
        this.position = {
            x: this.ship.position.x + this.ship.Ship.width / 2 - this.bullet.width / 2,
            y: this.ship.position.y + this.ship.Ship.height / 2
        }
        
    };

    draw(ctx) {
        ctx.drawImage(this.bullet, this.position.x, this.position.y);
    };

    shoot() {
        if (this.enemyOrNot) {
            this.speed = 5;
        } else {
            this.speed = -6;
        }
    };

    update(deltaTime) {
        this.position.y += this.speed;
        if (this.position.y <= 0 || this.position.y >= this.gameHeight) {
            this.position.x = -100;
            this.speed = 0;
            this.destroyed = true;
        }        
    };
};
