import {inherit, initial} from './common';
import {Dimension} from './dimension';

export const none = 'none';
export const hidden = 'hidden';

/**
 * Specifies a dotted border
 */
export const dotted = 'dotted';

/**
 * Specifies a dashed border
 */
export const dashed = 'dashed';

/**
 * Specifies a solid border
 */
export const solid = 'solid';

/**
 * Specifies a double border
 */
export const double = 'double';

/**
 * Specified a 3D grooved border
 */
export const groove = 'groove';

/**
 * Specifies a 3D ridged border
 */
export const ridge = 'ridge';

/**
 * Specifies a 3D inset border
 */
export const inset = 'inset';

/**
 * Specifies a 3D outset border
 */
export const outset = 'outset';

/**
 * Specifies a medium border
 */
export const medium = 'medium';

/**
 * Specifies a thin border
 */
export const thin = 'thin';

/**
 * Specifies a thick border
 */
export const thick = 'thick';

export interface Border {
  top?: BorderSide|typeof initial|typeof inherit;
  right?: BorderSide|typeof initial|typeof inherit;
  bottom?: BorderSide|typeof initial|typeof inherit;
  left?: BorderSide|typeof initial|typeof inherit;
}

export interface BorderSide {
  style?: typeof none|typeof hidden|typeof dotted|typeof dashed|typeof solid|
      typeof double|typeof groove|typeof ridge|typeof inset|typeof outset|
      typeof initial|typeof inherit;
  width?: Dimension|typeof medium|typeof thin|typeof thick|typeof initial|
      typeof inherit;
}
