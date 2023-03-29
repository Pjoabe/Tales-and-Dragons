import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  _energyType: EnergyType;
  static _instanceWarrior = 0;

  constructor(name: string) {
    super(name);
    
    this._energyType = 'stamina';
    Warrior._instanceWarrior += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instanceWarrior;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}