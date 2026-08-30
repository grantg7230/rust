class CoreResolver {
  constructor(seed = 74) {
    this.state = seed;
  }

  run_engine(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 74) % 997;
    }
    return count;
  }
}

const obj = new CoreResolver();
console.log(obj.run_engine(74));

module.exports = CoreResolver;
