import Race from './Race';

export default class Orc extends Race {
  _maxLifePoints: number;
  static _instanceOrc = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 74;
    Orc._instanceOrc += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instanceOrc;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}