class Format {
  static time(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor(seconds % 60);

    let hDisplay = h < 10 ? "0" + h : h;
    let mDisplay = m < 10 ? "0" + m : m;
    let sDisplay = s < 10 ? "0" + s : s;

    return hDisplay + ":" + mDisplay + ":" + sDisplay;
  }
}

class Timer {
  constructor(timeNode) {
    this.timeNode = timeNode;
    this.seconds = 0;
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => {
      this.seconds++;
      this.update();
    }, 1000);
  }

  update() {
    this.timeNode.innerHTML = Format.time(this.seconds);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.stop();
    this.seconds = 0;
    this.update();
  }
}

class Main {
  constructor(appNode) {
    this.timeNode = appNode.querySelector(".timer");
    this.startButton = appNode.querySelector(".start");
    this.stopButton = appNode.querySelector(".stop");
    this.resetButton = appNode.querySelector(".reset");
  }

  loadTimer(Timer) {
    this.timer = new Timer(this.timeNode);
  }

  loadButtons() {
    if (!this.timer) {
      throw new ReferenceError("Timer não definido ou carregado depois de loadButtons");
    }

    this.startButton.onclick = () => this.timer.start();
    this.stopButton.onclick = () => this.timer.stop();
    this.resetButton.onclick = () => this.timer.reset();
  }
}

const app = document.querySelector("#app");
const main = new Main(app);

main.loadTimer(Timer); 
main.loadButtons();
