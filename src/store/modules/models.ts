export class Hero {
  constructor(
    public id: string,
    public name: string = '',
    public description: string = '',
    public speed: string = '',
    public strength: string = '',
    public intelligence: string = ''
  ) {}
}

export class Villain {
  constructor(
    public id: string,
    public name: string = '',
    public description: string = '',
    public speed: string = '',
    public strength: string = '',
    public intelligence: string = ''
  ) {}
}

export interface State {
  result: number;
  heroSelected: number;
  villainSelected: number;
  powerSelected: string;
}
