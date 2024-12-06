const DISPOSE = Symbol('dispose');

class Resource {
  constructor(name) {
    this.name = name;
    this[DISPOSE] = false;
  }

  dispose() {
    this[DISPOSE] = true;
    console.log(`${this.name} has been disposed.`);
  }

  isDisposed() {
    return this[DISPOSE];
  }
}

const res = new Resource('MyResource');
console.log(res.isDisposed()); // false
res.dispose(); // MyResource has been disposed.
console.log(res.isDisposed()); // true

// The symbol property is not enumerable
for (let key in res) {
  console.log(key); // Only 'name' will be logged, not the symbol property
}
