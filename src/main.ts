export enum CSSUnits {
  em = 'em',
  default = '',
  pc = 'pc',
  pt = 'pt',
  px = 'px',
}

export class Dimension {
  constructor(private measure: CSSUnits, private value: number) {}

  toString(): string {
    return `${this.value}${this.measure}`;
  }
}

export function run() {
  const d = new Dimension(CSSUnits.pt, 35);

  console.log(d.toString());
}
