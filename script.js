let rocket= document.getElementById("rocket");
let gameArea = document.getElementById("game-area");
let health1=document.getElementById("health");
let score1=document.getElementById("score");
let score=0;
let height=120;
let health=3;
rocket.style.transform = `translateY(${height}px) rotate(90deg) `;
document.addEventListener("keydown",function(event){
    if ((event.key=== 's')&&height<740){
        height+=10;
        rocket.style.transform = `translateY(${height}px) rotate(90deg) `;

    }
    if (event.key=== 'w' &&height>120){
        height-=10;
        rocket.style.transform = `translateY(${height}px) rotate(90deg) `;

    }
})

function spawnAsteroid() {
    let asteroid = document.createElement("div");
    asteroid.classList.add("asteroid");

    let y = Math.floor(Math.random() * 850), w= Math.floor(Math.random() * 200)+50;;
    asteroid.style.top = `${y}px`;
    asteroid.style.width = `${w}px`;
    asteroid.style.height = `${w}px`;
    asteroid.style.left = "100%";
    let label = document.createElement("span");
    label.classList.add("label");
    let spd=12;
    if (w < 100) {
    label.textContent = "O(n)";
    } else if (w < 150) {
        label.textContent = "O(n²)";
        spd=8;
    } else if (w < 200) {
        label.textContent = "O(n³)";
        spd=4;
    } else {
        label.textContent = "O(2ⁿ)";
        spd=3;
    }
    label.style.color="white";
    label.style.textAlign="center";
    label.style.fontSize= "1.5em";
    asteroid.appendChild(label);
    gameArea.appendChild(asteroid);
    let x = window.innerWidth;
    let done=false;
    let interval = setInterval(() => {
        x -= spd;
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
            health1.textContent= `Health: ${health}`
            if (health<=0){
                window.location.href= "death.html";
                if (localStorage.getItem("score") <score){
                    localStorage.setItem("score",score)
                }
                else if (localStorage.getItem("score")==null){
                    localStorage.setItem("score",score);
                }
            }
        }
    }, 30);
}

function spawnPowerup() {
    let powerup = document.createElement("div");
    powerup.classList.add("powerup");

    let y = Math.floor(Math.random() * 850), w= Math.floor(Math.random() * 200)+50;;
    powerup.style.top = `${y}px`;
    powerup.style.width = `${w}px`;
    powerup.style.height = `${w}px`;
    powerup.style.left = "100%";
    let label = document.createElement("span");
    label.classList.add("label");
    let spd=12;
    if (w < 100) {
    label.textContent = "O(0)";
    } else if (w < 150) {
        label.textContent = "O(1)";
        spd=8;
    } else if (w < 200) {
        label.textContent = "O(log(n))";
        spd=4;
    } else {
        label.textContent = "O(n log(n))";
        spd=3;
    }
    label.style.color="white";
    label.style.textAlign="center";
    label.style.fontSize= "1.5em";
    powerup.appendChild(label);
    gameArea.appendChild(powerup);
    let x = window.innerWidth;
    let done=false;
    let interval = setInterval(() => {
        x -= spd;
        powerup.style.left = `${x}px`;
        if (x < -50) {
        clearInterval(interval);
        powerup.remove();
        }
        let rocketRect = rocket.getBoundingClientRect();
        let powerupRect = powerup.getBoundingClientRect();
        if (
        rocketRect.left < powerupRect.right &&
        rocketRect.right > powerupRect.left &&
        rocketRect.top < powerupRect.bottom &&
        rocketRect.bottom > powerupRect.top&& !done
        ) {
            powerup.remove();
            health++;
            console.log(health);
            done=true;
            health1.textContent= `Health: ${health}`
        }
    }, 30);
}
function scorer(){
    score++;
    score1.textContent = "Score: " + score;
}
setInterval(spawnAsteroid, 1000);
setInterval(spawnPowerup, 10000);
setInterval(scorer,100);