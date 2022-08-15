import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Elf._counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._counter;
  }
}