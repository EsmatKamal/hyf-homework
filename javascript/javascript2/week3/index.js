// Confetti Function
const canvas = document.querySelector("#my-confetti");
const jsConfetti = new JSConfetti();

let timerStarter;
let timerIsRunning = true;
let clInterval;
let clInterval2;
let s = 0;
let l = 0;
const userInput = document.querySelector("input");


// Coundown Before Game tarted
let TimerStopped = true;

function countDownBeforeStart() {
  if (isNaN(userInput.value) || userInput.value.trim() === "") {
    alert("Please enter a valid number.");
  } else if (timerStopped === true) {
    document.querySelector(".start").disabled = true;
    s = 0;
    document.querySelector(".sResult p").innerText = `${s}`;
    l = 0;
    document.querySelector(".lResult p").innerText = `${l}`;
    document.querySelector("h3").innerHTML = "";
    let secs = 4;
    let clInterval = setInterval(tick, 1000);
    function tick() {
      secs--;
      document.querySelector("h2").innerHTML = secs;
      if (secs === 0) {
        clearInterval(clInterval);
        document.querySelector("h2").innerHTML = "GO!";
        timer();
      }
    }
  }
}


// In Game Countdown
function timer() {
    let roundTime = userInput.value;
    clInterval2 = setInterval(tick, 1000);
  
    function tick() {
      roundTime--;
      document.querySelector("h3").innerHTML = roundTime;
      if (roundTime === 0) {
        clearInterval(clInterval2);
        document.querySelector("h3").innerHTML = `Game is over!`;
  
        if (s > l) {
          document.querySelector(".winner").innerHTML = `<p>Player S wins!</p>`;
          jsConfetti.addConfetti();
        } else if (s < l) {
          document.querySelector(".winner").innerHTML = `<p>Player L wins!</p>`;
          jsConfetti.addConfetti();
        } else {
          document.querySelector(".winner").innerHTML = `<p>DRAAAAAAW!</p>`;
        }
  
        timerStoped = true;
        document.querySelector(".start").disabled = false;
      }
    }
  
    timerStoped = false;
    s = 0;
    l = 0;
    document.querySelector(".lResult p").innerText = `${l}`;
    document.querySelector(".sResult p").innerText = `${s}`;
    window.addEventListener("keyup", count);
  
    timerStarter = setTimeout(() => {
      clearInterval(clInterval2);
      tick();
  
      timerStoped = true;
      document.querySelector(".start").disabled = false;
    }, userInput.value * 1000);
  
    return;
  }
  
// Key Count Function
let sCount = 0;
let lCount = 0;
let timerStopped = false;

// Count key presses for "s" and "l"
function countKeyPress(event) {
  if (event.key === "s" && !timerStopped) {
    updateCount(".sResult p", ++sCount);
  } else if (event.key === "l" && !timerStopped) {
    updateCount(".lResult p", ++lCount);
  } else if (timerStopped) {
    window.removeEventListener("keyup", countKeyPress);
  }
}

// Updated  count display
function updateCount(selector, count) {
  document.querySelector(selector).innerText = count.toString();
}

// Start the countdown timer before the game
function countDownBeforeStart() {
  // TODO: countdown timer
  window.addEventListener("keyup", countKeyPress);
}

// Reset
document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
});
