const buttonStart = document.querySelector(".startButton");
const buttonRetry = document.querySelector(".retryButton");
const start = document.querySelector(".start");
const helicopter = document.querySelector(".helicopter");
const hill = document.querySelector(".hill");
const propeller = document.querySelector(".propeller");
const game = document.querySelector(".game");
const gameOver = document.querySelector(".gameOver");


const startGame = () => {
  start.style.display = "none";
  gameOver.style.display = "none";
  game.style.display = "block";
  propeller.style.animationPlayState = 'running'
  hill.style.animationPlayState = 'running';
};

buttonStart.onclick = startGame;
buttonRetry.onclick = startGame;

document.addEventListener("keydown", function (e) {
  e.code === "Space" && jump();
});

function jump() {
  if (helicopter.classList != "jump") {
    helicopter.classList.add("jump");
  }

  setTimeout(function () {
    helicopter.classList.remove("jump");
  }, 1200);
}

setInterval(function () {
  let helicopterTop = parseInt(
    window.getComputedStyle(helicopter).getPropertyValue("top")
  );
  let hillLeft = parseInt(
    window.getComputedStyle(hill).getPropertyValue("left")
  );

  if (helicopterTop > 115 && hillLeft < 55) {
    propeller.style.animationPlayState = 'paused'
    hill.style.animationPlayState = 'paused'
    
    setTimeout(() => {
       gameOver.style.display = "block";
        game.style.display = "none"; 
    }, 100)
    
  }
}, 5);
