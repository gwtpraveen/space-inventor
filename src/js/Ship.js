import Bullet from "./Bullet";

export default class Ship {
    constructor(game) {
        this.Ship = new Image();
        this.Ship.src = "../assets/spaceship.png";
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.health = 90;
        this.speed = 0;
        this.maxSpeed = 5;
        this.position = {
            x: 100,
            y: game.gameHeight - (this.Ship.height + 30)
        };
        this.numberOfBullets = 3;
        this.bullets = [];
    };

    draw(ctx) {
        if (this.bullets.length >= 1) {
            for (let bullet of this.bullets) {
                bullet.draw(ctx);
            }
        }
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
    };

    shoot() {
        let bullet = new Bullet(this.gameHeight, this, false);
        if (this.bullets.length < this.numberOfBullets) {
            this.bullets.unshift(bullet);
        }
        this.bullets[0].shoot();
    };
    
    update(deltaTime) {
        this.position.x += this.speed
        if (this.position.x <= 0) this.position.x = 0;
        if (this.position.x >= this.gameWidth - this.Ship.width) this.position.x = this.gameWidth - this.Ship.width;
        if (this.bullets.length >= 1) {
            for (let bullet of this.bullets) {
                bullet.update(deltaTime);
                if (bullet.destroyed) {
                    this.bullets.pop();
                }
            }
        }
    };
}
