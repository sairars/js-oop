// This version of the stop-watch is able to achieve performance optimization
// by placing the start(), stop() and reset() methods in the StopWatch Prototype.
// However, it messes with the state of the Stopwatch by allowing writes to
// fields that are purely implementation detail (such as isRunning or duration)
// It violtes the OOP principle of Abstraction. 
// We should always favour Abstraction over performance optimizations in order to 
// conform to OOP paradigm.

class StopWatch {
    constructor() {
      let duration = 0;
      let isRunning, startTime, stopTime;

      Object.defineProperty(this, 'duration', {
        get: function() {
          return (isRunning)? 
            'Stop watch is currently running' :
            duration; //duration in seconds
        },
        set: function(value) {
          duration = value;
        }
      });

      Object.defineProperty(this, 'startTime', {
        get: function() {
          return startTime; //duration in seconds
        },
        set: function(value) {
          startTime = value;
        }
      });

      Object.defineProperty(this, 'endTime', {
        get: function() {
          return endTime; //duration in seconds
        },
        set: function(value) {
          endTime = value;
        }
      });

      Object.defineProperty(this, 'isRunning', {
        get: function() {
          return isRunning; //duration in seconds
        },
        set: function(value) {
          isRunning = value;
        }
      });
    }
  }
  const sw = new StopWatch();

  StopWatch.prototype.start = function() {
    if (this.isRunning) 
      throw new Error('Stopwatch has already started.');
    this.isRunning = true;
    this.startTime = Date.now();
  };

  StopWatch.prototype.stop = function() {
    if (!this.isRunning)
      throw new Error('Stopwatch is not started.');
    this.isRunning = false;
    this.stopTime = Date.now();

    const seconds = (this.stopTime - this.startTime) / 1000;
    this.duration += seconds;
  };

  StopWatch.prototype.reset = function() {
    this.isRunning = false;
    this.startTime = null;
    this.stopTime = null;
    this.duration = 0;
  };


  