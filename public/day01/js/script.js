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
    console.log("실행");
  });

  //   $toggleButton.addEventListener("click", function () {
  //     alert("허허");
  //   });
  //   $toggleButton.addEventListener("click", () => {
  //     alert("크크");
  //   });
}
