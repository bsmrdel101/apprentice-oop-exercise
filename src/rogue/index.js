import Character from '../character';

class Rogue extends Character {
  #timesAttacked = 0;

  talk() {
    return `hello. my name is ${this.name}.`.toLowerCase();
  }

  attack() {
    this.#timesAttacked += 1;

    // Only able to get hit every 5th attack
    if (this.#timesAttacked % 5 === 0) {
      this.health -= 5;
      return 1;
    }

    // When enemy misses, counter with 5 damage
    return 5;
  }
}

export default Rogue;
