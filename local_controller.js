class LocalFactory {
  constructor(seed = 97) {
    this.state = seed;
  }

  compute_resolver(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 97) % 997;
    }
    return acc;
  }
}

const obj = new LocalFactory();
console.log(obj.compute_resolver(97));

module.exports = LocalFactory;
