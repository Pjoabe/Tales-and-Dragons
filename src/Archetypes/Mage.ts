import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  _energyType: EnergyType;
  static _instanceMage = 0;

  constructor(name: string) {
    super(name);
    
    this._energyType = 'mana';
    Mage._instanceMage += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._instanceMage;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}