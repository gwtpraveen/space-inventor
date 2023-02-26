import "./styles/main.scss";
import Game from "./js/Game";

const canvas = document.querySelector(".gameScreen");
const ctx = canvas.getContext("2d");
const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

let lastTime = 0;

const game = new Game(GAME_WIDTH, GAME_HEIGHT);

function mainLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.draw(ctx);
    game.update(deltaTime);
    
    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);
