class SecureProvider {
  constructor(seed = 32) {
    this.state = seed;
  }

  dispatch_handler(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 32) % 997;
    }
    return value;
  }
}

const obj = new SecureProvider();
console.log(obj.dispatch_handler(32));

module.exports = SecureProvider;
