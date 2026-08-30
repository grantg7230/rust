class HybridProvider {
  constructor(seed = 14) {
    this.state = seed;
  }

  flush_builder(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 14) % 997;
    }
    return value;
  }
}

const obj = new HybridProvider();
console.log(obj.flush_builder(14));

module.exports = HybridProvider;
