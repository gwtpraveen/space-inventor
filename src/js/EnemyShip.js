export default class EnemyShip {
    constructor(x, y, gameWidth, gameHeight) {
        this.enemyShip = new Image;
        this.speed = 1;
        this.randomNumber = Math.floor(Math.random() * 5) + 1;
        this.enemyShip.src = `../assets/alien${4}.png`;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.position = {
            x: x,
            y: y
        };
        this.shipWidth = this.enemyShip.width;
        this.shipHeight = this.enemyShip.height;
    };
    
    draw(ctx) {
        ctx.drawImage(this.enemyShip, this.position.x, this.position.y);
    };
    
    collision(object) {
        this.shipMiddle = {
            x: this.position.x + Math.ceil(this.shipWidth / 2),
            y: this.position.y + Math.ceil(this.shipHeight / 2)
        };
        let objectX = object.position.x;
        let objectY = object.position.y;
        let distance = Math.sqrt(Math.pow(objectX - this.shipMiddle.x, 2) + Math.pow(objectY - this.shipMiddle.y, 2));
        // console.log("bulletX", objectX);
        // console.log("bulletY", objectY);
        // console.log("shipX", this.shipMiddle.x);
        // console.log("shipY", this.shipMiddle.y)
        // console.log("distance", distance); 
        // console.log(objectY - this.shipMiddle.y)
        // console.log("x", objectX - this.shipMiddle.x)
        console.log(distance)
        if (distance >= Math.min(this.shipWidth / 2, this.shipHeight / 2) &&
            distance <= Math.max(this.shipWidth / 2, this.shipHeight / 2)) {
                console.log("hit")
                return true;
        }
        
        // console.log(this.shipMiddle)
    };

    update(deltaTime) {
        this.position.x += this.speed;
        if (this.position.x >= this.gameWidth - this.enemyShip.width || this.position.x <= 0) {
            this.position.y += this.enemyShip.height + 20;
            this.speed = -this.speed;
        }
    };
};