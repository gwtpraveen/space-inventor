import "./styles/main.scss";
const mainShip = document.querySelector(".main-ship");
const bg = document.querySelector(".bg");
const mainShipBullet = document.querySelector(".main-ship-bullet");
const enemiDivEl = document.querySelector(".enemies");

const WIDTH = bg.clientWidth;
const HEIGHT = bg.clientHeight;

const SHIPWIDTH = 75;
const SHIPHEIGHT = mainShip.clientHeight;
const SHIPSPEED = 10;
let numberOfEnemiShips = 30;

let mainShipX = WIDTH/2;
let bullY;

let mainShipFired = false;

mainShip.style.left = `${mainShipX}px`;

const moveMainShipLeft = () => {
    if (mainShipX - SHIPSPEED >= 0) {
        mainShipX -= SHIPSPEED;
        mainShip.style.left = `${mainShipX}px`;
    } else {
        mainShipX = 0;
        mainShip.style.left = `${mainShipX}px`;
    }
}

const moveMainShipRight = () => {
    if (mainShipX + SHIPSPEED <= WIDTH - SHIPWIDTH) {
        mainShipX += SHIPSPEED;
        mainShip.style.left = `${mainShipX}px`;
    } else {
        mainShipX = WIDTH - SHIPWIDTH;
        mainShip.style.left = `${mainShipX}px`;
    }
}

const shootMainShip = () => {
    if (!mainShipFired) {
        mainShipBullet.style.display = "block";
        mainShipFired = true;
        bullY = mainShip.offsetTop;
        let bullX = mainShipX + SHIPWIDTH/2;
        mainShipBullet.style.left = `${bullX}px`;
        mainShipBullet.style.top = `${bullY}px`;
        const bulletMovement = setInterval(() => {
            if (bullY > 0) {
                bullY -= 5;
                mainShipBullet.style.top = `${bullY}px`; 
            } else {
                clearInterval(bulletMovement);
                mainShipBullet.style.display = "none";
                mainShipFired = false;
            }
        }, 10)
    }
}

const enemiShips = [
    "./assets/alien1.png",
    "./assets/alien2.png",
    "./assets/alien3.png",
    "./assets/alien4.png",
    "./assets/alien5.png"
];

for (let i = 0; i < numberOfEnemiShips; i++) {
    let enemiShipImageEle = document.createElement("img");
    let randomNumber = Math.floor(Math.random() * enemiShips.length);
    enemiShipImageEle.src = enemiShips[randomNumber];
    enemiShipImageEle.classList.add(`enemImg${i}`);
    enemiDivEl.append(enemiShipImageEle);
}

// listen for key press
window.addEventListener("keydown", e => {
    if (e.code === "ArrowLeft") {
        moveMainShipLeft();
    } else if (e.code === "ArrowRight") {
        moveMainShipRight();
    } else if (e.code === "Space") {
        shootMainShip();
    }
})
// setInterval(() => {
//     moveMainShipLeft();
// }, 75)