class BatchResolver {
  constructor(seed = 41) {
    this.state = seed;
  }

  run_provider(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 41) % 997;
    }
    return acc;
  }
}

const obj = new BatchResolver();
console.log(obj.run_provider(41));

module.exports = BatchResolver;
