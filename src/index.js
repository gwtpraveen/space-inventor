import "./styles/main.scss";
const mainShip = document.querySelector(".main-ship");
const bg = document.querySelector(".bg");
const mainShipBullet = document.querySelector(".bullet");

const WIDTH = bg.clientWidth;
const HEIGHT = bg.clientHeight;

const SHIPWIDTH = 100;
const SHIPHEIGHT = mainShip.clientHeight;
const SHIPSPEED = 10;

let mainShipX = WIDTH/2;
let bullY;

mainShip.style.left = `${mainShipX}px`;
console.log(WIDTH)

// listen for key press
window.addEventListener("keydown", e => {
    if (e.code === "ArrowLeft") {
        console.log("left arrow");
        if (mainShipX - SHIPSPEED >= 0) {
            mainShipX -= SHIPSPEED;
            mainShip.style.left = `${mainShipX}px`;
        } else {
            mainShipX = 0;
            mainShip.style.left = `${mainShipX}px`;
        }
    } else if (e.code === "ArrowRight") {
        console.log("right arrow");
        if (mainShipX + SHIPSPEED <= WIDTH - SHIPWIDTH) {
            mainShipX += SHIPSPEED;
            mainShip.style.left = `${mainShipX}px`;
        } else {
            mainShipX = WIDTH - SHIPWIDTH;
            mainShip.style.left = `${mainShipX}px`;
        }
    } else if (e.code === "Space") {
        console.log(mainShipBullet)
        while (bullY < 100) {
            mainShipBullet.style.top = bullY; 
        }
    }
})