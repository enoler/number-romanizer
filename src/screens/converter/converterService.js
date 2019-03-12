export default class ConverterService {
  constructor () {
    this.ROMAN_INTEGER_MAP = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  }

  calculateRomanNumber (intNumber) {
    return Object.keys(this.ROMAN_INTEGER_MAP).find((romanKey) =>
      this.ROMAN_INTEGER_MAP[romanKey] === intNumber);
  }

  getRomanNumber (intNumber) {
    switch (true) {
      case !Number.isInteger(intNumber):
      case isNaN(intNumber):
      case intNumber <= 0:
      case intNumber >= 4000:
        return NaN;
      default:
        return this.calculateRomanNumber(intNumber);
    }
  }
}
