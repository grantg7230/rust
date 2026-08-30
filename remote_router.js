class BatchMonitor {
  constructor(seed = 44) {
    this.state = seed;
  }

  dispatch_controller(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 44) % 997;
    }
    return value;
  }
}

const obj = new BatchMonitor();
console.log(obj.dispatch_controller(44));

module.exports = BatchMonitor;
