export default class Inputs {
    constructor(ship) {
        document.addEventListener("keydown", e => {
            switch(e.code) {
                case "ArrowLeft":
                    ship.moveLeft();
                    break;

                case "ArrowRight":
                    ship.moveRight();
                    break;

                case "Space":
                    ship.shoot();
                    break;
            }
        });

        document.addEventListener("keyup", e => {
            switch(e.code) {
                case "ArrowLeft":
                    if (ship.speed < 0 ) ship.stop();
                    break;
                case "ArrowRight":
                    if (ship.speed > 0 ) ship.stop();
                    break;
            }
        });
    };
} 