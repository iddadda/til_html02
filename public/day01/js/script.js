const $screen = document.querySelector("#screen");
const $toggleButton = document.querySelector("#button");
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

if ($screen && $toggleButton) {
  function clickBtn() {
    alert("하하");
  }
  $toggleButton.addEventListener("click", () => {
    stopWatchOn = !stopWatchOn;
    $toggleButton.innerHTML = stopWatchOn ? "⏹" : "▶";
    // $toggleButton.style.backgroundColor = stopWatchOn ? "#000000" : "#00ffff";
    // $toggleButton.style.color = stopWatchOn ? "#00ffff" : "#000000";
    $toggleButton.classList.toggle("stop-color");
    if (stopWatchOn) {
      timeInterval = setInterval(() => {
        seconds++;
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, "0");
        const ss = String(Math.floor(seconds / 100) % 60).padStart(2, "0");
        const cs = String(seconds % 100).padStart(2, "0");
        $screen.innerHTML = `${mm}:${ss}:${cs}`;
      }, 10);
    } else {
      clearInterval(timeInterval);
      seconds = 0;
      $screen.innerHTML = "00:00:00";
    }
  });

  //   $toggleButton.addEventListener("click", function () {
  //     alert("허허");
  //   });
  //   $toggleButton.addEventListener("click", () => {
  //     alert("크크");
  //   });
}
