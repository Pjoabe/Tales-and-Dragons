import Race from './Race';

export default class Elf extends Race {
  _maxLifePoints: number;
  static _instanceElf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 99;
    Elf._instanceElf += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instanceElf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}