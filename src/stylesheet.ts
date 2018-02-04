import {Border, BorderSide} from './border';
import {inherit, initial} from './common';

export interface StyleSheet {
  border?: Border|BorderSide|typeof initial|typeof inherit;
}

export function style(...styles: StyleSheet[]) {
  styles.forEach(def => console.dir(def));
}