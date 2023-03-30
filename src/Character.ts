import Fighter from './Fighter/Fighter';
import Archetype, { Mage } from './Archetypes';
import Race, { Elf } from './Races';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  _name: string;

  constructor(name: string) {
    this._race = new Elf(name, this.dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
    this._name = name;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
  
    if (damage < 0) {
      this._lifePoints -= 1;
      return this.lifePoints;
    }
    if (this.lifePoints - damage <= 0) {
      this._lifePoints = -1;
      return this.lifePoints;
    }
    this._lifePoints = this.lifePoints - damage;

    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._maxLifePoints = this._maxLifePoints
     > this._race.maxLifePoints ? this._race.maxLifePoints 
      : this._maxLifePoints;
    this._lifePoints = this._maxLifePoints;
  }

  get name(): string {
    return this._name;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get race(): Race {
    return this._race;
  }
}