let rocket= document.getElementById("rocket");
let gameArea = document.getElementById("game-area");
let height=0;
let start=false;
let asteroidsX=[],asteroidsY=[],asteroidsSize=[]
let health=3;
document.addEventListener("keydown",function(event){
    if ((event.key=== 's')&&height<540){
        height+=10;
        rocket.style.transform = `rotate(45deg) translateY(${height}px)`;

    }
    if (event.key=== 'w' &&height>0){
        height-=10;
        rocket.style.transform = `rotate(45deg) translateY(${height}px)`;

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
        if (x<150 && (y+100>height&&y-100<height) &&!done){
            asteroid.remove();
            health--;
            console.log(health);
            done=true;
        }
    }, 30);
}
setInterval(spawnAsteroid, 1000);