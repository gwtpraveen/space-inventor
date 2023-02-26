import Ship from "./Ship";
import EnemyShip from "./EnemyShip";
import Inputs from "./Inputs";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.ship = new Ship(this);
        new Inputs(this.ship);
        this.enemyShips = [];
        for (let i = 0; i < 10; i++) {
            let enemyShip = new EnemyShip(80 * i, 50, gameWidth, gameHeight);
            this.enemyShips.push(enemyShip);
        }
    };
    
    draw(ctx) {
        this.ship.draw(ctx);
        this.enemyShips.forEach(enemyShip => {
            enemyShip.draw(ctx);
        });
    };

    update(deltaTime) {
        this.ship.update(deltaTime);
        this.enemyShips.forEach(enemyShip => {
            enemyShip.update(deltaTime);
        })
    };
}