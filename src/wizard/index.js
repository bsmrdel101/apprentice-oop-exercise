import Character from '../character';

class Wizard extends Character {
  #timesAttacked = 0;
  #protection = 3;

  talk() {
    return `HELLO! MY NAME IS ${this.name.toUpperCase()}.`;
  }

  attack() {
    this.#timesAttacked += 1;

    if (this.#protection > 0) {
      // When protection spell is active, don't take damage and deal double damage back.
      this.#protection -= 1;
      return 2;
    }

    // Take 10 damage in all other cases
    if (this.#protection <= 0) this.health -= 10;

    // Cast protection if this is the first attack
    if (this.#timesAttacked === 1) {
      this.#protection = 3;
    }
    return 1;
  }
}

export default Wizard;
