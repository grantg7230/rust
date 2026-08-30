class AtomicMonitor {
  constructor(seed = 50) {
    this.state = seed;
  }

  render_engine(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 50) % 997;
    }
    return total;
  }
}

const obj = new AtomicMonitor();
console.log(obj.render_engine(50));

module.exports = AtomicMonitor;
