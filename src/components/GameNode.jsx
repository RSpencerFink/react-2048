export default class GameNode {
  constructor(value) {
    this.id = Math.random() * 1000000;
    this.value = value;
    this.merged = false;
  }
}
