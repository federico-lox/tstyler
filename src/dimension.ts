/**
 * Relative to the font-size of the element (2em means 2 times the size of the
 * current font)
 */
export const em = 'em';

/**
 * Relative to the x-height of the current font
 */
export const ex = 'ex';

/**
 * Relative to width of the "0"
 */
export const ch = 'ch';

/**
 * Relative to font-size of the root element
 */
export const rem = 'rem';

/**
 * Relative to 1% of the width of the viewport
 */
export const vw = 'vw';

/**
 * Relative to 1% of the height of the viewport
 */
export const vh = 'vh';

/**
 * Relative to 1% of viewport's smaller dimension
 */
export const vmin = 'vmin';

/**
 * Relative to 1% of viewport's larger dimension
 */
export const vmax = 'vmax';

/**
 * Percentage relative to te parent element
 */
export const perc = '%';

/**
 * Centimeters
 */
export const cm = 'cm';

/**
 * Millimeters
 */
export const mm = 'mm';

/**
 * Inches (1in = 96px = 2.54cm)
 */
export const inch = 'in';

/**
 * Pixels (1px = 1/96th of 1in)
 */
export const px = 'px';

/**
 * Points (1pt = 1/72 of 1in)
 */
export const pt = 'pt';

/**
 * Picas (1pc = 12pt)
 */
export const pc = 'pc';

export interface Dimension {
  value: number;
  unit?: typeof em|typeof ex|typeof ch|typeof rem|typeof vw|typeof vh|
      typeof vmin|typeof vmax|typeof perc|typeof cm|typeof mm|typeof inch|
      typeof px|typeof pt|typeof pc;
}