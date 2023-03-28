import Race from './Race';

export default class Halfling extends Race {
  _maxLifePoints: number;
  static _instanceHalfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;
    Halfling._instanceHalfling += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instanceHalfling;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}