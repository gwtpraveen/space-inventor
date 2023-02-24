import "./styles/main.scss";
import Ship from "./js/Ship.js";
import Inputs from "./js/Inputs";

const canvas = document.querySelector(".gameScreen");
const ctx = canvas.getContext("2d");
const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

let lastTime = 0;

const ship = new Ship(GAME_WIDTH, GAME_HEIGHT);
new Inputs(ship);

function mainLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ship.draw(ctx);
    ship.update(deltaTime);
    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);
