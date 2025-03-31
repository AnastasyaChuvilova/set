export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Member already exists!');
    }
    this.members.add(member);
  }

  addAll(...members) {
    members.forEach((member) => this.add(member));
  }

  toArray() {
    return [...this.members];
  }
}
