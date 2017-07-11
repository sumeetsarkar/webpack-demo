import { TWO } from './commons';

// Tree shaking will not eliminate TWO from commons as it is used here
console.log(TWO);

export function logEvent (name, value) {
  console.log(name, value);
}

export function logEventWithCallback (name, value, callback) {
  console.log(name, value);
  callback && callback();
}
