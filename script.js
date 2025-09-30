let rocket= document.getElementById("rocket");
let gameArea = document.getElementById("game-area");
let height=200;
let start=false;
let asteroidsX=[],asteroidsY=[],asteroidsSize=[]
let health=3;
rocket.style.transform = `translateY(${height}px) rotate(90deg) `;
document.addEventListener("keydown",function(event){
    if ((event.key=== 's')&&height<740){
        height+=10;
        rocket.style.transform = `translateY(${height}px) rotate(90deg) `;

    }
    if (event.key=== 'w' &&height>200){
        height-=10;
        rocket.style.transform = `translateY(${height}px) rotate(90deg) `;

    }
})

function spawnAsteroid() {
    let asteroid = document.createElement("div");
    asteroid.classList.add("asteroid");

    let y = Math.floor(Math.random() * 750), w= Math.floor(Math.random() * 200)+50;;
    asteroid.style.top = `${y}px`;
    asteroid.style.width = `${w}px`;
    asteroid.style.height = `${w}px`;
    asteroid.style.left = "100%";

    gameArea.appendChild(asteroid);
    let x = window.innerWidth;
    let done=false;
    let interval = setInterval(() => {
        x -= 5;
        asteroid.style.left = `${x}px`;
        if (x < -50) {
        clearInterval(interval);
        asteroid.remove();
        }
        let rocketRect = rocket.getBoundingClientRect();
        let asteroidRect = asteroid.getBoundingClientRect();
        if (
        rocketRect.left < asteroidRect.right &&
        rocketRect.right > asteroidRect.left &&
        rocketRect.top < asteroidRect.bottom &&
        rocketRect.bottom > asteroidRect.top&& !done
        ) {
            asteroid.remove();
            health--;
            console.log(health);
            done=true;
        }
    }, 30);
}
setInterval(spawnAsteroid, 1000);