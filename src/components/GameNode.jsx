export default class GameNode {
  constructor(value) {
    this.id = Math.random() * 1000000;
    this.value = value;
    this.merged = false;
  }

  zero = () => {
    this.value = 0;
    this.merged = false;
  };

  setValue = value => {
    this.value = value;
  };

  double = () => {
    this.value = this.value * 2;
    this.merged = true;
  };

  unMerge = () => {
    this.merged = false;
  };
}
