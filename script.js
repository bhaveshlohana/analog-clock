setInterval(setDate, 1000);

const secondHand = document.querySelector("[data-second]");
const minuteHand = document.querySelector("[data-minute]");
const hourHand = document.querySelector("[data-hour]");

function setDate() {
  const curr = new Date();
  const secondsRatio = curr.getSeconds() / 60;
  const minutesRatio = (secondsRatio + curr.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + curr.getHours()) / 12;
  setRotation(secondsRatio, secondHand);
  setRotation(minutesRatio, minuteHand);
  setRotation(hoursRatio, hourHand);
}

function setRotation(ratio, elem) {
  elem.style.setProperty("--rotate", ratio * 360);
}

setDate();
