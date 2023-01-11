class StopWatch {
  constructor() {
    let startTime, stopTime, isRunning;
    let duration = 0;

    this.start = function () {
      if (isStarted) throw new Error("Stopwatch has already started.");
      isRunning = true;
      startTime = Date.now();
    };

    this.stop = function () {
      if (!isRunning) throw new Error("Stopwatch is not started.");
      isRunning = false;
      stopTime = Date.now();

      duration += (stopTime - startTime) / 1000;
    };

    this.reset = function () {
      isRunning = false;
      startTime = null;
      stopTime = null;
      duration = 0;
    };

    Object.defineProperty(this, "duration", {
      get: function () {
        return isRunning ? "Stop watch running" : duration; //duration in seconds
      },
    });
  }
}
const sw = new StopWatch();
