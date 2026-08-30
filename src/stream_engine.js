class BatchRegistry {
  constructor(seed = 31) {
    this.state = seed;
  }

  load_buffer(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 31) % 997;
    }
    return result;
  }
}

const obj = new BatchRegistry();
console.log(obj.load_buffer(31));

module.exports = BatchRegistry;
