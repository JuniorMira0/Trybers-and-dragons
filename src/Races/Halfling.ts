import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Halfling._counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._counter;
  }
}