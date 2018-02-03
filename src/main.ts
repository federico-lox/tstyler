export enum CSSUnits {
  em = 'em',
  default = '',
  pc = 'pc',
  pt = 'pt',
  px = 'px',
}

export class Dimension {
  constructor(private _measure: CSSUnits, private _value: number) {}

  toString(): string {
    return `${this._value}${this._measure}`;
  }
}

export function pt(value: number): Dimension {
  return new Dimension(CSSUnits.pt, value);
}

interface Style {
  border: Border;
}

export const solid = 'solid';
export const dotted = 'dotted';
export const double = 'double';
export const inherit = 'inherit';
export const initial = 'initial';

export interface Border {
  top?: BorderSide;
  right?: BorderSide;
  bottom?: BorderSide;
  left?: BorderSide;
}

export interface BorderSide {
  style?: typeof solid|typeof dotted|typeof double|typeof inherit|
      typeof initial;
  width?: Dimension;
}

function style(...definitions: Style[]) {
  definitions.forEach(def => console.dir(def));
}

export function run() {
  style({border: {top: {width: pt(35), style: inherit}}});
}
