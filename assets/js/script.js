if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then((reg) => {
    console.log("Service worker registered.", reg);
  });
}

// プッシュ通知の設定
window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "2a8b9d4e-b48b-4e33-9f59-0baa2922d3b8",
  });
});

let time = null;
const wrap = document.querySelector("#buttonWrap");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const text = document.querySelector("#result");

const getTime = () => {
  return new Date().getTime();
};

const formatSeconds = (time) => {
  return time / 1000;
};

startButton.addEventListener("click", () => {
  wrap.classList.add("-play");
  time = getTime();
  text.innerHTML = "";
});

stopButton.addEventListener("click", () => {
  wrap.classList.remove("-play");
  const count = getTime() - time;

  const result =
    count === 3000
      ? "ぴったり！おめでとう！！"
      : 2900 < count && count < 3100
      ? "すごい！"
      : 2500 < count && count < 3500
      ? "おしい！"
      : "もう1回やってみよう";

  text.innerHTML = `${formatSeconds(count)}秒！${result}`;
});
