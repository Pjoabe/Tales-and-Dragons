import Race from './Race';

export default class Dwarf extends Race {
  _maxLifePoints: number;
  static _instanceDwarf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 80;
    Dwarf._instanceDwarf += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instanceDwarf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}