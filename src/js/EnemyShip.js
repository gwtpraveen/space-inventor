export default class EnemyShip {
    constructor(x, y, gameWidth, gameHeight) {
        this.enemyShip = new Image;
        this.speed = 1;
        this.randomNumber = Math.floor(Math.random() * 5) + 1;
        this.enemyShip.src = `../assets/alien${3}.png`;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.position = {
            x: x,
            y: y
        };

    };

    draw(ctx) {
        ctx.drawImage(this.enemyShip, this.position.x, this.position.y);
    };

    update(deltaTime) {
        this.position.x += this.speed;
        if (this.position.x >= this.gameWidth - this.enemyShip.width || this.position.x <= 0) {
            this.position.y += this.enemyShip.height + 20;
            this.speed = -this.speed;
        }
    };
};