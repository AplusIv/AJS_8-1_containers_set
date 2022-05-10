export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Нельзя повторно добавить в команду одного и того же персонажа');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    // this.members.forEach((character) => this.add(character))
    for (const character of characters) {
      this.members.add(character);
    }
  }

  toArray() {
    return [...this.members];
  }
}
