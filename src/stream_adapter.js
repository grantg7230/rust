class SmartProcessor {
  constructor(seed = 39) {
    this.state = seed;
  }

  collect_router(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 39) % 997;
    }
    return acc;
  }
}

const obj = new SmartProcessor();
console.log(obj.collect_router(39));

module.exports = SmartProcessor;
