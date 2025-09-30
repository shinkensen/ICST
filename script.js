let rocket= document.getElementById("rocket");
let gameArea = document.getElementById("game-area");
let height=0;
let start=false;
let asteroidsX=[],asteroidsY=[],asteroidsSize=[]
document.addEventListener("keydown",function(event){
    if ((event.key=== 's')&&height<540){
        height+=10;
        rocket.style.marginTop = `${height}px`;
    }
    if (event.key=== 'w' &&height>0){
        height-=10;
        rocket.style.marginTop = `${height}px`;
    }
})

function spawnAsteroid() {
    let asteroid = document.createElement("div");
    asteroid.classList.add("asteroid");

    let y = Math.floor(Math.random() * 500);
    asteroid.style.top = `${y}px`;

    asteroid.style.left = "100%";

    gameArea.appendChild(asteroid);
    let x = window.innerWidth;
    let interval = setInterval(() => {
        x -= 5;
        asteroid.style.left = `${x}px`;
        if (x < -50) {
        clearInterval(interval);
        asteroid.remove();
        }
    }, 30);
}
setInterval(spawnAsteroid, 2000);