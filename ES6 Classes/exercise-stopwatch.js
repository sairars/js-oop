// This version of the stop-watch is able to achieve performance optimization
// by placing the start(), stop() and reset() methods in the StopWatch Prototype.
// It uses WeakMap() to implement private properties in ES6 Classes.

const _isRunning = new WeakMap();
const _startTime = new WeakMap();
const _stopTime = new WeakMap();
const _duration = new WeakMap();

class StopWatch {
    constructor() {
        _isRunning.set(this, false);
        _startTime.set(this, null);
        _stopTime.set(this, null);
        _duration.set(this, 0);
    }

    start() {
        if (_isRunning.get(this)) 
            throw new Error('Stopwatch has already started.');
        _isRunning.set(this, true);
        _startTime.set(this, Date.now());
    }

    stop() {
        if (!_isRunning.get(this))
          throw new Error('Stopwatch is not started.');
        
        
        _isRunning.set(this, false);
        _stopTime.set(this, Date.now());
      
        const seconds = (_stopTime.get(this) - _startTime.get(this)) / 1000;
        const total = _duration.get(this) + seconds;
        _duration.set(this, total);
    }

    reset() {
        _isRunning.set(this, false);
        _startTime.set(this, null);
        _stopTime.set(this, null);
        _duration.set(this, 0);
    }

    get duration() {
        return (_isRunning.get(this))? 
            'stop watch is running': 
            _duration.get(this);
    }
}

const sw = new StopWatch();


  