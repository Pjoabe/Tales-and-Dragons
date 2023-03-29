import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  _energyType: EnergyType;
  static _instanceRanger = 0;

  constructor(name: string) {
    super(name);
    
    this._energyType = 'stamina';
    Ranger._instanceRanger += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instanceRanger;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}