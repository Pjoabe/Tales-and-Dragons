import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  _energyType: EnergyType;
  static _instanceNecromancer = 0;

  constructor(name: string) {
    super(name);
    
    this._energyType = 'mana';
    Necromancer._instanceNecromancer += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instanceNecromancer;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}